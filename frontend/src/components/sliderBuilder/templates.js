// Predefined slider templates with sample data

export const sliderTemplates = {
  hero_banner: {
    id: 'hero_banner',
    name: 'Hero Banner',
    description: 'Classic hero section with background image and text overlay',
    thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=200&fit=crop',
    data: {
      id: 'slider_hero',
      duration: 6000,
      slides: [
        {
          id: 'slide_hero_1',
          duration: 6000,
          background: {
            type: 'color',
            value: '#1a1a2e'
          },
          layers: [
            // Background image
            {
              id: 'layer_bg_1',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.4,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                {
                  type: 'in',
                  startTime: 0,
                  duration: 1500,
                  easing: 'power2.out',
                  properties: {
                    from: { opacity: 0, scale: 1.2 },
                    to: { opacity: 0.4, scale: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 5000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 0.4 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Main title
            {
              id: 'layer_title_1',
              type: 'text',
              content: 'Build Amazing Websites',
              position: { x: 100, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 2,
              fontSize: 72,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                {
                  type: 'in',
                  startTime: 300,
                  duration: 1200,
                  easing: 'back.out(1.7)',
                  properties: {
                    from: { x: -300, opacity: 0, scale: 0.5 },
                    to: { x: 100, opacity: 1, scale: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 5000,
                  duration: 800,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0, x: 200 }
                  }
                }
              ]
            },
            // Subtitle
            {
              id: 'layer_subtitle_1',
              type: 'text',
              content: 'With our powerful drag & drop builder',
              position: { x: 100, y: 300 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 32,
              fontFamily: 'Arial',
              fill: '#dddddd',
              animations: [
                {
                  type: 'in',
                  startTime: 600,
                  duration: 1000,
                  easing: 'power2.out',
                  properties: {
                    from: { y: 350, opacity: 0 },
                    to: { y: 300, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 5000,
                  duration: 800,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // CTA Button
            {
              id: 'layer_cta_1',
              type: 'rect',
              content: '',
              position: { x: 100, y: 400 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              width: 200,
              height: 60,
              fill: '#3b82f6',
              cornerRadius: 8,
              animations: [
                {
                  type: 'in',
                  startTime: 900,
                  duration: 800,
                  easing: 'elastic.out(1, 0.5)',
                  properties: {
                    from: { y: 450, opacity: 0, scale: 0.3 },
                    to: { y: 400, opacity: 1, scale: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 5000,
                  duration: 800,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // CTA Text
            {
              id: 'layer_cta_text_1',
              type: 'text',
              content: 'Get Started',
              position: { x: 150, y: 420 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 5,
              fontSize: 24,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                {
                  type: 'in',
                  startTime: 1000,
                  duration: 600,
                  easing: 'power2.out',
                  properties: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 5000,
                  duration: 800,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },

  product_showcase: {
    id: 'product_showcase',
    name: 'Product Showcase',
    description: 'Showcase products with parallax effect',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    data: {
      id: 'slider_product',
      duration: 7000,
      slides: [
        {
          id: 'slide_product_1',
          duration: 7000,
          background: {
            type: 'color',
            value: '#f8f9fa'
          },
          layers: [
            // Product image
            {
              id: 'layer_product_img',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
              position: { x: 700, y: 100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 2,
              width: 400,
              height: 400,
              animations: [
                {
                  type: 'in',
                  startTime: 0,
                  duration: 1500,
                  easing: 'power3.out',
                  properties: {
                    from: { x: 1200, rotation: -90, opacity: 0 },
                    to: { x: 700, rotation: 0, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 6000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Title
            {
              id: 'layer_product_title',
              type: 'text',
              content: 'Premium Headphones',
              position: { x: 100, y: 150 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 64,
              fontFamily: 'Arial',
              fill: '#1a1a1a',
              animations: [
                {
                  type: 'in',
                  startTime: 400,
                  duration: 1000,
                  easing: 'power2.out',
                  properties: {
                    from: { x: -200, opacity: 0 },
                    to: { x: 100, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 6000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Description
            {
              id: 'layer_product_desc',
              type: 'text',
              content: 'Crystal clear sound',
              position: { x: 100, y: 240 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 28,
              fontFamily: 'Arial',
              fill: '#666666',
              animations: [
                {
                  type: 'in',
                  startTime: 700,
                  duration: 1000,
                  easing: 'power2.out',
                  properties: {
                    from: { x: -200, opacity: 0 },
                    to: { x: 100, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 6000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Accent shape
            {
              id: 'layer_accent',
              type: 'rect',
              content: '',
              position: { x: 50, y: 130 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 1,
              width: 10,
              height: 150,
              fill: '#3b82f6',
              cornerRadius: 5,
              animations: [
                {
                  type: 'in',
                  startTime: 200,
                  duration: 800,
                  easing: 'power2.out',
                  properties: {
                    from: { height: 0, opacity: 0 },
                    to: { height: 150, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 6000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },

  simple_intro: {
    id: 'simple_intro',
    name: 'Simple Intro',
    description: 'Clean and minimal introduction slide',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop',
    data: {
      id: 'slider_simple',
      duration: 5000,
      slides: [
        {
          id: 'slide_simple_1',
          duration: 5000,
          background: {
            type: 'color',
            value: '#0f172a'
          },
          layers: [
            // Main text
            {
              id: 'layer_simple_text',
              type: 'text',
              content: 'Welcome',
              position: { x: 400, y: 250 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 1,
              fontSize: 96,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                {
                  type: 'in',
                  startTime: 0,
                  duration: 2000,
                  easing: 'power4.out',
                  properties: {
                    from: { opacity: 0, scale: 0.5, rotation: -180 },
                    to: { opacity: 1, scale: 1, rotation: 0 }
                  }
                },
                {
                  type: 'out',
                  startTime: 3500,
                  duration: 1500,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1, scale: 1 },
                    to: { opacity: 0, scale: 1.5 }
                  }
                }
              ]
            },
            // Decorative circle
            {
              id: 'layer_circle_1',
              type: 'rect',
              content: '',
              position: { x: 300, y: 150 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.3,
              zIndex: 0,
              width: 200,
              height: 200,
              fill: '#3b82f6',
              cornerRadius: 100,
              animations: [
                {
                  type: 'in',
                  startTime: 500,
                  duration: 1500,
                  easing: 'elastic.out(1, 0.3)',
                  properties: {
                    from: { scale: 0, opacity: 0 },
                    to: { scale: 1, opacity: 0.3 }
                  }
                },
                {
                  type: 'keyframe',
                  startTime: 2000,
                  duration: 1000,
                  easing: 'power1.inOut',
                  properties: {
                    from: { rotation: 0 },
                    to: { rotation: 360 }
                  }
                },
                {
                  type: 'out',
                  startTime: 3500,
                  duration: 1500,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 0.3 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Decorative circle 2
            {
              id: 'layer_circle_2',
              type: 'rect',
              content: '',
              position: { x: 700, y: 350 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.2,
              zIndex: 0,
              width: 150,
              height: 150,
              fill: '#f59e0b',
              cornerRadius: 75,
              animations: [
                {
                  type: 'in',
                  startTime: 800,
                  duration: 1500,
                  easing: 'elastic.out(1, 0.3)',
                  properties: {
                    from: { scale: 0, opacity: 0 },
                    to: { scale: 1, opacity: 0.2 }
                  }
                },
                {
                  type: 'out',
                  startTime: 3500,
                  duration: 1500,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 0.2 },
                    to: { opacity: 0 }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },

  photo_gallery: {
    id: 'photo_gallery',
    name: 'Photo Gallery',
    description: 'Multiple images with staggered animations',
    thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop',
    data: {
      id: 'slider_gallery',
      duration: 8000,
      slides: [
        {
          id: 'slide_gallery_1',
          duration: 8000,
          background: {
            type: 'color',
            value: '#000000'
          },
          layers: [
            // Title
            {
              id: 'layer_gallery_title',
              type: 'text',
              content: 'Our Collection',
              position: { x: 400, y: 50 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 10,
              fontSize: 48,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                {
                  type: 'in',
                  startTime: 0,
                  duration: 1000,
                  easing: 'power2.out',
                  properties: {
                    from: { y: 0, opacity: 0 },
                    to: { y: 50, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 7000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Image 1
            {
              id: 'layer_img_1',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop',
              position: { x: 100, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 1,
              width: 250,
              height: 250,
              animations: [
                {
                  type: 'in',
                  startTime: 300,
                  duration: 1000,
                  easing: 'back.out(1.7)',
                  properties: {
                    from: { scale: 0, rotation: -90, opacity: 0 },
                    to: { scale: 1, rotation: 0, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 7000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Image 2
            {
              id: 'layer_img_2',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&h=300&fit=crop',
              position: { x: 450, y: 250 },
              scale: { x: 1, y: 1 },
              rotation: 5,
              opacity: 1,
              zIndex: 2,
              width: 280,
              height: 280,
              animations: [
                {
                  type: 'in',
                  startTime: 600,
                  duration: 1000,
                  easing: 'back.out(1.7)',
                  properties: {
                    from: { scale: 0, rotation: -90, opacity: 0 },
                    to: { scale: 1, rotation: 5, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 7000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            },
            // Image 3
            {
              id: 'layer_img_3',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
              position: { x: 800, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: -3,
              opacity: 1,
              zIndex: 3,
              width: 260,
              height: 260,
              animations: [
                {
                  type: 'in',
                  startTime: 900,
                  duration: 1000,
                  easing: 'back.out(1.7)',
                  properties: {
                    from: { scale: 0, rotation: -90, opacity: 0 },
                    to: { scale: 1, rotation: -3, opacity: 1 }
                  }
                },
                {
                  type: 'out',
                  startTime: 7000,
                  duration: 1000,
                  easing: 'power2.in',
                  properties: {
                    from: { opacity: 1 },
                    to: { opacity: 0 }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

export const getTemplate = (templateId) => {
  return sliderTemplates[templateId] || null;
};

export const getAllTemplates = () => {
  return Object.values(sliderTemplates);
};
