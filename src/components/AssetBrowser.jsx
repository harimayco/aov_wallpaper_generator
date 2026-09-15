import React, { useState, useMemo } from 'react';
import { Search, Shield, Swords, Wand2, Target, HeartHandshake, Skull, Image as ImageIcon, Type, Award, Upload, Plus, User, Layers } from 'lucide-react';
import { HEROES_DATA } from '../data/heroes';
import { FONTS_LIST, CUSTOM_UTILS } from '../data/utils';
import LayersManager from './LayersManager';

const ROLE_TAGS = [
  { id: 'all', label: 'All', icon: Shield },
  { id: 'tank', label: 'Tank', icon: Shield },
  { id: 'warrior', label: 'Warrior', icon: Swords },
  { id: 'assassin', label: 'Assassin', icon: Skull },
  { id: 'mage', label: 'Mage', icon: Wand2 },
  { id: 'archer', label: 'Archer', icon: Target },
  { id: 'support', label: 'Support', icon: HeartHandshake },
];

export default function AssetBrowser({
  onAddLayer,
  activeTab,
  setActiveTab,
  layers = [],
  selectedId,
  setSelectedId,
  onDuplicate,
  onFlipH,
  onFlipV,
  onMoveOrder,
  onDelete,
}) {
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Text Form State
  const [textInput, setTextInput] = useState('ARENA OF VALOR');
  const [textColor, setTextColor] = useState('#00E5A3');
  const [textFont, setTextFont] = useState('Fredoka');
  const [textAlign, setTextAlign] = useState('center');
  const [enableStroke, setEnableStroke] = useState(true);
  const [strokeColor, setStrokeColor] = useState('#120E16');

  // Dynamically load Google Font on change
  const handleFontChange = (fontName) => {
    setTextFont(fontName);
    if (fontName !== 'Impact' && fontName !== 'Arial' && fontName !== 'Fredoka') {
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
    <div className="w-full h-full flex flex-col bg-[#1A1528] rounded-2xl border-2 border-[#120E16] shadow-[4px_4px_0_#120E16] overflow-hidden">
      {/* Header Tabs Navigation */}
      <div className="flex items-center justify-between border-b-2 border-[#120E16] bg-[#211B33] p-1.5 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('backgrounds')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition ${
            activeTab === 'backgrounds'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Wallpapers</span>
        </button>
        <button
          onClick={() => setActiveTab('skins')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition ${
            activeTab === 'skins'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Skins</span>
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition ${
            activeTab === 'badges'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Badges</span>
        </button>
        <button
          onClick={() => setActiveTab('text')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition ${
            activeTab === 'text'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Text</span>
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition ${
            activeTab === 'upload'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload</span>
        </button>
        <button
          onClick={() => setActiveTab('layers')}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-mono font-bold transition relative ${
            activeTab === 'layers'
              ? 'bg-[#7C3AED] text-white border-2 border-[#120E16] shadow-[2px_2px_0_#120E16]'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-[#00E5A3]" />
          <span>Layers</span>
          {layers.length > 0 && (
            <span className="ml-1 px-1.5 py-0.2 bg-[#00E5A3] text-[#120E16] text-[10px] font-bold rounded-full border border-[#120E16]">
              {layers.length}
            </span>
          )}
        </button>
      </div>

      {/* Content Body */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 font-mono">
        {/* TAB 1: BACKGROUND WALLPAPERS */}
        {activeTab === 'backgrounds' && (
          <div className="space-y-3">
            {/* Search & Role Filters */}
            <div className="space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 text-white/50 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search wallpaper by hero..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#211B33] border-2 border-[#120E16] rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00E5A3]"
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
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition border-2 border-[#120E16] whitespace-nowrap ${
                        isActive
                          ? 'bg-[#00E5A3] text-[#120E16] shadow-[2px_2px_0_#120E16]'
                          : 'bg-[#211B33] text-white/70 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tag.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Background Wallpapers Grid (Dense 4-col/5-col portrait) */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 pt-1">
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
                  className="bg-[#211B33] border-2 border-[#120E16] rounded-lg p-1 flex flex-col items-center group hover:border-[#00E5A3] hover:-translate-y-0.5 transition-all shadow-[2px_2px_0_#120E16]"
                >
                  <div className="w-full aspect-[3/4] rounded-md overflow-hidden bg-black/60 relative mb-1 border border-[#120E16]">
                    <img
                      src={bg.thumbSrc}
                      alt={`${bg.heroName} BG ${bg.bgNum}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[9px] text-[#00E5A3] font-bold flex items-center gap-0.5">
                        <Plus className="w-2.5 h-2.5" /> Add
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-white capitalize truncate w-full text-center group-hover:text-[#00E5A3]">
                    {bg.heroName}
                  </span>
                  <span className="text-[8px] text-white/60 uppercase">
                    BG #{bg.bgNum}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HERO SKINS */}
        {activeTab === 'skins' && (
          <div className="space-y-3">
            {/* Search & Role Filters */}
            <div className="space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 text-white/50 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search hero skins..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#211B33] border-2 border-[#120E16] rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00E5A3]"
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
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition border-2 border-[#120E16] whitespace-nowrap ${
                        isActive
                          ? 'bg-[#00E5A3] text-[#120E16] shadow-[2px_2px_0_#120E16]'
                          : 'bg-[#211B33] text-white/70 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tag.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hero Skins Grid (Dense 4-col/5-col portrait) */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 pt-1">
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
                  className="bg-[#211B33] border-2 border-[#120E16] rounded-lg p-1 flex flex-col items-center group hover:border-[#00E5A3] hover:-translate-y-0.5 transition-all shadow-[2px_2px_0_#120E16]"
                >
                  <div className="w-full aspect-[3/4] rounded-md overflow-hidden bg-black/60 relative mb-1 border border-[#120E16]">
                    <img
                      src={skin.thumbSrc}
                      alt={`${skin.heroName} Skin ${skin.skinNum}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[9px] text-[#00E5A3] font-bold flex items-center gap-0.5">
                        <Plus className="w-2.5 h-2.5" /> Add
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-white capitalize truncate w-full text-center group-hover:text-[#00E5A3]">
                    {skin.heroName}
                  </span>
                  <span className="text-[8px] text-white/60 uppercase">
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
              <h4 className="font-display text-sm text-[#00E5A3] uppercase tracking-wider mb-2">
                TITLE OVERLAYS (TW FRAME)
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
                      className="bg-[#211B33] border-2 border-[#120E16] rounded-xl p-2 flex flex-col items-center group hover:border-[#00E5A3] shadow-[2px_2px_0_#120E16]"
                    >
                      <img
                        src={`images/tw-title-thumb/${num}.jpg`}
                        alt={`Title ${num}`}
                        className="w-full h-10 object-contain group-hover:scale-105 transition"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-white/80 mt-1">Title #{num}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm text-[#00E5A3] uppercase tracking-wider mb-2">
                GAME BADGES
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
                    className="bg-[#211B33] border-2 border-[#120E16] rounded-xl p-2 flex flex-col items-center group hover:border-[#00E5A3] shadow-[2px_2px_0_#120E16]"
                  >
                    <img
                      src={`images/utils-thumb/${item}.jpg`}
                      alt={item}
                      className="w-full h-10 object-contain group-hover:scale-110 transition"
                      loading="lazy"
                    />
                    <span className="text-[9px] text-white/80 uppercase mt-1 truncate w-full text-center">
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
          <div className="space-y-3.5">
            <div>
              <label className="text-xs font-bold text-white block mb-1">Text Content</label>
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Enter text..."
                className="w-full bg-[#211B33] border-2 border-[#120E16] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E5A3]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-xs font-bold text-white block mb-1">Fill Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-8 rounded-xl bg-[#211B33] border-2 border-[#120E16] cursor-pointer p-0.5"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-white block mb-1">Stroke Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    disabled={!enableStroke}
                    className="w-full h-8 rounded-xl bg-[#211B33] border-2 border-[#120E16] cursor-pointer p-0.5 disabled:opacity-30"
                  />
                  <input
                    type="checkbox"
                    checked={enableStroke}
                    onChange={(e) => setEnableStroke(e.target.checked)}
                    className="w-4 h-4 accent-[#00E5A3] rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white block mb-1">Font Family</label>
              <select
                value={textFont}
                onChange={(e) => handleFontChange(e.target.value)}
                className="w-full bg-[#211B33] border-2 border-[#120E16] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E5A3]"
              >
                <option value="Fredoka">Fredoka (Default)</option>
                <option value="Staatliches">Staatliches</option>
                <option value="Impact">Impact</option>
                <option value="Arial">Arial</option>
                {FONTS_LIST.filter((f) => f !== 'Staatliches' && f !== 'Fredoka').map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-white block mb-1">Alignment</label>
              <div className="grid grid-cols-3 gap-2">
                {['left', 'center', 'right'].map((align) => (
                  <button
                    key={align}
                    onClick={() => setTextAlign(align)}
                    className={`py-1 rounded-lg text-xs capitalize border-2 border-[#120E16] transition ${
                      textAlign === align
                        ? 'bg-[#00E5A3] text-[#120E16] font-bold shadow-[2px_2px_0_#120E16]'
                        : 'bg-[#211B33] text-white/70 hover:text-white'
                    }`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Text Preview Box */}
            <div className="p-3 bg-[#211B33] rounded-xl border-2 border-[#120E16] text-center shadow-[2px_2px_0_#120E16]">
              <span className="text-[9px] text-white/50 uppercase block mb-1">Live Preview</span>
              <p
                style={{
                  fontFamily: textFont,
                  color: textColor,
                  WebkitTextStroke: enableStroke ? `1.5px ${strokeColor}` : 'none',
                  textAlign,
                }}
                className="text-2xl truncate font-bold"
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
                  strokeWidth: enableStroke ? 2 : 0,
                  align: textAlign
                })
              }
              className="arcade-btn-mint w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>ADD TEXT TO CANVAS</span>
            </button>
          </div>
        )}

        {/* TAB 5: CUSTOM UPLOAD */}
        {activeTab === 'upload' && (
          <div className="space-y-4 text-center py-6">
            <div className="border-2 border-dashed border-[#120E16] bg-[#211B33] rounded-2xl p-6 transition flex flex-col items-center justify-center shadow-[3px_3px_0_#120E16]">
              <Upload className="w-10 h-10 text-[#00E5A3] mb-2 animate-bounce" />
              <h4 className="font-display text-base text-white mb-1">UPLOAD CUSTOM IMAGE</h4>
              <p className="text-xs text-white/70 max-w-xs mb-4">
                Add your own PNG cutouts, logos, or personal photos to the canvas.
              </p>
              <label className="arcade-btn-mint px-4 py-2 rounded-full text-xs cursor-pointer inline-block">
                BROWSE FILE
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

        {/* TAB 6: LAYERS MANAGER */}
        {activeTab === 'layers' && (
          <div className="h-full -m-3 sm:-m-4">
            <LayersManager
              layers={layers}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onDuplicate={onDuplicate}
              onFlipH={onFlipH}
              onFlipV={onFlipV}
              onMoveOrder={onMoveOrder}
              onDelete={onDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
}
