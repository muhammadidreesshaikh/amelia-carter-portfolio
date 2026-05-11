function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createProjectPlaceholder({ title, subtitle, accent = '#ff7aa8', glow = '#60e6d9' }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#09131f" />
          <stop offset="50%" stop-color="${accent}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0.65" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="20" />
          <feOffset dx="0" dy="18" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" rx="56" />
      <circle cx="160" cy="160" r="120" fill="#ffffff" fill-opacity="0.08" />
      <circle cx="1020" cy="160" r="180" fill="#ffffff" fill-opacity="0.07" />
      <circle cx="940" cy="700" r="220" fill="#000000" fill-opacity="0.16" />
      <path d="M-60 620 C 180 460, 360 860, 640 620 S 1040 440, 1260 640" fill="none" stroke="#ffffff" stroke-opacity="0.16" stroke-width="8" />
      <g filter="url(#shadow)">
        <rect x="110" y="140" width="980" height="560" rx="42" fill="#0b1421" fill-opacity="0.74" stroke="#ffffff" stroke-opacity="0.12" />
        <text x="170" y="265" fill="#f8fbff" font-family="Manrope, Arial, sans-serif" font-size="68" font-weight="800">${title}</text>
        <text x="170" y="335" fill="#dfe7f5" font-family="Manrope, Arial, sans-serif" font-size="32" font-weight="500">${subtitle}</text>
        <rect x="170" y="420" width="340" height="16" rx="8" fill="#ffffff" fill-opacity="0.22" />
        <rect x="170" y="460" width="540" height="16" rx="8" fill="#ffffff" fill-opacity="0.16" />
        <rect x="170" y="500" width="420" height="16" rx="8" fill="#ffffff" fill-opacity="0.12" />
        <rect x="170" y="580" width="210" height="84" rx="28" fill="#ffffff" fill-opacity="0.14" />
        <rect x="400" y="580" width="210" height="84" rx="28" fill="#ffffff" fill-opacity="0.1" />
        <rect x="630" y="580" width="210" height="84" rx="28" fill="#ffffff" fill-opacity="0.08" />
      </g>
    </svg>
  `;

  return svgToDataUri(svg);
}