import React, { useState, useMemo } from 'react';
import { Search, Shield, Swords, Wand2, Target, HeartHandshake, Skull, Image as ImageIcon, Type, Award, Upload, Plus, User } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('backgrounds'); // 'backgrounds' | 'skins' | 'badges' | 'text' | 'upload'
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Compile all background wallpapers from all heroes
  const allBackgrounds = useMemo(() => {
    const list = [];
    HEROES_DATA.forEach((hero) => {
      for (let i = 1; i <= hero.bgCount; i++) {
        list.push({
          heroName: hero.name,
          heroValue: hero.value,
          tag: hero.tag,
          bgNum: i,
          thumbSrc: `images/hero/${hero.value}/bg-thumb/${i}.jpg`,
          fullSrc: `images/hero/${hero.value}/bg/${i}.jpg`,
        });
      }
    });
    return list;
  }, []);

  // Filtered background wallpapers
  const filteredBackgrounds = useMemo(() => {
    return allBackgrounds.filter((bg) => {
      const matchesRole = selectedRole === 'all' || bg.tag?.toLowerCase() === selectedRole.toLowerCase();
      const matchesSearch = bg.heroName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [allBackgrounds, selectedRole, searchQuery]);

  // Compile all hero skin cutouts from all heroes
  const allSkins = useMemo(() => {
    const list = [];
    HEROES_DATA.forEach((hero) => {
      for (let i = 1; i <= hero.skinsCount; i++) {
        list.push({
          heroName: hero.name,
          heroValue: hero.value,
          tag: hero.tag,
          skinNum: i,
          thumbSrc: `images/hero/${hero.value}/skins-thumb/${i}.jpg`,
          fullSrc: `images/hero/${hero.value}/skins/${i}.png`,
        });
      }
    });
    return list;
  }, []);

  // Filtered hero skins
  const filteredSkins = useMemo(() => {
    return allSkins.filter((skin) => {
      const matchesRole = selectedRole === 'all' || skin.tag?.toLowerCase() === selectedRole.toLowerCase();
      const matchesSearch = skin.heroName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [allSkins, selectedRole, searchQuery]);

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
      {/* Navigation Tabs Header */}
      <div className="flex items-center justify-between border-b border-brand-border/80 bg-brand-card/90 p-1.5 gap-1">
        <button
          onClick={() => setActiveTab('backgrounds')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'backgrounds'
              ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Wallpapers</span>
        </button>
        <button
          onClick={() => setActiveTab('skins')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'skins'
              ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Hero Skins</span>
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'badges'
              ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
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
              ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
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
              ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload</span>
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* TAB 1: BACKGROUND WALLPAPERS */}
        {activeTab === 'backgrounds' && (
          <div className="space-y-3">
            {/* Search & Role Filters */}
            <div className="space-y-2.5">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search background wallpaper by hero..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-bg/80 border border-brand-border/80 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40"
                />
              </div>

              {/* Role Filter Pills */}
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

            {/* Background Wallpapers Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {filteredBackgrounds.map((bg, idx) => (
                <button
                  key={`bg_${bg.heroValue}_${bg.bgNum}_${idx}`}
                  onClick={() =>
                    onAddLayer({
                      type: 'image',
                      src: bg.fullSrc,
                      name: `${bg.heroName} BG ${bg.bgNum}`,
                      subType: 'bg'
                    })
                  }
                  className="glass-card rounded-xl p-1.5 flex flex-col items-center group hover:border-cyan-400/80 hover:scale-[1.02] transition-all"
                >
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/50 relative mb-1.5">
                    <img
                      src={bg.thumbSrc}
                      alt={`${bg.heroName} BG ${bg.bgNum}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[10px] text-cyan-300 font-semibold flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Background
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between px-1">
                    <span className="text-[11px] font-semibold text-slate-200 capitalize truncate group-hover:text-cyan-300">
                      {bg.heroName}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase bg-brand-bg px-1.5 py-0.5 rounded border border-brand-border/60">
                      BG #{bg.bgNum}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HERO SKINS (PORTRAIT PREVIEW) */}
        {activeTab === 'skins' && (
          <div className="space-y-3">
            {/* Search & Role Filters */}
            <div className="space-y-2.5">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search hero skins..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-bg/80 border border-brand-border/80 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40"
                />
              </div>

              {/* Role Filter Pills */}
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

            {/* Hero Skins Grid (Strict Portrait Aspect Ratio) */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5 pt-1">
              {filteredSkins.map((skin, idx) => (
                <button
                  key={`skin_${skin.heroValue}_${skin.skinNum}_${idx}`}
                  onClick={() =>
                    onAddLayer({
                      type: 'image',
                      src: skin.fullSrc,
                      name: `${skin.heroName} Skin ${skin.skinNum}`,
                      subType: 'skins'
                    })
                  }
                  className="glass-card rounded-xl p-1.5 flex flex-col items-center group hover:border-cyan-400/80 hover:scale-[1.02] transition-all"
                >
                  {/* Portrait Thumbnail Container (3:4 aspect ratio) */}
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-black/60 relative mb-1.5 border border-brand-border/40">
                    <img
                      src={skin.thumbSrc}
                      alt={`${skin.heroName} Skin ${skin.skinNum}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[10px] text-cyan-300 font-semibold flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Hero
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-200 capitalize truncate w-full text-center group-hover:text-cyan-300">
                    {skin.heroName}
                  </span>
                  <span className="text-[9px] text-slate-400">
                    Skin #{skin.skinNum}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BADGES TAB */}
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

        {/* TAB 4: TEXT STUDIO TAB */}
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

        {/* TAB 5: CUSTOM UPLOAD TAB */}
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
