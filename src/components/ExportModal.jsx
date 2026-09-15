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

      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#7000ff', '#ffb703', '#ffffff']
      });

      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (err) {
      console.error('Failed to export canvas image:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-2xl border border-cyan-500/40 p-6 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl text-white tracking-wide">EXPORT HD WALLPAPER</h3>
            <p className="text-xs text-slate-400">Preset: {presetName}</p>
          </div>
        </div>

        <div className="space-y-4 my-6">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Select Export Resolution & Quality:
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
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                    pixelRatio === opt.ratio
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold shadow-lg shadow-cyan-500/10'
                      : 'bg-brand-card/80 border-brand-border/80 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold">{opt.label}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-3 rounded-xl font-heading text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 font-bold shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50"
        >
          {done ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-950" />
              <span>SAVED TO DEVICE!</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>{downloading ? 'GENERATING IMAGE...' : 'DOWNLOAD WALLPAPER'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
