import React from 'react';

const TimelinePanel = ({ layers, duration, currentTime, isPlaying, onTimeUpdate, selectedLayerId, onSelectLayer }) => {
  const [zoom, setZoom] = React.useState(1);

  const pixelsPerMs = (0.1 * zoom); // Base scale
  const timelineWidth = duration * pixelsPerMs;

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}s`;
  };

  const handleTimelineClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedTime = (x / pixelsPerMs);
    onTimeUpdate(Math.max(0, Math.min(duration, clickedTime)));
  };

  const renderTimeMarkers = () => {
    const markers = [];
    const step = 1000; // 1 second
    for (let time = 0; time <= duration; time += step) {
      const x = time * pixelsPerMs;
      markers.push(
        <div
          key={time}
          className="absolute top-0 bottom-0 border-l border-gray-600"
          style={{ left: `${x}px` }}
        >
          <span className="absolute -top-5 -left-4 text-xs text-gray-400 font-mono">
            {formatTime(time)}
          </span>
        </div>
      );
    }
    return markers;
  };

  const renderLayerTrack = (layer) => {
    return (
      <div
        key={layer.id}
        className={`
          relative h-10 border-b border-gray-700 cursor-pointer transition-colors
          ${layer.id === selectedLayerId ? 'bg-blue-900/30' : 'hover:bg-gray-700/30'}
        `}
        onClick={() => onSelectLayer(layer.id)}
      >
        {/* Layer name */}
        <div className="absolute left-0 top-0 bottom-0 w-40 flex items-center px-3 bg-gray-800 border-r border-gray-700 z-10">
          <span className="text-xs text-gray-300 truncate">
            {layer.type === 'text' ? layer.content : `${layer.type} ${layer.id.slice(-4)}`}
          </span>
        </div>

        {/* Animation blocks */}
        <div className="absolute left-40 top-0 bottom-0 right-0">
          {layer.animations && layer.animations.map((anim, idx) => {
            const x = anim.startTime * pixelsPerMs;
            const width = anim.duration * pixelsPerMs;

            let color = 'bg-blue-500';
            if (anim.type === 'in') color = 'bg-green-500';
            if (anim.type === 'out') color = 'bg-red-500';
            if (anim.type === 'keyframe') color = 'bg-purple-500';

            return (
              <div
                key={idx}
                className={`absolute top-1 bottom-1 ${color} rounded opacity-70 hover:opacity-100 transition-opacity`}
                style={{
                  left: `${x}px`,
                  width: `${width}px`,
                }}
                title={`${anim.type} - ${anim.duration}ms - ${anim.easing}`}
              >
                <div className="px-2 py-1 text-xs text-white truncate">
                  {anim.type}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-800">
      {/* Timeline Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Timeline</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(Math.max(0.5, zoom - 0.5))}
              className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded text-xs transition-colors"
            >
              -
            </button>
            <span className="text-xs text-gray-400 w-12 text-center">{(zoom * 100).toFixed(0)}%</span>
            <button
              onClick={() => setZoom(Math.min(3, zoom + 0.5))}
              className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded text-xs transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex-1 overflow-auto">
        <div className="relative" style={{ minWidth: timelineWidth + 160 }}>
          {/* Time ruler */}
          <div className="sticky top-0 h-8 bg-gray-800 border-b border-gray-700 z-20">
            <div className="absolute left-40 top-0 bottom-0 right-0">
              <div className="relative h-full" onClick={handleTimelineClick}>
                {renderTimeMarkers()}

                {/* Playhead */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-30 pointer-events-none"
                  style={{ left: `${currentTime * pixelsPerMs}px` }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-sm rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Layer tracks */}
          <div className="relative">
            {layers.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-gray-500 text-sm">
                No layers to display
              </div>
            ) : (
              layers.map(layer => renderLayerTrack(layer))
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-4 py-2 border-t border-gray-700 bg-gray-800/50 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded" />
          <span className="text-xs text-gray-400">In</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded" />
          <span className="text-xs text-gray-400">Out</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded" />
          <span className="text-xs text-gray-400">Keyframe</span>
        </div>
      </div>
    </div>
  );
};

export default TimelinePanel;
