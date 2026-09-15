import React from 'react';
import { Layers, ArrowUpToLine, ArrowDownToLine, ArrowUp, ArrowDown, FlipHorizontal, FlipVertical, Copy, Trash2, Eye, Type, Image as ImageIcon } from 'lucide-react';

export default function LayersManager({
  layers,
  selectedId,
  setSelectedId,
  onDuplicate,
  onFlipH,
  onFlipV,
  onMoveOrder,
  onDelete
}) {
  return (
    <div className="w-full h-full flex flex-col bg-[#1A1528] rounded-2xl border-2 border-[#120E16] shadow-[4px_4px_0_#120E16] overflow-hidden font-mono">
      {/* Header */}
      <div className="bg-[#211B33] border-b-2 border-[#120E16] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#00E5A3]" />
          <h3 className="font-display text-sm text-[#00E5A3] uppercase tracking-wider">
            LAYER MANAGEMENT ({layers.length})
          </h3>
        </div>
      </div>

      {/* Layer List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {layers.length === 0 ? (
          <div className="text-center py-12 text-white/50">
            <Layers className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-xs">No layers added to canvas yet.</p>
          </div>
        ) : (
          [...layers].reverse().map((layer, index) => {
            const isSelected = layer.id === selectedId;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedId(layer.id)}
                className={`p-2.5 rounded-xl border-2 border-[#120E16] transition flex flex-col gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#7C3AED] text-white shadow-[3px_3px_0_#120E16]'
                    : 'bg-[#211B33] text-white/80 hover:bg-white/5'
                }`}
              >
                {/* Item Info Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
                      {layer.type === 'text' ? (
                        <Type className="w-4 h-4 text-[#00E5A3]" />
                      ) : (
                        <img src={layer.src} alt={layer.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-bold truncate">
                        {layer.type === 'text' ? `"${layer.text}"` : layer.name || 'Image Layer'}
                      </p>
                      <p className="text-[9px] opacity-70 uppercase">
                        Type: {layer.subType || layer.type}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded border border-[#120E16] ${
                    isSelected ? 'bg-[#00E5A3] text-[#120E16]' : 'bg-[#1A1528] text-white/60'
                  }`}>
                    {isSelected ? 'ACTIVE' : `L${layers.length - index}`}
                  </span>
                </div>

                {/* Layer Control Toolbar */}
                <div className="flex items-center justify-between border-t border-white/15 pt-2 gap-1 overflow-x-auto scrollbar-none">
                  {/* Reordering */}
                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); onMoveOrder(layer.id, 'top'); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Bring to Front (Top)"
                    >
                      <ArrowUpToLine className="w-3.5 h-3.5 text-[#00E5A3]" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onMoveOrder(layer.id, 'up'); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Move Up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onMoveOrder(layer.id, 'down'); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Move Down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onMoveOrder(layer.id, 'bottom'); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Send to Back (Bottom)"
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5 text-amber-300" />
                    </button>
                  </div>

                  <div className="h-3 w-[1px] bg-white/20 mx-1" />

                  {/* Flip & Actions */}
                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); onFlipH(layer.id); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Flip Horizontal"
                    >
                      <FlipHorizontal className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onFlipV(layer.id); }}
                      className="p-1 rounded hover:bg-white/20 transition text-white"
                      title="Flip Vertical"
                    >
                      <FlipVertical className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onDuplicate(layer.id); }}
                      className="p-1 rounded hover:bg-white/20 transition text-amber-300"
                      title="Duplicate"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onDelete(layer.id); }}
                      className="p-1 rounded hover:bg-rose-500/30 transition text-rose-300"
                      title="Delete Layer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
