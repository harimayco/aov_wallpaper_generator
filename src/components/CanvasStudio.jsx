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
      
      if (!layer.initialized) {
        let renderWidth = img.width;
        let renderHeight = img.height;

        if (layer.subType === 'bg') {
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
      fontFamily={layer.fontFamily || 'Fredoka'}
      fill={layer.fill || '#00E5A3'}
      stroke={layer.stroke || '#120E16'}
      strokeWidth={layer.strokeWidth ?? 2}
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

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth - 32;
      const containerHeight = containerRef.current.offsetHeight - 32;
      
      const scaleW = containerWidth / dimensions.width;
      const scaleH = containerHeight / dimensions.height;
      
      const fitScale = Math.min(scaleW, scaleH, 1);
      setScale(Math.max(fitScale, 0.25));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions]);

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
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  const stageWidth = dimensions.width * scale;
  const stageHeight = dimensions.height * scale;

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center p-3 sm:p-4 arcade-panel-dark rounded-2xl relative overflow-hidden"
    >
      {/* Dynamic Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7C3AED 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Canvas Frame */}
      <div
        className="relative rounded-xl overflow-hidden border-2 border-[#120E16] shadow-[4px_4px_0_#120E16] transition-all duration-300"
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
                if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                  return oldBox;
                }
                return newBox;
              }}
              anchorStroke="#00E5A3"
              anchorFill="#120E16"
              anchorSize={10}
              anchorCornerRadius={2}
              borderStroke="#00E5A3"
              borderDash={[4, 4]}
              rotateEnabled={true}
            />
          </Layer>
        </Stage>

        {/* Empty Canvas Overlay */}
        {layers.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none bg-[#1A1528]/80 backdrop-blur-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] border-2 border-[#120E16] shadow-[3px_3px_0_#120E16] flex items-center justify-center mb-3 animate-bounce text-white">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="font-display text-xl text-[#00E5A3] uppercase tracking-wider">
              CANVAS READY!
            </h3>
            <p className="font-mono text-xs text-white/80 max-w-xs mt-1">
              Select a Wallpaper, Hero Skin, or Badge from the panel to start creating.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
