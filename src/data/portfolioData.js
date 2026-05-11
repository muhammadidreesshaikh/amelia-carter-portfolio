import { createProjectPlaceholder } from '../utils/placeholders';

const accentPairs = [
  ['#ff7aa8', '#60e6d9'],
  ['#7c8cff', '#ffa6c4'],
  ['#ffb36b', '#70d6ff'],
];

export const heroCopy = {
  eyebrow: 'Graphic Designer & Animator',
  headline: 'Elegant visuals with motion that makes brands feel unforgettable.',
  description:
    'I’m a freelance graphic designer and animator with 7+ years of professional industry experience. I specialize in creating modern, impactful, and visually engaging designs for brands and businesses. From unique logo designs to high-quality animations, I help brands build a strong visual identity.',
};

export const counters = [
  { value: '7+', label: 'Years Experience' },
  { value: '100+', label: 'Projects' },
  { value: '50+', label: 'Happy Clients' },
];

export const skills = [
  { name: 'Graphic Design', level: 98 },
  { name: 'Logo Design', level: 96 },
  { name: 'Animation', level: 94 },
  { name: 'Motion Graphics', level: 92 },
  { name: 'Thumbnail Design', level: 95 },
  { name: 'Banner Design', level: 93 },
  { name: 'Background Design', level: 91 },
  { name: 'Branding', level: 97 },
  { name: 'Adobe Photoshop', level: 98 },
  { name: 'Adobe Illustrator', level: 97 },
  { name: 'After Effects', level: 93 },
];

function buildCategory(title, slug, description, accent, glow, action, subtitle) {
  const projects = Array.from({ length: 6 }, (_, index) => {
    const itemNumber = index + 1;
    return {
      title: `${title} Project ${itemNumber}`,
      category: subtitle,
      image: createProjectPlaceholder({
        title: `${title} ${itemNumber}`,
        subtitle: `${subtitle} concept ${itemNumber}`,
        accent,
        glow,
      }),
      accent,
      subtitle: action,
    };
  });

  return {
    slug,
    title,
    subtitle,
    description,
    accent,
    glow,
    projects,
  };
}

export const projectHighlights = [
  {
    title: 'Logos/Banners',
    description: 'Brand systems, logo identities, and banner concepts crafted with polished motion-ready visuals.',
    to: '/logos-banners',
    accent: '#ff7aa8',
    glow: '#60e6d9',
    image: createProjectPlaceholder({
      title: 'Logos & Banners',
      subtitle: 'Identity-driven visuals with strong brand recall',
      accent: '#ff7aa8',
      glow: '#60e6d9',
    }),
  },
  {
    title: 'Models',
    description: 'Creative model visuals, promo edits, and premium motion compositions with cinematic depth.',
    to: '/models',
    accent: '#7c8cff',
    glow: '#ffb36b',
    image: createProjectPlaceholder({
      title: 'Models',
      subtitle: 'Editorial motion, promo visuals, and luxury framing',
      accent: '#7c8cff',
      glow: '#ffb36b',
    }),
  },
  {
    title: 'Backgrounds and Thumbnails',
    description: 'Attention-grabbing covers, rich backdrops, and thumbnails built to stand out instantly.',
    to: '/backgrounds-thumbnails',
    accent: '#ffb36b',
    glow: '#70d6ff',
    image: createProjectPlaceholder({
      title: 'Backgrounds & Thumbnails',
      subtitle: 'High-click visuals with depth and rhythm',
      accent: '#ffb36b',
      glow: '#70d6ff',
    }),
  },
];

export const categoryProjects = {
  'logos-banners': buildCategory(
    'Logos/Banners',
    'logos-banners',
    'Precision-crafted logo suites, visual identities, and banner designs that feel premium across every touchpoint.',
    accentPairs[0][0],
    accentPairs[0][1],
    'Brand Direction',
    'Identity',
  ),
  models: buildCategory(
    'Models',
    'models',
    'Showcase visuals for fashion, product, and promo campaigns designed to look cinematic and modern.',
    accentPairs[1][0],
    accentPairs[1][1],
    'Visual Story',
    'Campaign',
  ),
  'backgrounds-thumbnails': buildCategory(
    'Backgrounds and Thumbnails',
    'backgrounds-thumbnails',
    'High-performance thumbnails and immersive backgrounds optimized for strong first impressions and engagement.',
    accentPairs[2][0],
    accentPairs[2][1],
    'Click Energy',
    'Thumbnail',
  ),
};

export const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Brand Strategist',
    quote:
      'Amelia translates vague ideas into stunning brand visuals with a level of polish that makes every campaign feel elevated.',
  },
  {
    name: 'Daniel Reed',
    role: 'Creative Director',
    quote:
      'Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.',
  },
  {
    name: 'Nadia Khan',
    role: 'Founder, Glow Studio',
    quote:
      'The project delivery was fast, the communication was smooth, and the final visuals looked premium from every angle.',
  },
];

export const socialLinks = [
  { label: 'Email', value: 'hello@ameliacarter.design' },
  { label: 'Instagram', value: '@ameliacarterart' },
  { label: 'Behance', value: 'behance.net/ameliacarter' },
  { label: 'WhatsApp', value: '+1 (555) 014-2211' },
];