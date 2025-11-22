import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Stage, Layer, Text, Rect, Image as KonvaImage, Transformer } from 'react-konva';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 675; // 16:9 aspect ratio

const LayerRenderer = forwardRef(({ layer, isSelected, onSelect, onTransform }, ref) => {
  const shapeRef = useRef();
  const [image, setImage] = useState(null);

  // Expose the shape ref to parent component
  useImperativeHandle(ref, () => shapeRef.current);

  // Load image if layer type is image
  useEffect(() => {
    if (layer.type === 'image' && layer.content) {
      const img = new window.Image();
      img.src = layer.content;
      img.crossOrigin = 'anonymous'; // Handle CORS
      img.onload = () => {
        setImage(img);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${layer.content}`);
      };
    }
  }, [layer.type, layer.content]);

  const handleDragEnd = (e) => {
    onTransform(layer.id, {
      position: {
        x: e.target.x(),
        y: e.target.y()
      }
    });
  };

  const handleTransformEnd = (e) => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    const rotation = node.rotation();

    // Reset scale and update dimensions
    node.scaleX(1);
    node.scaleY(1);

    onTransform(layer.id, {
      position: {
        x: node.x(),
        y: node.y()
      },
      scale: {
        x: scaleX,
        y: scaleY
      },
      rotation: rotation,
      // For text, update font size
      ...(layer.type === 'text' && {
        fontSize: Math.max(5, layer.fontSize * scaleX)
      }),
      // For image/rect, update dimensions
      ...(layer.type !== 'text' && {
        width: Math.max(5, (layer.width || 200) * scaleX),
        height: Math.max(5, (layer.height || 200) * scaleY)
      })
    });
  };

  const commonProps = {
    ref: shapeRef,
    x: layer.position.x,
    y: layer.position.y,
    scaleX: layer.scale.x,
    scaleY: layer.scale.y,
    rotation: layer.rotation,
    opacity: layer.opacity,
    draggable: true,
    onClick: () => onSelect(layer.id),
    onTap: () => onSelect(layer.id),
    onDragEnd: handleDragEnd,
    onTransformEnd: handleTransformEnd,
  };

  if (layer.type === 'text') {
    return (
      <Text
        {...commonProps}
        text={layer.content}
        fontSize={layer.fontSize}
        fontFamily={layer.fontFamily}
        fill={layer.fill}
      />
    );
  }

  if (layer.type === 'rect') {
    return (
      <Rect
        {...commonProps}
        width={layer.width || 200}
        height={layer.height || 200}
        fill={layer.fill || '#3b82f6'}
        cornerRadius={layer.cornerRadius || 0}
      />
    );
  }

  if (layer.type === 'image' && image) {
    return (
      <KonvaImage
        {...commonProps}
        image={image}
        width={layer.width || 200}
        height={layer.height || 200}
      />
    );
  }

  return null;
});

const TransformerComponent = ({ selectedLayer }) => {
  const transformerRef = useRef();

  useEffect(() => {
    // Note: Transformer will automatically attach to selected shape via Konva's API
    // This is a simplified version - full implementation would require node refs
  }, [selectedLayer]);

  return <Transformer ref={transformerRef} />;
};

const SliderCanvas = ({ slide, selectedLayerId, onSelectLayer, onUpdateLayer, isPlaying, currentTime, onTimeUpdate, duration, onSlideComplete, slideIndex }) => {
  const stageRef = useRef();
  const layerRefs = useRef({});
  const timelineRef = useRef(null);

  // Create and setup timeline
  useEffect(() => {
    // Kill previous timeline if exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Small delay to ensure refs are populated
    const timer = setTimeout(() => {
      console.log('Creating timeline for slide', slideIndex, 'with duration', duration);

      // Create timeline for all layers
      const tl = gsap.timeline({
        paused: true,
        onUpdate: function() {
          stageRef.current?.batchDraw();
          // Update current time (convert from seconds to milliseconds)
          if (onTimeUpdate) {
            const time = this.time() * 1000;
            onTimeUpdate(Math.min(time, duration));
          }
        },
        onComplete: function() {
          // When slide animations complete, trigger slide change
          console.log('✅ Timeline completed! Slide index:', slideIndex, 'Duration:', duration);
          if (onSlideComplete) {
            console.log('Calling onSlideComplete callback');
            onSlideComplete();
          }
        }
      });

      slide.layers.forEach((layer) => {
        const layerNode = layerRefs.current[layer.id];
        if (!layerNode) {
          console.warn(`Layer node not found for ${layer.id}`);
          return;
        }

        // Set initial state from first "in" animation
        const inAnimation = layer.animations?.find(a => a.type === 'in');
        if (inAnimation && inAnimation.properties?.from) {
          gsap.set(layerNode, {
            x: inAnimation.properties.from.x !== undefined ? inAnimation.properties.from.x : layer.position.x,
            y: inAnimation.properties.from.y !== undefined ? inAnimation.properties.from.y : layer.position.y,
            opacity: inAnimation.properties.from.opacity !== undefined ? inAnimation.properties.from.opacity : layer.opacity,
            scaleX: inAnimation.properties.from.scale !== undefined ? inAnimation.properties.from.scale : layer.scale.x,
            scaleY: inAnimation.properties.from.scale !== undefined ? inAnimation.properties.from.scale : layer.scale.y,
            rotation: inAnimation.properties.from.rotation !== undefined ? inAnimation.properties.from.rotation : layer.rotation,
          });
        }

        layer.animations?.forEach((anim) => {
          const { startTime, duration: animDuration, easing, properties } = anim;

          // Add animation to timeline
          tl.fromTo(
            layerNode,
            {
              x: properties.from?.x !== undefined ? properties.from.x : layer.position.x,
              y: properties.from?.y !== undefined ? properties.from.y : layer.position.y,
              opacity: properties.from?.opacity !== undefined ? properties.from.opacity : layer.opacity,
              scaleX: properties.from?.scale !== undefined ? properties.from.scale : layer.scale.x,
              scaleY: properties.from?.scale !== undefined ? properties.from.scale : layer.scale.y,
              rotation: properties.from?.rotation !== undefined ? properties.from.rotation : layer.rotation,
            },
            {
              x: properties.to?.x !== undefined ? properties.to.x : layer.position.x,
              y: properties.to?.y !== undefined ? properties.to.y : layer.position.y,
              opacity: properties.to?.opacity !== undefined ? properties.to.opacity : layer.opacity,
              scaleX: properties.to?.scale !== undefined ? properties.to.scale : layer.scale.x,
              scaleY: properties.to?.scale !== undefined ? properties.to.scale : layer.scale.y,
              rotation: properties.to?.rotation !== undefined ? properties.to.rotation : layer.rotation,
              duration: animDuration / 1000, // Convert to seconds
              ease: easing,
            },
            startTime / 1000 // Convert to seconds
          );
        });
      });

      // Ensure timeline lasts for the full slide duration
      // GSAP will auto-extend, but we force it to exactly the slide duration
      const currentDuration = tl.duration();
      const targetDuration = duration / 1000; // Convert to seconds

      if (currentDuration < targetDuration) {
        // Add a dummy tween to extend timeline to exact duration
        tl.to({}, { duration: targetDuration - currentDuration }, currentDuration);
      }

      console.log('Timeline created with duration:', tl.duration(), 'seconds (target:', targetDuration, ')');

      // Set timeline to start and redraw
      tl.seek(0);
      stageRef.current?.batchDraw();

      timelineRef.current = tl;
    }, 50); // 50ms delay to ensure refs are populated

    return () => {
      clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [slide.layers, slideIndex, duration]);

  // Control playback
  useEffect(() => {
    if (!timelineRef.current) {
      console.log('⚠️ Timeline ref not ready yet');
      return;
    }

    if (isPlaying) {
      console.log('▶️ Playing slide', slideIndex, '- restarting timeline');
      // Restart from beginning when slide changes
      timelineRef.current.restart();
    } else {
      console.log('⏸️ Pausing slide', slideIndex);
      timelineRef.current.pause();
    }
  }, [isPlaying, slideIndex]);

  const handleStageClick = (e) => {
    // Click on empty area - deselect
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      onSelectLayer(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>
      <Stage
        ref={stageRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ background: slide.background.value }}
        onClick={handleStageClick}
      >
        <Layer>
          {slide.layers
            .sort((a, b) => a.zIndex - b.zIndex)
            .map((layer) => (
              <LayerRenderer
                key={layer.id}
                layer={layer}
                isSelected={layer.id === selectedLayerId}
                onSelect={onSelectLayer}
                onTransform={onUpdateLayer}
                ref={(node) => {
                  if (node) {
                    layerRefs.current[layer.id] = node;
                  } else {
                    delete layerRefs.current[layer.id];
                  }
                }}
              />
            ))}
          {selectedLayerId && <TransformerComponent selectedLayer={slide.layers.find(l => l.id === selectedLayerId)} />}
        </Layer>
      </Stage>
    </div>
  );
};

export default SliderCanvas;
