import React from 'react';
import { Smartphone, Monitor, Square, Download, Trash2, Undo2, Redo2, Gamepad2 } from 'lucide-react';

export default function Navbar({
  presetKey,
  setPresetKey,
  onClear,
  onExport,
  canUndo,
  canRedo,
  onUndo,
  onRedo
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F0FF] border-b-2 border-[#120E16] px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#7C3AED] border-2 border-[#120E16] shadow-[2px_2px_0_#120E16] flex items-center justify-center text-white">
            <Gamepad2 className="w-5 h-5 text-[#00E5A3]" />
          </div>
          <div>
            <h1 className="font-display uppercase text-2xl sm:text-3xl text-[#7C3AED] display-stroke tracking-wide leading-none">
              AOV STUDIO
            </h1>
            <p className="font-mono text-[11px] text-[#5C526A] font-bold tracking-tight">
              HD WALLPAPER GENERATOR
            </p>
          </div>
        </div>

        {/* Preset Selector & History Controls */}
        <div className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-full border-2 border-[#120E16] shadow-[3px_3px_0_#120E16]">
          <div className="flex items-center gap-1 border-r-2 border-[#120E16] pr-2 mr-1">
            <button
              onClick={() => setPresetKey('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition ${
                presetKey === 'mobile'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Mobile (9:16)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              onClick={() => setPresetKey('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition ${
                presetKey === 'desktop'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Desktop (16:9)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setPresetKey('square')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition ${
                presetKey === 'square'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Square (1:1)"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Square</span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="p-1 rounded-lg text-[#120E16] hover:bg-[#F4F0FF] disabled:opacity-30 transition"
              title="Undo"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="p-1 rounded-lg text-[#120E16] hover:bg-[#F4F0FF] disabled:opacity-30 transition"
              title="Redo"
            >
              <Redo2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Actions: Reset & Export */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full font-mono text-xs font-bold text-rose-700 bg-rose-100 hover:bg-rose-200 border-2 border-[#120E16] transition"
            title="Reset Canvas"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset</span>
          </button>
          <button
            onClick={onExport}
            className="arcade-btn-mint px-4 py-2 rounded-full text-xs flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT HD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
