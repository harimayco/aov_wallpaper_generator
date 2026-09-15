import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import CanvasStudio from './components/CanvasStudio';
import AssetBrowser from './components/AssetBrowser';
import LayerControlsBar from './components/LayerControlsBar';
import ExportModal from './components/ExportModal';
import { useCanvasState } from './hooks/useCanvasState';

export default function App() {
  const stageRef = useRef();
  const [isExportOpen, setIsExportOpen] = useState(false);

  const {
    presetKey,
    setPresetKey,
    canvasDimensions,
    layers,
    selectedId,
    setSelectedId,
    addLayer,
    updateLayerProps,
    deleteLayer,
    duplicateLayer,
    flipHorizontal,
    flipVertical,
    moveLayerOrder,
    clearCanvas,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useCanvasState();

  const selectedLayer = layers.find((l) => l.id === selectedId);

  return (
    <div className="min-h-screen flex flex-col bg-[#050814] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <Navbar
        presetKey={presetKey}
        setPresetKey={setPresetKey}
        onClear={clearCanvas}
        onExport={() => setIsExportOpen(true)}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={undo}
        onRedo={redo}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Column: Canvas Studio */}
        <section className="lg:col-span-7 xl:col-span-7 flex flex-col h-[65vh] lg:h-[calc(100vh-6rem)] relative">
          <div className="flex-1 w-full h-full relative">
            <CanvasStudio
              stageRef={stageRef}
              dimensions={canvasDimensions}
              layers={layers}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              updateLayerProps={updateLayerProps}
            />
          </div>

          {/* Floating Selected Layer Toolbar */}
          {selectedLayer && (
            <div className="mt-3">
              <LayerControlsBar
                selectedLayer={selectedLayer}
                onDuplicate={duplicateLayer}
                onFlipH={flipHorizontal}
                onFlipV={flipVertical}
                onMoveUp={(id) => moveLayerOrder(id, 'up')}
                onMoveDown={(id) => moveLayerOrder(id, 'down')}
                onDelete={deleteLayer}
              />
            </div>
          )}
        </section>

        {/* Right Column: Asset Selector Panel */}
        <section className="lg:col-span-5 xl:col-span-5 h-[500px] lg:h-[calc(100vh-6rem)]">
          <AssetBrowser onAddLayer={addLayer} />
        </section>
      </main>

      {/* Export HD Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        stageRef={stageRef}
        presetName={canvasDimensions.name}
      />
    </div>
  );
}
