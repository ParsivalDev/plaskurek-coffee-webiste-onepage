type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

const base = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function Bread({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M4 11c0-3 3-5 8-5s8 2 8 5c0 1.5-1 2.5-2 2.5V18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.5C5 13.5 4 12.5 4 11Z" />
      <path d="M9 13v5M12 13v5M15 13v5" />
    </svg>
  );
}

export function Coffee({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M5 9h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3c0 1 1 1.5 1 2.5S8 7 8 7M12 3c0 1 1 1.5 1 2.5S12 7 12 7" />
    </svg>
  );
}

export function Bowl({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M3 11h18v1a8 8 0 0 1-16 0v-1Z" />
      <path d="M8 7c0-1.5 1-2.5 2-2.5M12 7c0-1.5 1-2.5 2-2.5" />
      <path d="M2 19h20" />
    </svg>
  );
}

export function Clock({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MapPin({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Mail({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowRight({ className, size = 20, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDown({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Sparkle({ className, size = 16, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  );
}

export function Wheat({ className, size = 20, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 22V8" />
      <path d="M12 8c-2 0-3-1-3-3 2 0 3 1 3 3Z" />
      <path d="M12 8c2 0 3-1 3-3-2 0-3 1-3 3Z" />
      <path d="M12 13c-2 0-3-1-3-3 2 0 3 1 3 3Z" />
      <path d="M12 13c2 0 3-1 3-3-2 0-3 1-3 3Z" />
      <path d="M12 18c-2 0-3-1-3-3 2 0 3 1 3 3Z" />
      <path d="M12 18c2 0 3-1 3-3-2 0-3 1-3 3Z" />
    </svg>
  );
}

export function Sun({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </svg>
  );
}

export function SunLow({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="14" r="4" />
      <path d="M12 4v3M3 14h2M19 14h2M5.6 7.6 7 9M17 9l1.4-1.4" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function Moon({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function Users({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 19v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Wifi({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

export function Plug({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 22v-5" />
      <path d="M9 8V2M15 8V2" />
      <path d="M5 10h14v3a5 5 0 0 1-10 0v-3Z" transform="translate(-1 0)" />
    </svg>
  );
}

export function Check({ className, size = 18, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function Facebook({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}

export function Instagram({ className, size = 20, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
