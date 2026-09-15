import React, { useState, useMemo } from 'react';
import { Search, Shield, Swords, Wand2, Target, HeartHandshake, Skull, Image as ImageIcon, Type, Award, Upload, Plus, ChevronLeft } from 'lucide-react';
import { HEROES_DATA } from '../data/heroes';
import { FONTS_LIST, CUSTOM_UTILS } from '../data/utils';

const ROLE_TAGS = [
  { id: 'all', label: 'All', icon: Shield },
  { id: 'tank', label: 'Tank', icon: Shield },
  { id: 'warrior', label: 'Warrior', icon: Swords },
  { id: 'assassin', label: 'Assassin', icon: Skull },
  { id: 'mage', label: 'Mage', icon: Wand2 },
  { id: 'archer', label: 'Archer', icon: Target },
  { id: 'support', label: 'Support', icon: HeartHandshake },
];

export default function AssetBrowser({ onAddLayer }) {
  const [activeTab, setActiveTab] = useState('heroes'); // 'heroes' | 'badges' | 'text' | 'upload'
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHero, setSelectedHero] = useState(null);

  // Text Form State
  const [textInput, setTextInput] = useState('ARENA OF VALOR');
  const [textColor, setTextColor] = useState('#00f0ff');
  const [textFont, setTextFont] = useState('Staatliches');
  const [textAlign, setTextAlign] = useState('center');
  const [enableStroke, setEnableStroke] = useState(true);
  const [strokeColor, setStrokeColor] = useState('#000000');

  // Dynamically load Google Font on change
  const handleFontChange = (fontName) => {
    setTextFont(fontName);
    if (fontName !== 'Impact' && fontName !== 'Arial') {
      const linkId = 'font-' + fontName.replace(/\s+/g, '+');
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css?family=${fontName.replace(/\s+/g, '+')}`;
        document.head.appendChild(link);
      }
    }
  };

  // Filtered heroes list
  const filteredHeroes = useMemo(() => {
    return HEROES_DATA.filter((hero) => {
      const matchesRole = selectedRole === 'all' || hero.tag?.toLowerCase() === selectedRole.toLowerCase();
      const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [selectedRole, searchQuery]);

  // Upload custom file handler
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onAddLayer({
            type: 'image',
            src: event.target.result,
            name: file.name
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full flex flex-col glass-panel rounded-2xl border border-brand-border/60 overflow-hidden shadow-2xl">
      {/* Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-brand-border/80 bg-brand-card/90 p-1.5 gap-1">
        <button
          onClick={() => { setActiveTab('heroes'); setSelectedHero(null); }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'heroes'
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Heroes</span>
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'badges'
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Badges</span>
        </button>
        <button
          onClick={() => setActiveTab('text')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'text'
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Text</span>
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'upload'
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload</span>
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* HEROES TAB */}
        {activeTab === 'heroes' && (
          <>
            {!selectedHero ? (
              <>
                {/* Search & Role Filters */}
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search hero by name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-brand-bg/80 border border-brand-border/80 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40"
                    />
                  </div>

                  {/* Role Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {ROLE_TAGS.map((tag) => {
                      const Icon = tag.icon;
                      const isActive = selectedRole === tag.id;
                      return (
                        <button
                          key={tag.id}
                          onClick={() => setSelectedRole(tag.id)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition ${
                            isActive
                              ? 'bg-cyan-500 text-black font-semibold'
                              : 'bg-brand-card text-slate-400 hover:text-white border border-brand-border/60'
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>{tag.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hero Cards Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-1">
                  {filteredHeroes.map((hero) => (
                    <button
                      key={hero.value}
                      onClick={() => setSelectedHero(hero)}
                      className="glass-card rounded-xl p-2 flex flex-col items-center justify-between text-center group hover:scale-[1.03] transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-brand-border/60 group-hover:border-cyan-400/60 mb-1.5 bg-black/40 flex items-center justify-center">
                        <img
                          src={`images/hero/${hero.value}/skins-thumb/1.jpg`}
                          alt={hero.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `images/hero/${hero.value}/bg-thumb/1.jpg`;
                          }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200 capitalize truncate w-full group-hover:text-cyan-300">
                        {hero.name}
                      </span>
                      <span className="text-[9px] text-slate-400 capitalize">
                        {hero.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Selected Hero Detail View (Skins & Backgrounds) */
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedHero(null)}
                  className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 mb-2 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to all heroes</span>
                </button>

                <div className="flex items-center gap-3 bg-brand-card/80 p-3 rounded-xl border border-brand-border/60">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-cyan-500/40">
                    <img
                      src={`images/hero/${selectedHero.value}/skins-thumb/1.jpg`}
                      alt={selectedHero.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white uppercase tracking-wider">
                      {selectedHero.name}
                    </h3>
                    <p className="text-xs text-slate-400 capitalize">
                      Role: {selectedHero.tag} | {selectedHero.skinsCount} Skins
                    </p>
                  </div>
                </div>

                {/* Hero Skins Cutouts */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                    Hero Skin Cutouts (PNG)
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: selectedHero.skinsCount }).map((_, idx) => {
                      const num = idx + 1;
                      return (
                        <button
                          key={'skin_' + num}
                          onClick={() =>
                            onAddLayer({
                              type: 'image',
                              src: `images/hero/${selectedHero.value}/skins/${num}.png`,
                              name: `${selectedHero.name} Skin ${num}`,
                              subType: 'skins'
                            })
                          }
                          className="glass-card rounded-xl p-2 flex flex-col items-center group hover:border-cyan-400"
                        >
                          <div className="w-full h-24 rounded-lg overflow-hidden bg-black/40 flex items-center justify-center mb-1">
                            <img
                              src={`images/hero/${selectedHero.value}/skins-thumb/${num}.jpg`}
                              alt={`Skin ${num}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] font-medium text-slate-300 flex items-center gap-1 group-hover:text-cyan-300">
                            <Plus className="w-3 h-3" /> Skin {num}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hero Wallpapers */}
                <div>
                  <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    Background Wallpapers (JPG)
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: selectedHero.bgCount }).map((_, idx) => {
                      const num = idx + 1;
                      return (
                        <button
                          key={'bg_' + num}
                          onClick={() =>
                            onAddLayer({
                              type: 'image',
                              src: `images/hero/${selectedHero.value}/bg/${num}.jpg`,
                              name: `${selectedHero.name} BG ${num}`,
                              subType: 'bg'
                            })
                          }
                          className="glass-card rounded-xl p-1.5 flex flex-col items-center group hover:border-purple-400"
                        >
                          <div className="w-full h-20 rounded-lg overflow-hidden bg-black/40 flex items-center justify-center mb-1">
                            <img
                              src={`images/hero/${selectedHero.value}/bg-thumb/${num}.jpg`}
                              alt={`BG ${num}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] font-medium text-slate-300 flex items-center gap-1 group-hover:text-purple-300">
                            <Plus className="w-3 h-3" /> Background {num}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* BADGES TAB */}
        {activeTab === 'badges' && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                Title Overlays (TW Frame)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 14 }).map((_, idx) => {
                  const num = idx + 1;
                  return (
                    <button
                      key={'tw_' + num}
                      onClick={() =>
                        onAddLayer({
                          type: 'image',
                          src: `images/tw-title/${num}.png`,
                          name: `Title Badge ${num}`,
                          subType: 'title'
                        })
                      }
                      className="glass-card rounded-xl p-2 flex flex-col items-center group hover:border-cyan-400"
                    >
                      <img
                        src={`images/tw-title-thumb/${num}.jpg`}
                        alt={`Title ${num}`}
                        className="w-full h-12 object-contain group-hover:scale-105 transition"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-slate-300 mt-1">Title {num}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                Achievement & Game Badges
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {CUSTOM_UTILS.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      onAddLayer({
                        type: 'image',
                        src: `images/utils/${item}.png`,
                        name: item.toUpperCase(),
                        subType: 'util'
                      })
                    }
                    className="glass-card rounded-xl p-2 flex flex-col items-center group hover:border-amber-400"
                  >
                    <img
                      src={`images/utils-thumb/${item}.jpg`}
                      alt={item}
                      className="w-full h-12 object-contain group-hover:scale-110 transition"
                      loading="lazy"
                    />
                    <span className="text-[9px] text-slate-300 uppercase mt-1 truncate w-full text-center">
                      {item.replace('-', ' ')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TEXT STUDIO TAB */}
        {activeTab === 'text' && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Text Content</label>
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Enter text..."
                className="w-full bg-brand-bg/80 border border-brand-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Font Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-9 rounded-xl bg-brand-bg border border-brand-border/80 cursor-pointer p-1"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Stroke Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    disabled={!enableStroke}
                    className="w-full h-9 rounded-xl bg-brand-bg border border-brand-border/80 cursor-pointer p-1 disabled:opacity-30"
                  />
                  <input
                    type="checkbox"
                    checked={enableStroke}
                    onChange={(e) => setEnableStroke(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Font Family</label>
              <select
                value={textFont}
                onChange={(e) => handleFontChange(e.target.value)}
                className="w-full bg-brand-bg/80 border border-brand-border/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              >
                <option value="Staatliches">Staatliches (Default)</option>
                <option value="Impact">Impact</option>
                <option value="Arial">Arial</option>
                {FONTS_LIST.filter((f) => f !== 'Staatliches').map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Text Alignment</label>
              <div className="grid grid-cols-3 gap-2">
                {['left', 'center', 'right'].map((align) => (
                  <button
                    key={align}
                    onClick={() => setTextAlign(align)}
                    className={`py-1.5 rounded-lg text-xs capitalize transition ${
                      textAlign === align
                        ? 'bg-cyan-500 text-black font-semibold'
                        : 'bg-brand-card text-slate-400 hover:text-white'
                    }`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Text Preview Box */}
            <div className="p-3 bg-black/40 rounded-xl border border-brand-border/60 text-center">
              <span className="text-[10px] text-slate-500 uppercase block mb-1">Live Preview</span>
              <p
                style={{
                  fontFamily: textFont,
                  color: textColor,
                  WebkitTextStroke: enableStroke ? `1.5px ${strokeColor}` : 'none',
                  textAlign,
                }}
                className="text-2xl truncate"
              >
                {textInput || 'Preview Text'}
              </p>
            </div>

            <button
              onClick={() =>
                onAddLayer({
                  type: 'text',
                  text: textInput || 'Text',
                  fill: textColor,
                  fontFamily: textFont,
                  stroke: enableStroke ? strokeColor : null,
                  strokeWidth: enableStroke ? 1.5 : 0,
                  align: textAlign
                })
              }
              className="w-full py-2.5 rounded-xl font-heading text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/20 font-bold transition flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>ADD TEXT TO CANVAS</span>
            </button>
          </div>
        )}

        {/* CUSTOM UPLOAD TAB */}
        {activeTab === 'upload' && (
          <div className="space-y-4 text-center py-6">
            <div className="border-2 border-dashed border-brand-border/80 hover:border-cyan-500/60 rounded-2xl p-6 transition flex flex-col items-center justify-center bg-brand-bg/40">
              <Upload className="w-10 h-10 text-cyan-400 mb-2 animate-bounce" />
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Upload Custom Image</h4>
              <p className="text-xs text-slate-400 max-w-xs mb-4">
                Add your own PNG cutouts, watermarks, or personal photos to the wallpaper canvas.
              </p>
              <label className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-black cursor-pointer hover:bg-cyan-400 transition shadow-md">
                Browse File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
