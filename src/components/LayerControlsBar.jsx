import React from 'react';
import { Copy, FlipHorizontal, FlipVertical, ArrowUp, ArrowDown, ArrowUpToLine, ArrowDownToLine, Trash2, Layers } from 'lucide-react';

export default function LayerControlsBar({
  selectedLayer,
  onDuplicate,
  onFlipH,
  onFlipV,
  onMoveUp,
  onMoveDown,
  onMoveTop,
  onMoveBottom,
  onDelete
}) {
  if (!selectedLayer) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#1A1528] border-2 border-[#120E16] shadow-[3px_3px_0_#120E16] rounded-xl text-xs font-mono">
      <div className="flex items-center gap-2 text-[#00E5A3]">
        <Layers className="w-4 h-4 text-[#00E5A3]" />
        <span className="font-bold truncate max-w-[100px] sm:max-w-[140px]">
          {selectedLayer.type === 'text' ? `Text: "${selectedLayer.text}"` : selectedLayer.name || 'Selected'}
        </span>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none">
        {/* Layer Z-Index Reordering */}
        <button
          onClick={() => onMoveTop(selectedLayer.id, 'top')}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Bring to Front"
        >
          <ArrowUpToLine className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Front</span>
        </button>

        <button
          onClick={() => onMoveUp(selectedLayer.id, 'up')}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Move Forward"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Up</span>
        </button>

        <button
          onClick={() => onMoveDown(selectedLayer.id, 'down')}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Move Backward"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Down</span>
        </button>

        <button
          onClick={() => onMoveBottom(selectedLayer.id, 'bottom')}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Send to Back"
        >
          <ArrowDownToLine className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Back</span>
        </button>

        <div className="h-4 w-[2px] bg-[#120E16] mx-0.5" />

        {/* Flip Controls */}
        <button
          onClick={() => onFlipH(selectedLayer.id)}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Flip Horizontal"
        >
          <FlipHorizontal className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Flip H</span>
        </button>

        <button
          onClick={() => onFlipV(selectedLayer.id)}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition flex items-center gap-1"
          title="Flip Vertical"
        >
          <FlipVertical className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">Flip V</span>
        </button>

        <div className="h-4 w-[2px] bg-[#120E16] mx-0.5" />

        {/* Actions */}
        <button
          onClick={() => onDuplicate(selectedLayer.id)}
          className="p-1.5 rounded-lg text-amber-300 hover:bg-white/10 transition flex items-center gap-1"
          title="Duplicate Layer"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onDelete(selectedLayer.id)}
          className="p-1.5 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-500/20 transition flex items-center gap-1"
          title="Delete Layer"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
