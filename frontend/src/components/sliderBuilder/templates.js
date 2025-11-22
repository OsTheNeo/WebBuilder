// Real slider templates with MULTIPLE slides that rotate

export const sliderTemplates = {
  hero_banner: {
    id: 'hero_banner',
    name: 'Hero Slider (3 slides)',
    description: 'Professional hero slider with 3 rotating messages',
    thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=200&fit=crop',
    data: {
      id: 'slider_hero',
      duration: 5000,
      slides: [
        // SLIDE 1 - Build Amazing Websites
        {
          id: 'slide_1',
          duration: 5000,
          background: { type: 'color', value: '#1a1a2e' },
          layers: [
            {
              id: 'bg_1',
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
                { type: 'in', startTime: 0, duration: 1000, easing: 'power2.out', properties: { from: { opacity: 0 }, to: { opacity: 0.4 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.4 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'title_1',
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
                { type: 'in', startTime: 300, duration: 1000, easing: 'back.out(1.7)', properties: { from: { x: -300, opacity: 0 }, to: { x: 100, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'subtitle_1',
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
                { type: 'in', startTime: 600, duration: 1000, easing: 'power2.out', properties: { from: { y: 350, opacity: 0 }, to: { y: 300, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // SLIDE 2 - Create Beautiful Designs
        {
          id: 'slide_2',
          duration: 5000,
          background: { type: 'color', value: '#1e293b' },
          layers: [
            {
              id: 'bg_2',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.3,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                { type: 'in', startTime: 0, duration: 1000, easing: 'power2.out', properties: { from: { opacity: 0, scale: 1.2 }, to: { opacity: 0.3, scale: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.3 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'title_2',
              type: 'text',
              content: 'Create Beautiful Designs',
              position: { x: 150, y: 220 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 2,
              fontSize: 68,
              fontFamily: 'Arial',
              fill: '#10b981',
              animations: [
                { type: 'in', startTime: 200, duration: 1200, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'subtitle_2',
              type: 'text',
              content: 'Professional templates & animations',
              position: { x: 150, y: 310 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 30,
              fontFamily: 'Arial',
              fill: '#f0f0f0',
              animations: [
                { type: 'in', startTime: 500, duration: 1000, easing: 'power2.out', properties: { from: { x: 350, opacity: 0 }, to: { x: 150, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // SLIDE 3 - Launch Faster
        {
          id: 'slide_3',
          duration: 5000,
          background: { type: 'color', value: '#0f172a' },
          layers: [
            {
              id: 'bg_3',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.35,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                { type: 'in', startTime: 0, duration: 1000, easing: 'power2.out', properties: { from: { opacity: 0 }, to: { opacity: 0.35 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.35 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'title_3',
              type: 'text',
              content: 'Launch Faster',
              position: { x: 200, y: 230 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 2,
              fontSize: 80,
              fontFamily: 'Arial',
              fill: '#3b82f6',
              animations: [
                { type: 'in', startTime: 300, duration: 1000, easing: 'power3.out', properties: { from: { y: 130, opacity: 0, scale: 0.5 }, to: { y: 230, opacity: 1, scale: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'subtitle_3',
              type: 'text',
              content: 'Save time with pre-built components',
              position: { x: 200, y: 330 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 28,
              fontFamily: 'Arial',
              fill: '#e0e0e0',
              animations: [
                { type: 'in', startTime: 700, duration: 1000, easing: 'power2.out', properties: { from: { y: 380, opacity: 0 }, to: { y: 330, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 800, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        }
      ]
    }
  },

  product_showcase: {
    id: 'product_showcase',
    name: 'Product Slider (3 products)',
    description: 'Showcase 3 different products with animations',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    data: {
      id: 'slider_products',
      duration: 5000,
      slides: [
        // PRODUCT 1 - Headphones
        {
          id: 'product_1',
          duration: 5000,
          background: { type: 'color', value: '#f8f9fa' },
          layers: [
            {
              id: 'prod_img_1',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
              position: { x: 650, y: 100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 2,
              width: 450,
              height: 450,
              animations: [
                { type: 'in', startTime: 0, duration: 1200, easing: 'back.out(1.7)', properties: { from: { x: 1200, rotation: -45, opacity: 0 }, to: { x: 650, rotation: 0, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_title_1',
              type: 'text',
              content: 'Premium Headphones',
              position: { x: 100, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 56,
              fontFamily: 'Arial',
              fill: '#1a1a1a',
              animations: [
                { type: 'in', startTime: 400, duration: 1000, easing: 'power2.out', properties: { from: { x: -200, opacity: 0 }, to: { x: 100, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_price_1',
              type: 'text',
              content: '$199',
              position: { x: 100, y: 280 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 48,
              fontFamily: 'Arial',
              fill: '#3b82f6',
              animations: [
                { type: 'in', startTime: 700, duration: 800, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // PRODUCT 2 - Sneakers
        {
          id: 'product_2',
          duration: 5000,
          background: { type: 'color', value: '#fafafa' },
          layers: [
            {
              id: 'prod_img_2',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
              position: { x: 650, y: 120 },
              scale: { x: 1, y: 1 },
              rotation: 5,
              opacity: 1,
              zIndex: 2,
              width: 430,
              height: 430,
              animations: [
                { type: 'in', startTime: 0, duration: 1400, easing: 'power3.out', properties: { from: { y: -200, rotation: -90, opacity: 0 }, to: { y: 120, rotation: 5, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_title_2',
              type: 'text',
              content: 'Limited Edition Sneakers',
              position: { x: 80, y: 210 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 52,
              fontFamily: 'Arial',
              fill: '#000000',
              animations: [
                { type: 'in', startTime: 500, duration: 1000, easing: 'power2.out', properties: { from: { x: -250, opacity: 0 }, to: { x: 80, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_price_2',
              type: 'text',
              content: '$249',
              position: { x: 80, y: 290 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 46,
              fontFamily: 'Arial',
              fill: '#ef4444',
              animations: [
                { type: 'in', startTime: 800, duration: 800, easing: 'back.out(1.7)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // PRODUCT 3 - Camera
        {
          id: 'product_3',
          duration: 5000,
          background: { type: 'color', value: '#f5f5f5' },
          layers: [
            {
              id: 'prod_img_3',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
              position: { x: 670, y: 90 },
              scale: { x: 1, y: 1 },
              rotation: -3,
              opacity: 1,
              zIndex: 2,
              width: 460,
              height: 460,
              animations: [
                { type: 'in', startTime: 0, duration: 1300, easing: 'power3.out', properties: { from: { scale: 0.3, rotation: 180, opacity: 0 }, to: { scale: 1, rotation: -3, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_title_3',
              type: 'text',
              content: 'Pro Camera',
              position: { x: 120, y: 220 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              fontSize: 60,
              fontFamily: 'Arial',
              fill: '#0f172a',
              animations: [
                { type: 'in', startTime: 600, duration: 1000, easing: 'power2.out', properties: { from: { x: -300, opacity: 0 }, to: { x: 120, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            },
            {
              id: 'prod_price_3',
              type: 'text',
              content: '$899',
              position: { x: 120, y: 300 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 50,
              fontFamily: 'Arial',
              fill: '#10b981',
              animations: [
                { type: 'in', startTime: 900, duration: 800, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 4000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
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
