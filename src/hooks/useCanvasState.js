import { useState, useCallback, useRef } from 'react';

export const CANVAS_PRESETS = {
  mobile: { name: 'Mobile Story (9:16)', width: 540, height: 960, ratio: 2 },
  desktop: { name: 'Desktop Wallpaper (16:9)', width: 960, height: 540, ratio: 2 },
  square: { name: 'Square Post (1:1)', width: 800, height: 800, ratio: 2 },
};

export function useCanvasState() {
  const [presetKey, setPresetKey] = useState('mobile');
  const [layers, setLayers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  
  // Undo / Redo history
  const [history, setHistory] = useState([[]]);
  const [historyStep, setHistoryStep] = useState(0);

  const canvasDimensions = CANVAS_PRESETS[presetKey];

  const updateLayersWithHistory = useCallback((newLayers) => {
    setLayers(newLayers);
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push(newLayers);
    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  }, [history, historyStep]);

  const undo = useCallback(() => {
    if (historyStep > 0) {
      const prevStep = historyStep - 1;
      setLayers(history[prevStep]);
      setHistoryStep(prevStep);
      setSelectedId(null);
    }
  }, [historyStep, history]);

  const redo = useCallback(() => {
    if (historyStep < history.length - 1) {
      const nextStep = historyStep + 1;
      setLayers(history[nextStep]);
      setHistoryStep(nextStep);
      setSelectedId(null);
    }
  }, [historyStep, history]);

  const addLayer = useCallback((layerData) => {
    const newId = 'layer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const newLayer = {
      id: newId,
      x: canvasDimensions.width / 2,
      y: canvasDimensions.height / 2,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      opacity: 1,
      ...layerData
    };

    updateLayersWithHistory([...layers, newLayer]);
    setSelectedId(newId);
  }, [layers, canvasDimensions, updateLayersWithHistory]);

  const updateLayerProps = useCallback((id, newProps) => {
    const updated = layers.map((layer) => {
      if (layer.id === id) {
        return { ...layer, ...newProps };
      }
      return layer;
    });
    updateLayersWithHistory(updated);
  }, [layers, updateLayersWithHistory]);

  const deleteLayer = useCallback((id) => {
    const targetId = id || selectedId;
    if (!targetId) return;
    const filtered = layers.filter((l) => l.id !== targetId);
    updateLayersWithHistory(filtered);
    if (selectedId === targetId) {
      setSelectedId(null);
    }
  }, [layers, selectedId, updateLayersWithHistory]);

  const duplicateLayer = useCallback((id) => {
    const targetId = id || selectedId;
    if (!targetId) return;
    const target = layers.find((l) => l.id === targetId);
    if (!target) return;

    const duplicated = {
      ...target,
      id: 'layer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      x: target.x + 20,
      y: target.y + 20
    };

    updateLayersWithHistory([...layers, duplicated]);
    setSelectedId(duplicated.id);
  }, [layers, selectedId, updateLayersWithHistory]);

  const flipHorizontal = useCallback((id) => {
    const targetId = id || selectedId;
    if (!targetId) return;
    const target = layers.find((l) => l.id === targetId);
    if (!target) return;
    updateLayerProps(targetId, { scaleX: target.scaleX * -1 });
  }, [layers, selectedId, updateLayerProps]);

  const flipVertical = useCallback((id) => {
    const targetId = id || selectedId;
    if (!targetId) return;
    const target = layers.find((l) => l.id === targetId);
    if (!target) return;
    updateLayerProps(targetId, { scaleY: target.scaleY * -1 });
  }, [layers, selectedId, updateLayerProps]);

  const moveLayerOrder = useCallback((id, direction) => {
    const targetId = id || selectedId;
    if (!targetId) return;
    const index = layers.findIndex((l) => l.id === targetId);
    if (index === -1) return;

    const newLayers = [...layers];
    if (direction === 'up' && index < newLayers.length - 1) {
      const temp = newLayers[index];
      newLayers[index] = newLayers[index + 1];
      newLayers[index + 1] = temp;
    } else if (direction === 'down' && index > 0) {
      const temp = newLayers[index];
      newLayers[index] = newLayers[index - 1];
      newLayers[index - 1] = temp;
    } else if (direction === 'top') {
      const item = newLayers.splice(index, 1)[0];
      newLayers.push(item);
    } else if (direction === 'bottom') {
      const item = newLayers.splice(index, 1)[0];
      newLayers.unshift(item);
    }

    updateLayersWithHistory(newLayers);
  }, [layers, selectedId, updateLayersWithHistory]);

  const clearCanvas = useCallback(() => {
    updateLayersWithHistory([]);
    setSelectedId(null);
  }, [updateLayersWithHistory]);

  return {
    presetKey,
    setPresetKey,
    canvasDimensions,
    layers,
    selectedId,
    setSelectedId,
    addLayer,
    updateLayerProps,
    deleteLayer,
    duplicateLayer,
    flipHorizontal,
    flipVertical,
    moveLayerOrder,
    clearCanvas,
    undo,
    redo,
    canUndo: historyStep > 0,
    canRedo: historyStep < history.length - 1
  };
}
