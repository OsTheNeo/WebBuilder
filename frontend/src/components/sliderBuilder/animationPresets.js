// Simple animation presets for easy slider creation

export const animationPresets = {
  // ENTRANCE ANIMATIONS
  fadeIn: {
    name: 'Fade In',
    type: 'in',
    properties: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    duration: 800,
    easing: 'power2.out'
  },

  slideInLeft: {
    name: 'Slide In Left',
    type: 'in',
    properties: {
      from: { x: -200, opacity: 0 },
      to: { x: 0, opacity: 1 }
    },
    duration: 1000,
    easing: 'power2.out'
  },

  slideInRight: {
    name: 'Slide In Right',
    type: 'in',
    properties: {
      from: { x: 200, opacity: 0 },
      to: { x: 0, opacity: 1 }
    },
    duration: 1000,
    easing: 'power2.out'
  },

  slideInUp: {
    name: 'Slide In Up',
    type: 'in',
    properties: {
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1 }
    },
    duration: 1000,
    easing: 'power2.out'
  },

  slideInDown: {
    name: 'Slide In Down',
    type: 'in',
    properties: {
      from: { y: -100, opacity: 0 },
      to: { y: 0, opacity: 1 }
    },
    duration: 1000,
    easing: 'power2.out'
  },

  zoomIn: {
    name: 'Zoom In',
    type: 'in',
    properties: {
      from: { scale: 0, opacity: 0 },
      to: { scale: 1, opacity: 1 }
    },
    duration: 800,
    easing: 'back.out(1.7)'
  },

  bounceIn: {
    name: 'Bounce In',
    type: 'in',
    properties: {
      from: { scale: 0.3, opacity: 0 },
      to: { scale: 1, opacity: 1 }
    },
    duration: 1000,
    easing: 'elastic.out(1, 0.5)'
  },

  rotateIn: {
    name: 'Rotate In',
    type: 'in',
    properties: {
      from: { rotation: -180, scale: 0, opacity: 0 },
      to: { rotation: 0, scale: 1, opacity: 1 }
    },
    duration: 1200,
    easing: 'power2.out'
  },

  // EXIT ANIMATIONS
  fadeOut: {
    name: 'Fade Out',
    type: 'out',
    properties: {
      from: { opacity: 1 },
      to: { opacity: 0 }
    },
    duration: 800,
    easing: 'power2.in'
  },

  slideOutLeft: {
    name: 'Slide Out Left',
    type: 'out',
    properties: {
      from: { x: 0, opacity: 1 },
      to: { x: -200, opacity: 0 }
    },
    duration: 800,
    easing: 'power2.in'
  },

  slideOutRight: {
    name: 'Slide Out Right',
    type: 'out',
    properties: {
      from: { x: 0, opacity: 1 },
      to: { x: 200, opacity: 0 }
    },
    duration: 800,
    easing: 'power2.in'
  },

  zoomOut: {
    name: 'Zoom Out',
    type: 'out',
    properties: {
      from: { scale: 1, opacity: 1 },
      to: { scale: 1.5, opacity: 0 }
    },
    duration: 800,
    easing: 'power2.in'
  }
};

export const getAnimationPreset = (presetName) => {
  return animationPresets[presetName] || animationPresets.fadeIn;
};

export const getEntranceAnimations = () => {
  return Object.entries(animationPresets)
    .filter(([, preset]) => preset.type === 'in')
    .map(([key, preset]) => ({ key, ...preset }));
};

export const getExitAnimations = () => {
  return Object.entries(animationPresets)
    .filter(([, preset]) => preset.type === 'out')
    .map(([key, preset]) => ({ key, ...preset }));
};
