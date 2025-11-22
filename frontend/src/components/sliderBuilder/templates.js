// Real slider templates with MULTIPLE slides and PARALLAX effects

export const sliderTemplates = {
  parallax_hero: {
    id: 'parallax_hero',
    name: 'Parallax Hero (3 slides)',
    description: 'Multi-layered parallax effect with depth',
    thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=200&fit=crop',
    data: {
      id: 'slider_parallax_hero',
      duration: 5000,
      slides: [
        // SLIDE 1 - Mountain Parallax
        {
          id: 'slide_parallax_1',
          duration: 7000,
          background: { type: 'color', value: '#0a0e27' },
          layers: [
            // Background layer - slowest (mountains far)
            {
              id: 'bg_mountains_1',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1.2, y: 1.2 },
              rotation: 0,
              opacity: 0.6,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                { type: 'in', startTime: 0, duration: 1500, easing: 'power2.out', properties: { from: { opacity: 0, x: -50 }, to: { opacity: 0.6, x: 0 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.6, x: 0 }, to: { opacity: 0, x: 50 } } }
              ]
            },
            // Mid layer - medium speed (clouds)
            {
              id: 'clouds_1',
              type: 'rect',
              content: '',
              position: { x: 0, y: 100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.3,
              zIndex: 2,
              width: 1200,
              height: 200,
              fill: '#ffffff',
              animations: [
                { type: 'in', startTime: 200, duration: 1800, easing: 'power1.out', properties: { from: { opacity: 0, x: -150 }, to: { opacity: 0.3, x: 0 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.3, x: 0 }, to: { opacity: 0, x: 150 } } }
              ]
            },
            // Foreground - fastest (text)
            {
              id: 'title_parallax_1',
              type: 'text',
              content: 'EXPLORE THE PEAKS',
              position: { x: 120, y: 250 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 5,
              fontSize: 80,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                { type: 'in', startTime: 600, duration: 1200, easing: 'back.out(2)', properties: { from: { x: -400, opacity: 0 }, to: { x: 120, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power3.in', properties: { from: { x: 120, opacity: 1 }, to: { x: 400, opacity: 0 } } }
              ]
            },
            // Subtitle - faster than background
            {
              id: 'subtitle_parallax_1',
              type: 'text',
              content: 'Discover nature like never before',
              position: { x: 120, y: 350 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 36,
              fontFamily: 'Arial',
              fill: '#dddddd',
              animations: [
                { type: 'in', startTime: 900, duration: 1400, easing: 'power2.out', properties: { from: { x: -300, opacity: 0 }, to: { x: 120, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power2.in', properties: { from: { x: 120, opacity: 1 }, to: { x: 300, opacity: 0 } } }
              ]
            },
            // Button - very fast
            {
              id: 'btn_parallax_1',
              type: 'rect',
              position: { x: 120, y: 450 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 6,
              width: 200,
              height: 60,
              fill: '#3b82f6',
              cornerRadius: 30,
              animations: [
                { type: 'in', startTime: 1200, duration: 1000, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'back.in(2)', properties: { from: { scale: 1, opacity: 1 }, to: { scale: 0, opacity: 0 } } }
              ]
            },
            {
              id: 'btn_text_1',
              type: 'text',
              content: 'Start Journey',
              position: { x: 155, y: 468 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 7,
              fontSize: 24,
              fontFamily: 'Arial',
              fill: '#ffffff',
              animations: [
                { type: 'in', startTime: 1200, duration: 1000, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'back.in(2)', properties: { from: { scale: 1, opacity: 1 }, to: { scale: 0, opacity: 0 } } }
              ]
            }
          ]
        },

        // SLIDE 2 - Ocean Parallax (vertical movement)
        {
          id: 'slide_parallax_2',
          duration: 7000,
          background: { type: 'color', value: '#001524' },
          layers: [
            // Deep ocean layer - slowest vertical movement
            {
              id: 'ocean_deep_2',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1.1, y: 1.1 },
              rotation: 0,
              opacity: 0.7,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                { type: 'in', startTime: 0, duration: 1600, easing: 'power2.out', properties: { from: { opacity: 0, y: -30 }, to: { opacity: 0.7, y: 0 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.7, y: 0 }, to: { opacity: 0, y: 30 } } }
              ]
            },
            // Mid water layer - medium speed
            {
              id: 'waves_2',
              type: 'rect',
              position: { x: 0, y: 450 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.4,
              zIndex: 2,
              width: 1200,
              height: 150,
              fill: '#0077be',
              animations: [
                { type: 'in', startTime: 300, duration: 1800, easing: 'power1.out', properties: { from: { opacity: 0, y: 550 }, to: { opacity: 0.4, y: 450 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.4, y: 450 }, to: { opacity: 0, y: 350 } } }
              ]
            },
            // Title - fast vertical
            {
              id: 'title_ocean_2',
              type: 'text',
              content: 'DIVE DEEPER',
              position: { x: 200, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 5,
              fontSize: 90,
              fontFamily: 'Arial',
              fill: '#00d9ff',
              animations: [
                { type: 'in', startTime: 500, duration: 1400, easing: 'back.out(2)', properties: { from: { y: -200, opacity: 0, scale: 0.5 }, to: { y: 200, opacity: 1, scale: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power3.in', properties: { from: { y: 200, opacity: 1 }, to: { y: 600, opacity: 0 } } }
              ]
            },
            // Subtitle - very fast vertical
            {
              id: 'subtitle_ocean_2',
              type: 'text',
              content: 'Explore the underwater world',
              position: { x: 200, y: 310 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 32,
              fontFamily: 'Arial',
              fill: '#a0e7ff',
              animations: [
                { type: 'in', startTime: 800, duration: 1500, easing: 'power2.out', properties: { from: { y: -100, opacity: 0 }, to: { y: 310, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power2.in', properties: { from: { y: 310, opacity: 1 }, to: { y: 700, opacity: 0 } } }
              ]
            },
            // Floating element - slowest (different direction)
            {
              id: 'bubble_1',
              type: 'rect',
              position: { x: 900, y: 400 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.6,
              zIndex: 3,
              width: 80,
              height: 80,
              fill: '#ffffff',
              cornerRadius: 40,
              animations: [
                { type: 'in', startTime: 1000, duration: 2000, easing: 'power1.out', properties: { from: { y: 675, opacity: 0, scale: 0.3 }, to: { y: 400, opacity: 0.6, scale: 1 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { y: 400, opacity: 0.6 }, to: { y: 100, opacity: 0 } } }
              ]
            }
          ]
        },

        // SLIDE 3 - Space Parallax (multi-directional)
        {
          id: 'slide_parallax_3',
          duration: 7000,
          background: { type: 'color', value: '#0b0d17' },
          layers: [
            // Far stars - slowest
            {
              id: 'stars_far_3',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=675&fit=crop',
              position: { x: 0, y: 0 },
              scale: { x: 1.3, y: 1.3 },
              rotation: 0,
              opacity: 0.4,
              zIndex: 1,
              width: 1200,
              height: 675,
              animations: [
                { type: 'in', startTime: 0, duration: 2000, easing: 'power1.out', properties: { from: { opacity: 0, scale: 1.5 }, to: { opacity: 0.4, scale: 1.3 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 0.4, scale: 1.3 }, to: { opacity: 0, scale: 1.1 } } }
              ]
            },
            // Planet/moon - medium speed (diagonal movement)
            {
              id: 'planet_3',
              type: 'rect',
              position: { x: 800, y: 100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.8,
              zIndex: 2,
              width: 250,
              height: 250,
              fill: '#4a5568',
              cornerRadius: 125,
              animations: [
                { type: 'in', startTime: 400, duration: 1800, easing: 'power2.out', properties: { from: { x: 1200, y: -100, opacity: 0, scale: 0.5 }, to: { x: 800, y: 100, opacity: 0.8, scale: 1 } } },
                { type: 'out', startTime: 6000, duration: 1000, easing: 'power2.in', properties: { from: { x: 800, y: 100, opacity: 0.8 }, to: { x: 400, y: 300, opacity: 0 } } }
              ]
            },
            // Title - fastest
            {
              id: 'title_space_3',
              type: 'text',
              content: 'BEYOND INFINITY',
              position: { x: 150, y: 250 },
              scale: { x: 1, y: 1 },
              rotation: -5,
              opacity: 1,
              zIndex: 5,
              fontSize: 85,
              fontFamily: 'Arial',
              fill: '#a78bfa',
              animations: [
                { type: 'in', startTime: 700, duration: 1300, easing: 'back.out(2.5)', properties: { from: { x: -500, y: 450, rotation: -45, opacity: 0, scale: 0.3 }, to: { x: 150, y: 250, rotation: -5, opacity: 1, scale: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power3.in', properties: { from: { x: 150, y: 250, rotation: -5, opacity: 1 }, to: { x: 800, y: 50, rotation: 30, opacity: 0 } } }
              ]
            },
            // Subtitle - very fast opposite direction
            {
              id: 'subtitle_space_3',
              type: 'text',
              content: 'Journey through the cosmos',
              position: { x: 150, y: 360 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 34,
              fontFamily: 'Arial',
              fill: '#c4b5fd',
              animations: [
                { type: 'in', startTime: 1100, duration: 1400, easing: 'power2.out', properties: { from: { x: 1200, y: 360, opacity: 0 }, to: { x: 150, y: 360, opacity: 1 } } },
                { type: 'out', startTime: 6000, duration: 800, easing: 'power2.in', properties: { from: { x: 150, y: 360, opacity: 1 }, to: { x: -300, y: 360, opacity: 0 } } }
              ]
            },
            // Shooting star - very fast diagonal
            {
              id: 'star_shoot_3',
              type: 'rect',
              position: { x: 100, y: 100 },
              scale: { x: 4, y: 0.5 },
              rotation: 45,
              opacity: 0.9,
              zIndex: 3,
              width: 80,
              height: 8,
              fill: '#ffffff',
              animations: [
                { type: 'in', startTime: 1500, duration: 1000, easing: 'power4.out', properties: { from: { x: -200, y: -50, opacity: 0 }, to: { x: 100, y: 100, opacity: 0.9 } } },
                { type: 'out', startTime: 3000, duration: 800, easing: 'power4.in', properties: { from: { x: 100, y: 100, opacity: 0.9 }, to: { x: 1400, y: 500, opacity: 0 } } }
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
    description: 'Product showcase with parallax depth',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    data: {
      id: 'slider_products',
      duration: 6000,
      slides: [
        // PRODUCT 1 - Headphones with parallax background
        {
          id: 'product_1',
          duration: 6000,
          background: { type: 'color', value: '#f8f9fa' },
          layers: [
            // Background circles - slow movement
            {
              id: 'bg_circle_1',
              type: 'rect',
              position: { x: -100, y: -100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.1,
              zIndex: 1,
              width: 600,
              height: 600,
              fill: '#3b82f6',
              cornerRadius: 300,
              animations: [
                { type: 'in', startTime: 0, duration: 1500, easing: 'power1.out', properties: { from: { x: -300, opacity: 0, scale: 0.5 }, to: { x: -100, opacity: 0.1, scale: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: -100, opacity: 0.1 }, to: { x: 100, opacity: 0 } } }
              ]
            },
            // Product image - medium speed
            {
              id: 'prod_img_1',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
              position: { x: 650, y: 100 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 3,
              width: 450,
              height: 450,
              animations: [
                { type: 'in', startTime: 300, duration: 1400, easing: 'back.out(1.7)', properties: { from: { x: 1200, rotation: -45, opacity: 0, scale: 0.5 }, to: { x: 650, rotation: 0, opacity: 1, scale: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: 650, opacity: 1 }, to: { x: 200, opacity: 0 } } }
              ]
            },
            // Title - fast
            {
              id: 'prod_title_1',
              type: 'text',
              content: 'Premium Headphones',
              position: { x: 100, y: 200 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 56,
              fontFamily: 'Arial',
              fill: '#1a1a1a',
              animations: [
                { type: 'in', startTime: 600, duration: 1200, easing: 'power2.out', properties: { from: { x: -300, opacity: 0 }, to: { x: 100, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: 100, opacity: 1 }, to: { x: -200, opacity: 0 } } }
              ]
            },
            // Price - very fast with bounce
            {
              id: 'prod_price_1',
              type: 'text',
              content: '$199',
              position: { x: 100, y: 280 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 5,
              fontSize: 48,
              fontFamily: 'Arial',
              fill: '#3b82f6',
              animations: [
                { type: 'in', startTime: 900, duration: 1000, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // PRODUCT 2 - Sneakers
        {
          id: 'product_2',
          duration: 6000,
          background: { type: 'color', value: '#fafafa' },
          layers: [
            {
              id: 'bg_rect_2',
              type: 'rect',
              position: { x: 700, y: 300 },
              scale: { x: 1, y: 1 },
              rotation: 45,
              opacity: 0.08,
              zIndex: 1,
              width: 500,
              height: 500,
              fill: '#ef4444',
              animations: [
                { type: 'in', startTime: 0, duration: 1600, easing: 'power1.out', properties: { from: { rotation: 0, opacity: 0, scale: 0.3 }, to: { rotation: 45, opacity: 0.08, scale: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { rotation: 45, opacity: 0.08 }, to: { rotation: 90, opacity: 0 } } }
              ]
            },
            {
              id: 'prod_img_2',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
              position: { x: 650, y: 120 },
              scale: { x: 1, y: 1 },
              rotation: 5,
              opacity: 1,
              zIndex: 3,
              width: 430,
              height: 430,
              animations: [
                { type: 'in', startTime: 400, duration: 1600, easing: 'power3.out', properties: { from: { y: -300, rotation: -90, opacity: 0, scale: 0.4 }, to: { y: 120, rotation: 5, opacity: 1, scale: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { y: 120, opacity: 1 }, to: { y: 700, opacity: 0 } } }
              ]
            },
            {
              id: 'prod_title_2',
              type: 'text',
              content: 'Limited Edition',
              position: { x: 80, y: 210 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 1,
              zIndex: 4,
              fontSize: 52,
              fontFamily: 'Arial',
              fill: '#000000',
              animations: [
                { type: 'in', startTime: 700, duration: 1300, easing: 'power2.out', properties: { from: { x: -350, opacity: 0 }, to: { x: 80, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: 80, opacity: 1 }, to: { x: -250, opacity: 0 } } }
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
              zIndex: 5,
              fontSize: 46,
              fontFamily: 'Arial',
              fill: '#ef4444',
              animations: [
                { type: 'in', startTime: 1000, duration: 1000, easing: 'back.out(1.7)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
              ]
            }
          ]
        },

        // PRODUCT 3 - Camera
        {
          id: 'product_3',
          duration: 6000,
          background: { type: 'color', value: '#f5f5f5' },
          layers: [
            {
              id: 'bg_circle_3',
              type: 'rect',
              position: { x: 800, y: 400 },
              scale: { x: 1, y: 1 },
              rotation: 0,
              opacity: 0.12,
              zIndex: 1,
              width: 700,
              height: 700,
              fill: '#10b981',
              cornerRadius: 350,
              animations: [
                { type: 'in', startTime: 0, duration: 1700, easing: 'power1.out', properties: { from: { x: 1200, y: 800, opacity: 0, scale: 0.3 }, to: { x: 800, y: 400, opacity: 0.12, scale: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: 800, y: 400, opacity: 0.12 }, to: { x: 400, y: 0, opacity: 0 } } }
              ]
            },
            {
              id: 'prod_img_3',
              type: 'image',
              content: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
              position: { x: 670, y: 90 },
              scale: { x: 1, y: 1 },
              rotation: -3,
              opacity: 1,
              zIndex: 3,
              width: 460,
              height: 460,
              animations: [
                { type: 'in', startTime: 500, duration: 1500, easing: 'power3.out', properties: { from: { scale: 0.2, rotation: 180, opacity: 0 }, to: { scale: 1, rotation: -3, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
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
              zIndex: 4,
              fontSize: 60,
              fontFamily: 'Arial',
              fill: '#0f172a',
              animations: [
                { type: 'in', startTime: 800, duration: 1200, easing: 'power2.out', properties: { from: { x: -400, opacity: 0 }, to: { x: 120, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { x: 120, opacity: 1 }, to: { x: -300, opacity: 0 } } }
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
              zIndex: 5,
              fontSize: 50,
              fontFamily: 'Arial',
              fill: '#10b981',
              animations: [
                { type: 'in', startTime: 1100, duration: 1000, easing: 'elastic.out(1, 0.5)', properties: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } } },
                { type: 'out', startTime: 5000, duration: 1000, easing: 'power2.in', properties: { from: { opacity: 1 }, to: { opacity: 0 } } }
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
