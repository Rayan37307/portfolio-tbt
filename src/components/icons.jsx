// Line icon set — replaces emoji throughout the site so the UI reads as
// product design rather than a template. All icons share a 24x24 grid,
// 1.5 stroke, currentColor.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Svg = ({ children, className = "", size }) => (
  <svg
    {...base}
    width={size || base.width}
    height={size || base.height}
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ---------- commerce / business ---------- */

export const IconCart = (p) => (
  <Svg {...p}>
    <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20.5 8H6" />
    <circle cx="10" cy="20" r="1.2" />
    <circle cx="18" cy="20" r="1.2" />
  </Svg>
);

export const IconBook = (p) => (
  <Svg {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5" />
    <path d="M8 7.5h7" />
  </Svg>
);

export const IconBolt = (p) => (
  <Svg {...p}>
    <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
  </Svg>
);

export const IconSpark = (p) => (
  <Svg {...p}>
    <path d="M12 3v3.5M12 17.5V21M4.5 12H8M16 12h3.5" />
    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
    <path d="M6.7 6.7l2 2M15.3 15.3l2 2M17.3 6.7l-2 2M8.7 15.3l-2 2" />
  </Svg>
);

export const IconChart = (p) => (
  <Svg {...p}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 16V11M12.5 16V7.5M17 16v-3" />
  </Svg>
);

export const IconWrench = (p) => (
  <Svg {...p}>
    <path d="M14.5 6.5a4 4 0 1 0 5 5L21 10l-1-1 1.5-1.5-4-4L16 5l1 1z" />
    <path d="M13 8 4.5 16.5a2.1 2.1 0 0 0 3 3L16 11" />
  </Svg>
);

export const IconUsers = (p) => (
  <Svg {...p}>
    <circle cx="9.5" cy="8" r="3.2" />
    <path d="M3.5 20a6 6 0 0 1 12 0" />
    <path d="M16.5 5.2a3.2 3.2 0 0 1 0 6.1" />
    <path d="M18 14.4a6 6 0 0 1 3 5.1" />
  </Svg>
);

export const IconPortal = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M8 13.5h5M8 16.5h8" />
  </Svg>
);

export const IconRocket = (p) => (
  <Svg {...p}>
    <path d="M13.5 4.5c3.2-1.3 6 .4 6 .4s1.7 2.8.4 6c-1 2.5-3.6 5-6.4 6.4l-4.8-4.8C10.1 9.7 12.6 7 15.1 6" />
    <path d="M9.6 17.5 6.5 20.5M7 15 4 18" />
    <circle cx="15.5" cy="8.5" r="1.4" />
  </Svg>
);

export const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4 4" />
  </Svg>
);

export const IconMap = (p) => (
  <Svg {...p}>
    <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5z" />
    <path d="M9 4v13M15 6.5v13" />
  </Svg>
);

export const IconGear = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <path d="M4.5 12.5 9 17l10.5-10.5" />
  </Svg>
);

export const IconTrendDown = (p) => (
  <Svg {...p}>
    <path d="M3 6l7 7 4-4 7 7" />
    <path d="M21 11v5h-5" />
  </Svg>
);

export const IconCode = (p) => (
  <Svg {...p}>
    <path d="M8.5 8 4 12l4.5 4M15.5 8 20 12l-4.5 4" />
    <path d="M13.5 5 10.5 19" />
  </Svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </Svg>
);

export const IconLayers = (p) => (
  <Svg {...p}>
    <path d="M12 3 3 7.5 12 12l9-4.5z" />
    <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" />
  </Svg>
);

/* ---------- chrome / utility ---------- */

export const IconArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4 12h15M13.5 6.5 19.5 12l-6 5.5" />
  </Svg>
);

export const IconArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
  </Svg>
);

export const IconClose = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.8 7 8.2 6 8.2-6" />
  </Svg>
);

export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
);

export const IconDownload = (p) => (
  <Svg {...p}>
    <path d="M12 3.5v11M7.5 10 12 14.5 16.5 10" />
    <path d="M4.5 20h15" />
  </Svg>
);

export const IconCopy = (p) => (
  <Svg {...p}>
    <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
    <path d="M15.5 5.5h-9a2 2 0 0 0-2 2v9" />
  </Svg>
);
