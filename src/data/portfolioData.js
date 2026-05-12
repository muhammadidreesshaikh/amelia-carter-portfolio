import { createProjectPlaceholder } from "../utils/placeholders";

const accentPairs = [
  ["#ff7aa8", "#60e6d9"],
  ["#7c8cff", "#ffa6c4"],
  ["#ffb36b", "#70d6ff"],
];

export const heroCopy = {
  eyebrow: "Graphic Designer & Animator",
  headline: "Amelia Carter.",
  description:
    "I’m a freelance graphic designer and animator with 7+ years of professional industry experience. I specialize in creating modern, impactful, and visually engaging designs for brands and businesses. From unique logo designs to high-quality animations, I help brands build a strong visual identity. My work focuses on creativity, storytelling, and delivering visuals that connect with audiences. My goal is to create professional and creative designs that help brands stand out and leave a lasting impression.",
};

export const counters = [
  { value: "7+", label: "Years Experience" },
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Happy Clients" },
];

export const skills = [
  { name: "Graphic Design", level: 98 },
  { name: "Logo Design", level: 96 },
  { name: "Animation", level: 94 },
  { name: "Motion Graphics", level: 92 },
  { name: "Thumbnail Design", level: 95 },
  { name: "Banner Design", level: 93 },
  { name: "Background Design", level: 91 },
  { name: "Branding", level: 97 },
  { name: "Adobe Photoshop", level: 98 },
  { name: "Adobe Illustrator", level: 97 },
  { name: "After Effects", level: 93 },
];

function buildCategory(
  title,
  slug,
  description,
  accent,
  glow,
  action,
  subtitle,
) {
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

function buildLogosBlannersCategory() {
  const gridImages = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png", "/img/5.png", "/img/6.png", "/img/7.png", "/img/8.png", "/img/9.png", "/img/10.png", "/img/11.png"];
  const bannerImages = ["/img/12.png", "/img/13.png", "/img/14.png", "/img/15.png", "/img/16.png"];
  const accent = accentPairs[0][0];
  const glow = accentPairs[0][1];

  const gridProjects = gridImages.map((image, index) => ({
    title: `Click To View ${index + 1}`,
    category: "Identity",
    image,
    accent,
    subtitle: "Brand Direction",
    layout: "grid",
  }));

  const bannerProjects = bannerImages.map((image, index) => ({
    title: `Click To View ${index + 12}`,
    category: "Identity",
    image,
    accent,
    subtitle: "Banner Direction",
    layout: "banner",
  }));

  const projects = [...gridProjects, ...bannerProjects];

  return {
    slug: "logos-banners",
    title: "Logos/Banners",
    subtitle: "Identity",
    description: "Precision-crafted logo suites, visual identities, and banner designs that feel premium across every touchpoint.",
    accent,
    glow,
    projects,
  };
}

function buildModelsCategory() {
  const modelImages = ["/img/17.png", "/img/18.png", "/img/19.png", "/img/20.png", "/img/21.png"];
  const accent = accentPairs[1][0];
  const glow = accentPairs[1][1];

  const projects = modelImages.map((image, index) => ({
    title: `Click To View ${index + 17}`,
    category: "Campaign",
    image,
    accent,
    subtitle: "Visual Story",
    layout: "grid",
  }));

  return {
    slug: "models",
    title: "Models",
    subtitle: "Campaign",
    description: "Showcase visuals for fashion, product, and promo campaigns designed to look cinematic and modern.",
    accent,
    glow,
    projects,
  };
}

function buildBackgroundsThumbnailsCategory() {
  const bannerImages = ["/img/22.png", "/img/23.png", "/img/24.png", "/img/25.png", "/img/26.png", "/img/27.png", "/img/28.png"];
  const accent = accentPairs[2][0];
  const glow = accentPairs[2][1];

  const projects = bannerImages.map((image, index) => ({
    title: `Click To View ${index + 22}`,
    category: "Thumbnail",
    image,
    accent,
    subtitle: "Click Energy",
    layout: "banner",
  }));

  return {
    slug: "backgrounds-thumbnails",
    title: "Backgrounds and Thumbnails",
    subtitle: "Thumbnail",
    description: "High-performance thumbnails and immersive backgrounds optimized for strong first impressions and engagement.",
    accent,
    glow,
    projects,
  };
}

export const projectHighlights = [
  {
    title: "Logos/Banners",
    description:
      "Brand systems, logo identities, and banner concepts crafted with polished motion-ready visuals.",
    to: "/logos-banners",
    accent: "#ff7aa8",
    glow: "#60e6d9",
    image: createProjectPlaceholder({
      title: "Logos & Banners",
      subtitle: "Identity-driven visuals with strong brand recall",
      accent: "#ff7aa8",
      glow: "#60e6d9",
    }),
  },
  {
    title: "Models",
    description:
      "Creative model visuals, promo edits, and premium motion compositions with cinematic depth.",
    to: "/models",
    accent: "#7c8cff",
    glow: "#ffb36b",
    image: createProjectPlaceholder({
      title: "Models",
      subtitle: "Editorial motion, promo visuals, and luxury framing",
      accent: "#7c8cff",
      glow: "#ffb36b",
    }),
  },
  {
    title: "Backgrounds and Thumbnails",
    description:
      "Attention-grabbing covers, rich backdrops, and thumbnails built to stand out instantly.",
    to: "/backgrounds-thumbnails",
    accent: "#ffb36b",
    glow: "#70d6ff",
    image: createProjectPlaceholder({
      title: "Backgrounds & Thumbnails",
      subtitle: "High-click visuals with depth and rhythm",
      accent: "#ffb36b",
      glow: "#70d6ff",
    }),
  },
];

export const categoryProjects = {
  "logos-banners": buildLogosBlannersCategory(),
  models: buildModelsCategory(),
  "backgrounds-thumbnails": buildBackgroundsThumbnailsCategory(),
};

export const testimonials = [
  {
    name: "Sophie Martin",
    role: "Brand Strategist",
    quote:
      "Amelia translates vague ideas into stunning brand visuals with a level of polish that makes every campaign feel elevated.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Nadia Khan",
    role: "Founder, Glow Studio",
    quote:
      "The project delivery was fast, the communication was smooth, and the final visuals looked premium from every angle.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Nadia Khan",
    role: "Founder, Glow Studio",
    quote:
      "The project delivery was fast, the communication was smooth, and the final visuals looked premium from every angle.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Sophie Martin",
    role: "Brand Strategist",
    quote:
      "Amelia translates vague ideas into stunning brand visuals with a level of polish that makes every campaign feel elevated.",
  },
  {
    name: "Daniel Reed",
    role: "Creative Director",
    quote:
      "Her motion work and logo systems are incredibly refined. The attention to composition and timing is outstanding.",
  },
  {
    name: "Nadia Khan",
    role: "Founder, Glow Studio",
    quote:
      "The project delivery was fast, the communication was smooth, and the final visuals looked premium from every angle.",
  },
];

export const socialLinks = [
  { label: "Email", url: "mailto:hello@ameliacarter.design" },
  { label: "Instagram", url: "https://instagram.com/ameliacarterart" },
  { label: "WhatsApp", url: "https://wa.me/15550142211" },
  { label: "Discord", url: "https://discord.com/users/ameliacarter" },
  { label: "Twitter", url: "https://x.com/ameliacarterart" },
];
