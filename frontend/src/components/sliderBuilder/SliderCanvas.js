import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Text, Rect, Image as KonvaImage, Transformer } from 'react-konva';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 675; // 16:9 aspect ratio

const LayerRenderer = ({ layer, isSelected, onSelect, onTransform }) => {
  const shapeRef = useRef();
  const [image, setImage] = useState(null);

  // Load image if layer type is image
  useEffect(() => {
    if (layer.type === 'image' && layer.content) {
      const img = new window.Image();
      img.src = layer.content;
      img.onload = () => {
        setImage(img);
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
};

const TransformerComponent = ({ selectedLayer }) => {
  const transformerRef = useRef();

  useEffect(() => {
    // Note: Transformer will automatically attach to selected shape via Konva's API
    // This is a simplified version - full implementation would require node refs
  }, [selectedLayer]);

  return <Transformer ref={transformerRef} />;
};

const SliderCanvas = ({ slide, selectedLayerId, onSelectLayer, onUpdateLayer, isPlaying, currentTime }) => {
  const stageRef = useRef();
  const layerRefs = useRef({});

  // Handle animations with GSAP
  useGSAP(() => {
    if (!isPlaying) return;

    // Create timeline for all layers
    const tl = gsap.timeline({
      onUpdate: () => {
        stageRef.current?.batchDraw();
      }
    });

    slide.layers.forEach((layer) => {
      const layerNode = layerRefs.current[layer.id];
      if (!layerNode) return;

      layer.animations.forEach((anim) => {
        const { startTime, duration, easing, properties } = anim;

        // Convert easing string to GSAP format
        const gsapEasing = easing.replace('.', '.');

        // Add animation to timeline
        tl.fromTo(
          layerNode,
          {
            x: properties.from.x !== undefined ? properties.from.x : layer.position.x,
            y: properties.from.y !== undefined ? properties.from.y : layer.position.y,
            opacity: properties.from.opacity !== undefined ? properties.from.opacity : layer.opacity,
            scaleX: properties.from.scale !== undefined ? properties.from.scale : layer.scale.x,
            scaleY: properties.from.scale !== undefined ? properties.from.scale : layer.scale.y,
            rotation: properties.from.rotation !== undefined ? properties.from.rotation : layer.rotation,
          },
          {
            x: properties.to.x !== undefined ? properties.to.x : layer.position.x,
            y: properties.to.y !== undefined ? properties.to.y : layer.position.y,
            opacity: properties.to.opacity !== undefined ? properties.to.opacity : layer.opacity,
            scaleX: properties.to.scale !== undefined ? properties.to.scale : layer.scale.x,
            scaleY: properties.to.scale !== undefined ? properties.to.scale : layer.scale.y,
            rotation: properties.to.rotation !== undefined ? properties.to.rotation : layer.rotation,
            duration: duration / 1000, // Convert to seconds
            ease: gsapEasing,
          },
          startTime / 1000 // Convert to seconds
        );
      });
    });

    return () => {
      tl.kill();
    };
  }, { dependencies: [isPlaying, slide.layers], scope: stageRef });

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
                    layerRefs.current[layer.id] = node.shapeRef?.current;
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
