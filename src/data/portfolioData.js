import { createProjectPlaceholder } from "../utils/placeholders";
// import img1 from "../img/1.png";
// import img2 from "../img/2.png";
// import img3 from "../img/3.png";
// import img4 from "../img/4.png";
// import img5 from "../img/5.png";
// import img6 from "../img/6.png";
// import img7 from "../img/7.png";
// import img8 from "../img/8.png";
// import img9 from "../img/9.png";
// import img10 from "../img/10.png";
// import img11 from "../img/11.png";
// import img12 from "../img/12.png";
// import img13 from "../img/13.png";
// import img14 from "../img/14.png";
// import img15 from "../img/15.png";
// import img16 from "../img/16.png";
// import img17 from "../img/17.png";
// import img18 from "../img/18.png";
// import img19 from "../img/19.png";
// import img20 from "../img/20.png";
// import img21 from "../img/21.png";
// import img22 from "../img/22.png";
// import img23 from "../img/23.png";
// import img24 from "../img/24.png";
// import img25 from "../img/25.png";
// import img26 from "../img/26.png";
// import img27 from "../img/27.png";
// import img28 from "../img/28.png";

const img1 = new URL("../img/1.png", import.meta.url).href;
const img2 = new URL("../img/2.png", import.meta.url).href;
const img3 = new URL("../img/3.png", import.meta.url).href;
const img4 = new URL("../img/4.png", import.meta.url).href;
const img5 = new URL("../img/5.png", import.meta.url).href;
const img6 = new URL("../img/6.png", import.meta.url).href;
const img7 = new URL("../img/7.png", import.meta.url).href;
const img8 = new URL("../img/8.png", import.meta.url).href;
const img9 = new URL("../img/9.png", import.meta.url).href;
const img10 = new URL("../img/10.png", import.meta.url).href;
const img11 = new URL("../img/11.png", import.meta.url).href;
const img12 = new URL("../img/12.png", import.meta.url).href;
const img13 = new URL("../img/13.png", import.meta.url).href;
const img14 = new URL("../img/14.png", import.meta.url).href;
const img15 = new URL("../img/15.png", import.meta.url).href;
const img16 = new URL("../img/16.png", import.meta.url).href;
const img17 = new URL("../img/17.png", import.meta.url).href;
const img18 = new URL("../img/18.png", import.meta.url).href;
const img19 = new URL("../img/19.png", import.meta.url).href;
const img20 = new URL("../img/20.png", import.meta.url).href;
const img21 = new URL("../img/21.png", import.meta.url).href;
const img22 = new URL("../img/22.png", import.meta.url).href;
const img23 = new URL("../img/23.png", import.meta.url).href;
const img24 = new URL("../img/24.png", import.meta.url).href;
const img25 = new URL("../img/25.png", import.meta.url).href;
const img26 = new URL("../img/26.png", import.meta.url).href;
const img27 = new URL("../img/27.png", import.meta.url).href;
const img28 = new URL("../img/28.png", import.meta.url).href;

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
  const gridImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
  const bannerImages = [img12, img13, img14, img15, img16];
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
  const modelImages = [img17, img18, img19, img20, img21];
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
  const bannerImages = [img22, img23, img24, img25, img26, img27, img28];
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
