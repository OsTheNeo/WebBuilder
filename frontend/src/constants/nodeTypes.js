import { IconShoppingCart, IconRocket, IconFileText, IconChartBar, IconBuildingStore, IconBox, IconFilter, IconShoppingBag, IconUser, IconLogin, IconUserPlus, IconSettings } from '@tabler/icons-react';

export const NODE_TYPES = {
  PROJECT_CONFIG: 'project_config',
  LANDING: 'landing',
  PAGE: 'page',
  ECOMMERCE: 'ecommerce',
  SALES_FUNNEL: 'sales_funnel',
  AUTH: 'auth'
};

export const nodeTemplates = [
  {
    id: 'project_config',
    type: NODE_TYPES.PROJECT_CONFIG,
    name: 'Project Settings',
    icon: IconSettings,
    description: 'Global project configuration',
    color: '#8B5CF6',
    defaultChildren: [],
    isSpecial: true,
    canDelete: false
  },
  {
    id: 'landing',
    type: NODE_TYPES.LANDING,
    name: 'Landing Page',
    icon: IconRocket,
    description: 'Single page with hero, features, and CTA',
    color: '#3B82F6',
    defaultChildren: []
  },
  {
    id: 'page',
    type: NODE_TYPES.PAGE,
    name: 'Standard Page',
    icon: IconFileText,
    description: 'Regular content page',
    color: '#6B7280',
    defaultChildren: []
  },
  {
    id: 'ecommerce',
    type: NODE_TYPES.ECOMMERCE,
    name: 'E-commerce',
    icon: IconShoppingCart,
    description: 'Online store with products and cart',
    color: '#10B981',
    defaultChildren: [
      {
        name: 'Products',
        path: '/products',
        icon: IconBuildingStore,
        enabled: true
      },
      {
        name: 'Product Detail',
        path: '/product/:id',
        icon: IconBox,
        enabled: true
      },
      {
        name: 'Categories',
        path: '/categories',
        icon: IconFilter,
        enabled: true
      },
      {
        name: 'Cart',
        path: '/cart',
        icon: IconShoppingBag,
        enabled: true
      },
      {
        name: 'Checkout',
        path: '/checkout',
        icon: IconShoppingCart,
        enabled: true
      }
    ]
  },
  {
    id: 'sales_funnel',
    type: NODE_TYPES.SALES_FUNNEL,
    name: 'Sales Funnel',
    icon: IconChartBar,
    description: 'Multi-step conversion funnel',
    color: '#F59E0B',
    defaultChildren: [
      {
        name: 'Lead Capture',
        path: '/lead',
        enabled: true
      },
      {
        name: 'Offer Page',
        path: '/offer',
        enabled: true
      },
      {
        name: 'Upsell',
        path: '/upsell',
        enabled: true
      },
      {
        name: 'Thank You',
        path: '/thanks',
        enabled: true
      }
    ]
  },
  {
    id: 'auth',
    type: NODE_TYPES.AUTH,
    name: 'Authentication',
    icon: IconUser,
    description: 'User login and registration',
    color: '#8B5CF6',
    defaultChildren: [
      {
        name: 'Login',
        path: '/login',
        icon: IconLogin,
        enabled: true
      },
      {
        name: 'Register',
        path: '/register',
        icon: IconUserPlus,
        enabled: true
      },
      {
        name: 'Profile',
        path: '/profile',
        icon: IconUser,
        enabled: true
      }
    ]
  }
];

export const getTemplateById = (id) => {
  return nodeTemplates.find(template => template.id === id);
};

export const getTemplateByType = (type) => {
  return nodeTemplates.find(template => template.type === type);
};
