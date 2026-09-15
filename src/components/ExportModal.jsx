import React, { useState } from 'react';
import { Download, X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExportModal({ isOpen, onClose, stageRef, presetName }) {
  const [pixelRatio, setPixelRatio] = useState(2);
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (!stageRef.current) return;
    setDownloading(true);

    try {
      const dataUrl = stageRef.current.toDataURL({
        pixelRatio: pixelRatio,
        mimeType: 'image/png',
        quality: 1
      });

      const link = document.createElement('a');
      link.download = `AOV-Wallpaper-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#00E5A3', '#120E16', '#FFFFFF']
      });

      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (err) {
      console.error('Failed to export image:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120E16]/80 backdrop-blur-sm animate-fade-in font-mono">
      <div className="w-full max-w-md bg-white rounded-2xl border-2 border-[#120E16] shadow-[6px_6px_0_#120E16] overflow-hidden relative">
        {/* Header Bar */}
        <div className="bg-[#7C3AED] border-b-2 border-[#120E16] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00E5A3]" />
            <h3 className="font-display text-xl uppercase tracking-wider">EXPORT HD WALLPAPER</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-[#F4F0FF] p-3 rounded-xl border-2 border-[#120E16]">
            <p className="text-xs text-[#5C526A] font-bold">Preset: <span className="text-[#120E16]">{presetName}</span></p>
          </div>

          <div>
            <label className="text-xs font-bold text-[#120E16] block mb-2">
              EXPORT RESOLUTION & QUALITY:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: '1x (Standard)', ratio: 1, desc: 'Fast' },
                { label: '2x (HD 1080p)', ratio: 2, desc: 'Recommended' },
                { label: '3x (Ultra HD 4K)', ratio: 3, desc: 'Best Quality' },
              ].map((opt) => (
                <button
                  key={opt.ratio}
                  onClick={() => setPixelRatio(opt.ratio)}
                  className={`p-2.5 rounded-xl border-2 border-[#120E16] text-center transition flex flex-col items-center justify-center ${
                    pixelRatio === opt.ratio
                      ? 'bg-[#00E5A3] text-[#120E16] font-bold shadow-[2px_2px_0_#120E16]'
                      : 'bg-[#F4F0FF] text-[#120E16]/70 hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-bold">{opt.label}</span>
                  <span className="text-[10px] text-[#5C526A] mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="arcade-btn-primary w-full py-3 rounded-xl text-sm flex items-center justify-center gap-2 mt-2"
          >
            {done ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-[#00E5A3]" />
                <span>SAVED TO DEVICE!</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>{downloading ? 'GENERATING...' : 'DOWNLOAD WALLPAPER'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
