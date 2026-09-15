import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Text as KonvaText, Transformer } from 'react-konva';

function URLImage({ layer, isSelected, onSelect, onChange, stageWidth, stageHeight }) {
  const [imageObj, setImageObj] = useState(null);
  const shapeRef = useRef();

  useEffect(() => {
    let isMounted = true;
    const img = new window.Image();
    img.src = layer.src;
    img.onload = () => {
      if (!isMounted) return;
      setImageObj(img);
      
      // Auto-fit initial placement if width/height not set
      if (!layer.initialized) {
        let renderWidth = img.width;
        let renderHeight = img.height;

        if (layer.subType === 'bg') {
          // Fit background to height/width
          const imageRatio = img.width / img.height;
          const stageRatio = stageWidth / stageHeight;
          if (imageRatio < stageRatio) {
            renderWidth = stageWidth;
            renderHeight = img.height * (stageWidth / img.width);
          } else {
            renderHeight = stageHeight;
            renderWidth = img.width * (stageHeight / img.height);
          }
        } else if (img.width > stageWidth * 0.9) {
          renderWidth = stageWidth * 0.8;
          renderHeight = img.height * (renderWidth / img.width);
        }

        onChange({
          width: renderWidth,
          height: renderHeight,
          offsetX: renderWidth / 2,
          offsetY: renderHeight / 2,
          x: layer.x || stageWidth / 2,
          y: layer.y || stageHeight / 2,
          initialized: true
        });
      }
    };
    return () => { isMounted = false; };
  }, [layer.src]);

  return (
    <KonvaImage
      ref={shapeRef}
      id={layer.id}
      image={imageObj}
      x={layer.x}
      y={layer.y}
      width={layer.width}
      height={layer.height}
      scaleX={layer.scaleX || 1}
      scaleY={layer.scaleY || 1}
      offsetX={layer.offsetX || 0}
      offsetY={layer.offsetY || 0}
      rotation={layer.rotation || 0}
      opacity={layer.opacity ?? 1}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={() => {
        const node = shapeRef.current;
        onChange({
          x: node.x(),
          y: node.y(),
          scaleX: node.scaleX(),
          scaleY: node.scaleY(),
          rotation: node.rotation(),
        });
      }}
    />
  );
}

function EditableText({ layer, isSelected, onSelect, onChange, stageWidth, stageHeight }) {
  const shapeRef = useRef();

  useEffect(() => {
    if (!layer.initialized && shapeRef.current) {
      const width = shapeRef.current.width();
      const height = shapeRef.current.height();
      onChange({
        offsetX: width / 2,
        offsetY: height / 2,
        initialized: true
      });
    }
  }, []);

  return (
    <KonvaText
      ref={shapeRef}
      id={layer.id}
      text={layer.text || ''}
      x={layer.x}
      y={layer.y}
      fontSize={layer.fontSize || 36}
      fontFamily={layer.fontFamily || 'Staatliches'}
      fill={layer.fill || '#00f0ff'}
      stroke={layer.stroke || '#000000'}
      strokeWidth={layer.strokeWidth ?? 1.5}
      align={layer.align || 'center'}
      scaleX={layer.scaleX || 1}
      scaleY={layer.scaleY || 1}
      offsetX={layer.offsetX || 0}
      offsetY={layer.offsetY || 0}
      rotation={layer.rotation || 0}
      opacity={layer.opacity ?? 1}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={() => {
        const node = shapeRef.current;
        onChange({
          x: node.x(),
          y: node.y(),
          scaleX: node.scaleX(),
          scaleY: node.scaleY(),
          rotation: node.rotation(),
        });
      }}
    />
  );
}

export default function CanvasStudio({
  stageRef,
  dimensions,
  layers,
  selectedId,
  setSelectedId,
  updateLayerProps
}) {
  const trRef = useRef();
  const containerRef = useRef();
  const [scale, setScale] = useState(1);

  // Responsive scaling to fit container cleanly
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth - 32;
      const containerHeight = containerRef.current.offsetHeight - 32;
      
      const scaleW = containerWidth / dimensions.width;
      const scaleH = containerHeight / dimensions.height;
      
      // Choose fit scale maxed at 1
      const fitScale = Math.min(scaleW, scaleH, 1);
      setScale(Math.max(fitScale, 0.3));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions]);

  // Update transformer target node
  useEffect(() => {
    if (!trRef.current) return;
    if (selectedId) {
      const stage = stageRef.current;
      const selectedNode = stage.findOne('#' + selectedId);
      if (selectedNode) {
        trRef.current.nodes([selectedNode]);
        trRef.current.getLayer().batchDraw();
      } else {
        trRef.current.nodes([]);
      }
    } else {
      trRef.current.nodes([]);
    }
  }, [selectedId, layers]);

  const handleStageClick = (e) => {
    // Deselect if clicked on empty stage background
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  const stageWidth = dimensions.width * scale;
  const stageHeight = dimensions.height * scale;

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center p-4 bg-[#03050c]/80 rounded-2xl border border-brand-border/40 relative overflow-hidden shadow-2xl"
    >
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e294b 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Canvas Wrapper */}
      <div
        className="relative shadow-2xl rounded-lg overflow-hidden border border-cyan-500/30 ring-1 ring-cyan-500/20 transition-all duration-300"
        style={{
          width: stageWidth,
          height: stageHeight,
        }}
      >
        <Stage
          ref={stageRef}
          width={dimensions.width}
          height={dimensions.height}
          scaleX={scale}
          scaleY={scale}
          onMouseDown={handleStageClick}
          onTouchStart={handleStageClick}
          className="bg-black"
        >
          <Layer>
            {layers.map((layer) => {
              const isSelected = layer.id === selectedId;
              const props = {
                key: layer.id,
                layer,
                isSelected,
                stageWidth: dimensions.width,
                stageHeight: dimensions.height,
                onSelect: () => setSelectedId(layer.id),
                onChange: (newProps) => updateLayerProps(layer.id, newProps),
              };

              if (layer.type === 'text') {
                return <EditableText {...props} />;
              }
              return <URLImage {...props} />;
            })}

            <Transformer
              ref={trRef}
              boundBoxFunc={(oldBox, newBox) => {
                // Minimum dimension constraints
                if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                  return oldBox;
                }
                return newBox;
              }}
              anchorStroke="#00f0ff"
              anchorFill="#0d1326"
              anchorSize={10}
              anchorCornerRadius={3}
              borderStroke="#00f0ff"
              borderDash={[4, 4]}
              rotateEnabled={true}
            />
          </Layer>
        </Stage>

        {/* Empty Canvas Placeholder overlay */}
        {layers.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none bg-brand-bg/60 backdrop-blur-xs">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 animate-bounce">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-heading text-xl text-cyan-300 tracking-wide">CANVAS IS READY</h3>
            <p className="text-xs text-slate-400 max-w-xs mt-1">
              Select a Hero Skin, Background Wallpaper, or Badge from the panel to start creating your wallpaper.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
