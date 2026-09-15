import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import CanvasStudio from './components/CanvasStudio';
import AssetBrowser from './components/AssetBrowser';
import LayerControlsBar from './components/LayerControlsBar';
import LayersManager from './components/LayersManager';
import ExportModal from './components/ExportModal';
import { useCanvasState } from './hooks/useCanvasState';
import { Gamepad2, Image as ImageIcon, User, Award, Type, Upload, Eye, Layers } from 'lucide-react';

export default function App() {
  const stageRef = useRef();
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Asset Browser active tab
  const [activeTab, setActiveTab] = useState('backgrounds');

  // Mobile View Toggle: 'canvas' | 'asset' | 'layers'
  const [mobileActiveView, setMobileActiveView] = useState('canvas');

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

  // Mobile navigation tab handler
  const handleMobileNavTab = (viewOrTab) => {
    if (viewOrTab === 'canvas') {
      setMobileActiveView('canvas');
    } else if (viewOrTab === 'layers') {
      setMobileActiveView('layers');
    } else {
      setActiveTab(viewOrTab);
      setMobileActiveView('asset');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0FF] text-[#120E16] font-mono selection:bg-[#00E5A3] selection:text-[#120E16] pb-16 lg:pb-0">
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
        <section
          className={`lg:col-span-7 xl:col-span-7 flex flex-col h-[calc(100vh-8.5rem)] lg:h-[calc(100vh-6rem)] relative ${
            mobileActiveView === 'canvas' ? 'block' : 'hidden lg:flex'
          }`}
        >
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

          {/* Selected Layer Action Toolbar (Floating directly above mobile bottom nav on mobile) */}
          {selectedLayer && (
            <div className="fixed bottom-16 left-2 right-2 z-40 lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:z-auto lg:mt-3">
              <LayerControlsBar
                selectedLayer={selectedLayer}
                onDuplicate={duplicateLayer}
                onFlipH={flipHorizontal}
                onFlipV={flipVertical}
                onMoveUp={(id) => moveLayerOrder(id, 'up')}
                onMoveDown={(id) => moveLayerOrder(id, 'down')}
                onMoveTop={(id) => moveLayerOrder(id, 'top')}
                onMoveBottom={(id) => moveLayerOrder(id, 'bottom')}
                onDelete={deleteLayer}
              />
            </div>
          )}
        </section>

        {/* Right Column: Asset Selector OR Layers Manager */}
        <section
          className={`lg:col-span-5 xl:col-span-5 h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)] relative ${
            mobileActiveView !== 'canvas' ? 'block' : 'hidden lg:block'
          }`}
        >
          <AssetBrowser
            onAddLayer={(layerData) => {
              addLayer(layerData);
              if (layerData?.subType === 'bg') {
                setActiveTab('skins');
                if (window.innerWidth < 1024) {
                  setMobileActiveView('asset');
                }
              } else {
                if (window.innerWidth < 1024) {
                  setMobileActiveView('canvas');
                }
              }
            }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            layers={layers}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            onDuplicate={duplicateLayer}
            onFlipH={flipHorizontal}
            onFlipV={flipVertical}
            onMoveOrder={moveLayerOrder}
            onDelete={deleteLayer}
          />

          {/* Floating Back to Canvas Button on Mobile */}
          {mobileActiveView !== 'canvas' && (
            <button
              onClick={() => setMobileActiveView('canvas')}
              className="lg:hidden fixed bottom-18 right-4 z-40 arcade-btn-mint px-4 py-2.5 rounded-full text-xs flex items-center gap-2 shadow-xl animate-bounce"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW CANVAS ({layers.length})</span>
            </button>
          )}
        </section>
      </main>

      {/* Mobile Fixed Bottom Navigation Menu */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1528] border-t-2 border-[#120E16] px-1 py-1.5 flex items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.4)]">
        <button
          onClick={() => handleMobileNavTab('canvas')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-[10px] font-bold transition ${
            mobileActiveView === 'canvas'
              ? 'text-[#00E5A3] bg-[#211B33] border border-[#00E5A3]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Gamepad2 className="w-4 h-4 mb-0.5" />
          <span>Canvas</span>
        </button>

        <button
          onClick={() => handleMobileNavTab('backgrounds')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-[10px] font-bold transition ${
            mobileActiveView === 'asset' && activeTab === 'backgrounds'
              ? 'text-[#00E5A3] bg-[#211B33] border border-[#00E5A3]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <ImageIcon className="w-4 h-4 mb-0.5" />
          <span>Wallpapers</span>
        </button>

        <button
          onClick={() => handleMobileNavTab('skins')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-[10px] font-bold transition ${
            mobileActiveView === 'asset' && activeTab === 'skins'
              ? 'text-[#00E5A3] bg-[#211B33] border border-[#00E5A3]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <User className="w-4 h-4 mb-0.5" />
          <span>Skins</span>
        </button>

        <button
          onClick={() => handleMobileNavTab('badges')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-[10px] font-bold transition ${
            mobileActiveView === 'asset' && activeTab === 'badges'
              ? 'text-[#00E5A3] bg-[#211B33] border border-[#00E5A3]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Badges</span>
        </button>

        <button
          onClick={() => handleMobileNavTab('layers')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-[10px] font-bold transition relative ${
            mobileActiveView === 'asset' && activeTab === 'layers'
              ? 'text-[#00E5A3] bg-[#211B33] border border-[#00E5A3]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span>Layers</span>
          {layers.length > 0 && (
            <span className="absolute top-0.5 right-2 w-3.5 h-3.5 bg-[#7C3AED] text-white text-[8px] font-bold rounded-full flex items-center justify-center border border-[#120E16]">
              {layers.length}
            </span>
          )}
        </button>
      </nav>

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
