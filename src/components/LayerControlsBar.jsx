import React from 'react';
import { Copy, FlipHorizontal, FlipVertical, ArrowUp, ArrowDown, Trash2, Layers } from 'lucide-react';

export default function LayerControlsBar({
  selectedLayer,
  onDuplicate,
  onFlipH,
  onFlipV,
  onMoveUp,
  onMoveDown,
  onDelete
}) {
  if (!selectedLayer) return null;

  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 bg-[#1A1528] border-2 border-[#120E16] shadow-[3px_3px_0_#120E16] rounded-xl text-xs font-mono">
      <div className="flex items-center gap-2 text-[#00E5A3]">
        <Layers className="w-4 h-4 text-[#00E5A3]" />
        <span className="font-bold truncate max-w-[120px]">
          {selectedLayer.type === 'text' ? `Text: "${selectedLayer.text}"` : selectedLayer.name || 'Selected'}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onFlipH(selectedLayer.id)}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition"
          title="Flip Horizontal"
        >
          <FlipHorizontal className="w-4 h-4" />
        </button>

        <button
          onClick={() => onFlipV(selectedLayer.id)}
          className="p-1.5 rounded-lg text-white hover:text-[#00E5A3] hover:bg-white/10 transition"
          title="Flip Vertical"
        >
          <FlipVertical className="w-4 h-4" />
        </button>

        <div className="h-4 w-[2px] bg-[#120E16] mx-1" />

        <button
          onClick={() => onMoveUp(selectedLayer.id, 'up')}
          className="p-1.5 rounded-lg text-white hover:bg-white/10 transition"
          title="Move Forward"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => onMoveDown(selectedLayer.id, 'down')}
          className="p-1.5 rounded-lg text-white hover:bg-white/10 transition"
          title="Move Backward"
        >
          <ArrowDown className="w-4 h-4" />
        </button>

        <div className="h-4 w-[2px] bg-[#120E16] mx-1" />

        <button
          onClick={() => onDuplicate(selectedLayer.id)}
          className="p-1.5 rounded-lg text-amber-300 hover:bg-white/10 transition"
          title="Duplicate"
        >
          <Copy className="w-4 h-4" />
        </button>

        <button
          onClick={() => onDelete(selectedLayer.id)}
          className="p-1.5 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-500/20 transition"
          title="Delete Layer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
