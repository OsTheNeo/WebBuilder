// Import all block components
// Headers
import SimpleHeader from './headers/SimpleHeader';
import LargeHeader from './headers/LargeHeader';
import MegaHeader from './headers/MegaHeader';
import TallHeader from './headers/TallHeader';
import GiantHeader from './headers/GiantHeader';

// Hero Sections
import CompactHero from './hero/CompactHero';
import StandardHero from './hero/StandardHero';
import LargeHero from './hero/LargeHero';
import FullHero from './hero/FullHero';
import MassiveHero from './hero/MassiveHero';

// Features
import SmallFeatures from './features/SmallFeatures';
import MediumFeatures from './features/MediumFeatures';
import LargeFeatures from './features/LargeFeatures';
import XLFeatures from './features/XLFeatures';
import XXLFeatures from './features/XXLFeatures';

// Testimonials
import CompactTestimonial from './testimonials/CompactTestimonial';
import StandardTestimonial from './testimonials/StandardTestimonial';
import LargeTestimonial from './testimonials/LargeTestimonial';
import TallTestimonial from './testimonials/TallTestimonial';
import GiantTestimonial from './testimonials/GiantTestimonial';

// CTAs
import SmallCTA from './ctas/SmallCTA';
import MediumCTA from './ctas/MediumCTA';
import LargeCTA from './ctas/LargeCTA';
import XLCTA from './ctas/XLCTA';
import XXLCTA from './ctas/XXLCTA';

// Footers
import SimpleFooter from './footers/SimpleFooter';
import StandardFooter from './footers/StandardFooter';
import LargeFooter from './footers/LargeFooter';
import DetailedFooter from './footers/DetailedFooter';
import MegaFooter from './footers/MegaFooter';

// Galleries
import SmallGallery from './galleries/SmallGallery';
import MediumGallery from './galleries/MediumGallery';
import LargeGallery from './galleries/LargeGallery';
import XLGallery from './galleries/XLGallery';
import XXLGallery from './galleries/XXLGallery';

// Pricing
import CompactPricing from './pricing/CompactPricing';
import StandardPricing from './pricing/StandardPricing';
import LargePricing from './pricing/LargePricing';
import DetailedPricing from './pricing/DetailedPricing';
import FullPricing from './pricing/FullPricing';

// Team
import SmallTeam from './team/SmallTeam';
import MediumTeam from './team/MediumTeam';
import LargeTeam from './team/LargeTeam';
import XLTeam from './team/XLTeam';
import XXLTeam from './team/XXLTeam';

// Contact
import SimpleContact from './contact/SimpleContact';
import StandardContact from './contact/StandardContact';
import LargeContact from './contact/LargeContact';
import DetailedContact from './contact/DetailedContact';
import FullContact from './contact/FullContact';

// Block component registry - maps block IDs to their components
export const blockComponents = {
 // Headers
 'header-1': SimpleHeader,
 'header-2': LargeHeader,
 'header-3': MegaHeader,
 'header-4': TallHeader,
 'header-5': GiantHeader,

 // Hero Sections
 'hero-1': CompactHero,
 'hero-2': StandardHero,
 'hero-3': LargeHero,
 'hero-4': FullHero,
 'hero-5': MassiveHero,

 // Features
 'features-1': SmallFeatures,
 'features-2': MediumFeatures,
 'features-3': LargeFeatures,
 'features-4': XLFeatures,
 'features-5': XXLFeatures,

 // Testimonials
 'testimonial-1': CompactTestimonial,
 'testimonial-2': StandardTestimonial,
 'testimonial-3': LargeTestimonial,
 'testimonial-4': TallTestimonial,
 'testimonial-5': GiantTestimonial,

 // CTAs
 'cta-1': SmallCTA,
 'cta-2': MediumCTA,
 'cta-3': LargeCTA,
 'cta-4': XLCTA,
 'cta-5': XXLCTA,

 // Footers
 'footer-1': SimpleFooter,
 'footer-2': StandardFooter,
 'footer-3': LargeFooter,
 'footer-4': DetailedFooter,
 'footer-5': MegaFooter,

 // Galleries
 'gallery-1': SmallGallery,
 'gallery-2': MediumGallery,
 'gallery-3': LargeGallery,
 'gallery-4': XLGallery,
 'gallery-5': XXLGallery,

 // Pricing
 'pricing-1': CompactPricing,
 'pricing-2': StandardPricing,
 'pricing-3': LargePricing,
 'pricing-4': DetailedPricing,
 'pricing-5': FullPricing,

 // Team
 'team-1': SmallTeam,
 'team-2': MediumTeam,
 'team-3': LargeTeam,
 'team-4': XLTeam,
 'team-5': XXLTeam,

 // Contact
 'contact-1': SimpleContact,
 'contact-2': StandardContact,
 'contact-3': LargeContact,
 'contact-4': DetailedContact,
 'contact-5': FullContact,
};

// Helper function to get block component by ID
export const getBlockComponent = (blockId) => {
 return blockComponents[blockId] || null;
};

// Export all components individually as well
export {
 // Headers
 SimpleHeader,
 LargeHeader,
 MegaHeader,
 TallHeader,
 GiantHeader,

 // Hero
 CompactHero,
 StandardHero,
 LargeHero,
 FullHero,
 MassiveHero,

 // Features
 SmallFeatures,
 MediumFeatures,
 LargeFeatures,
 XLFeatures,
 XXLFeatures,

 // Testimonials
 CompactTestimonial,
 StandardTestimonial,
 LargeTestimonial,
 TallTestimonial,
 GiantTestimonial,

 // CTAs
 SmallCTA,
 MediumCTA,
 LargeCTA,
 XLCTA,
 XXLCTA,

 // Footers
 SimpleFooter,
 StandardFooter,
 LargeFooter,
 DetailedFooter,
 MegaFooter,

 // Galleries
 SmallGallery,
 MediumGallery,
 LargeGallery,
 XLGallery,
 XXLGallery,

 // Pricing
 CompactPricing,
 StandardPricing,
 LargePricing,
 DetailedPricing,
 FullPricing,

 // Team
 SmallTeam,
 MediumTeam,
 LargeTeam,
 XLTeam,
 XXLTeam,

 // Contact
 SimpleContact,
 StandardContact,
 LargeContact,
 DetailedContact,
 FullContact,
};
