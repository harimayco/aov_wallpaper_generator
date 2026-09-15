import React from 'react';
import { Smartphone, Monitor, Square, Download, Trash2, Undo2, Redo2, Sparkles } from 'lucide-react';
import { CANVAS_PRESETS } from '../hooks/useCanvasState';

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
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-brand-border bg-[#0a0d1e]/80 backdrop-blur-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-brand-bg rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-heading text-2xl tracking-wider bg-gradient-to-r from-slate-100 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow">
              AOV WALLPAPER STUDIO
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">HD Canvas Generator</p>
          </div>
        </div>

        {/* Center: Presets & History Controls */}
        <div className="flex items-center gap-2 bg-brand-card/90 p-1.5 rounded-xl border border-brand-border/60 shadow-inner">
          <div className="flex items-center gap-1 border-r border-brand-border/60 pr-2 mr-1">
            <button
              onClick={() => setPresetKey('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                presetKey === 'mobile'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              title="Mobile Wallpaper (9:16)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              onClick={() => setPresetKey('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                presetKey === 'desktop'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              title="Desktop Wallpaper (16:9)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setPresetKey('square')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                presetKey === 'square'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              title="Square Banner (1:1)"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Square</span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition"
              title="Undo"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition"
              title="Redo"
            >
              <Redo2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-300 hover:text-rose-100 hover:bg-rose-500/10 border border-rose-500/20 transition"
            title="Clear Canvas"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset</span>
          </button>
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT HD</span>
          </button>
        </div>
      </div>
    </header>
  );
}
