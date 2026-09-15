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
    <header className="sticky top-0 z-40 w-full bg-[#F4F0FF] border-b-2 border-[#120E16] px-2.5 sm:px-4 py-1.5 sm:py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#7C3AED] border-2 border-[#120E16] shadow-[2px_2px_0_#120E16] flex items-center justify-center text-white shrink-0">
            <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E5A3]" />
          </div>
          <div>
            <h1 className="font-display uppercase text-lg sm:text-2xl font-bold tracking-wider leading-none flex items-center gap-1">
              <span className="text-[#7C3AED] drop-shadow-[1.5px_1.5px_0_#120E16]">AOV</span>
              <span className="bg-[#00E5A3] text-[#120E16] px-1.5 py-0.5 rounded-md border-2 border-[#120E16] shadow-[1.5px_1.5px_0_#120E16] text-xs sm:text-base">
                STUDIO
              </span>
            </h1>
          </div>
        </div>

        {/* Center: Presets & History Controls */}
        <div className="flex items-center gap-1 bg-white px-1.5 sm:px-2.5 py-1 rounded-full border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]">
          <div className="flex items-center gap-0.5 sm:gap-1 border-r-2 border-[#120E16] pr-1.5 sm:pr-2 mr-0.5">
            <button
              onClick={() => setPresetKey('mobile')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold transition ${
                presetKey === 'mobile'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[1.5px_1.5px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Mobile (9:16)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mobile</span>
            </button>
            <button
              onClick={() => setPresetKey('desktop')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold transition ${
                presetKey === 'desktop'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[1.5px_1.5px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Desktop (16:9)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setPresetKey('square')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold transition ${
                presetKey === 'square'
                  ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[1.5px_1.5px_0_#120E16]'
                  : 'text-[#120E16] hover:bg-[#F4F0FF]'
              }`}
              title="Square (1:1)"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Square</span>
            </button>
          </div>

          <div className="flex items-center gap-0.5">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="p-1 rounded-lg text-[#120E16] hover:bg-[#F4F0FF] disabled:opacity-30 transition"
              title="Undo"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="p-1 rounded-lg text-[#120E16] hover:bg-[#F4F0FF] disabled:opacity-30 transition"
              title="Redo"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClear}
            className="px-2.5 sm:px-3 py-1.5 rounded-full font-mono text-xs font-bold text-rose-700 bg-rose-100 hover:bg-rose-200 border-2 border-[#120E16] transition flex items-center gap-1.5 shrink-0 shadow-[1.5px_1.5px_0_#120E16]"
            title="Reset Canvas"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            onClick={onExport}
            className="arcade-btn-mint px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">EXPORT HD</span>
            <span className="sm:hidden text-[11px] font-bold">HD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
