import { Category } from '@/data/types';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PlaceholderVariant =
  | 'woodGrain'
  | 'steam'
  | 'stones'
  | 'gridLines'
  | 'concentricRings'
  | 'diagonalHatch'
  | 'waveField'
  | 'mosaic';

export interface PlaceholderImageProps {
  /** Visual style variant */
  variant?: PlaceholderVariant;
  /** CSS aspect-ratio value, e.g. "16/10", "4/3", "1/1" */
  aspectRatio?: string;
  /** Additional Tailwind / CSS classes on the wrapper */
  className?: string;
  /** Deterministic seed — the same value always produces the same visual parameters */
  seed?: string;
}

// ---------------------------------------------------------------------------
// Deterministic hash — turns any string into a stable integer
// ---------------------------------------------------------------------------

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Derive a float in [0, 1) from a hash + offset to get varied but stable values. */
function seededFloat(hash: number, offset: number): number {
  return ((hash * 2654435761 + offset * 340573321) & 0x7fffffff) / 0x7fffffff;
}

// ---------------------------------------------------------------------------
// Palette — pulled from the site's Tailwind theme
// ---------------------------------------------------------------------------

const PALETTE = {
  cream: '#FAF8F5',
  ivory: '#F0EDE8',
  green: '#4A6741',
  greenLight: '#5A7A51',
  brass: '#B8935A',
  copper: '#C4956A',
  charcoal: '#2C2C2C',
  stone: '#D4D0CA',
  stoneDark: '#8A8580',
  warmGray: '#6B6560',
  // dark-mode surfaces
  darkBg: '#0F0F12',
  darkSurface: '#1A1A1F',
  darkBorder: '#2A2A30',
  darkText: '#E8E6E3',
  darkMuted: '#9A9590',
};

/** Light-mode colour groups — each variant picks one deterministically. */
const LIGHT_COMBOS: { bg: string; fg: string; accent: string }[] = [
  { bg: PALETTE.ivory, fg: PALETTE.green, accent: PALETTE.brass },
  { bg: PALETTE.cream, fg: PALETTE.brass, accent: PALETTE.stone },
  { bg: PALETTE.ivory, fg: PALETTE.stoneDark, accent: PALETTE.green },
  { bg: PALETTE.cream, fg: PALETTE.copper, accent: PALETTE.greenLight },
  { bg: PALETTE.stone, fg: PALETTE.charcoal, accent: PALETTE.brass },
  { bg: PALETTE.ivory, fg: PALETTE.warmGray, accent: PALETTE.copper },
];

const DARK_COMBOS: { bg: string; fg: string; accent: string }[] = [
  { bg: PALETTE.darkSurface, fg: PALETTE.green, accent: PALETTE.brass },
  { bg: PALETTE.darkBg, fg: PALETTE.brass, accent: PALETTE.darkBorder },
  { bg: PALETTE.darkSurface, fg: PALETTE.darkMuted, accent: PALETTE.green },
  { bg: PALETTE.darkBg, fg: PALETTE.copper, accent: PALETTE.greenLight },
  { bg: PALETTE.darkSurface, fg: PALETTE.darkMuted, accent: PALETTE.brass },
  { bg: PALETTE.darkBg, fg: PALETTE.warmGray, accent: PALETTE.copper },
];

// ---------------------------------------------------------------------------
// Variant SVG renderers — each returns an inline <svg> element
// ---------------------------------------------------------------------------

interface VariantProps {
  fg: string;
  accent: string;
  hash: number;
}

/** Horizontal wavy lines evoking wood grain / sauna panelling */
function WoodGrainSVG({ fg, accent, hash }: VariantProps) {
  const lineCount = 10 + (hash % 6);
  const drift = 3 + seededFloat(hash, 1) * 5;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {Array.from({ length: lineCount }, (_, i) => {
        const y = (300 / (lineCount + 1)) * (i + 1);
        const d1 = drift * (seededFloat(hash, i * 3 + 10) - 0.5);
        const d2 = drift * (seededFloat(hash, i * 3 + 11) - 0.5);
        const d3 = drift * (seededFloat(hash, i * 3 + 12) - 0.5);
        const color = i % 3 === 0 ? accent : fg;
        const opacity = 0.1 + seededFloat(hash, i + 50) * 0.15;
        return (
          <path
            key={i}
            d={`M0 ${y} C100 ${y + d1}, 200 ${y + d2}, 300 ${y + d3} S400 ${y + d1 * 0.5}, 400 ${y}`}
            fill="none"
            stroke={color}
            strokeWidth={1 + seededFloat(hash, i + 70) * 1.2}
            opacity={opacity}
          />
        );
      })}
      {/* Subtle knot accents */}
      {Array.from({ length: 2 + (hash % 2) }, (_, i) => {
        const cx = 80 + seededFloat(hash, i + 200) * 240;
        const cy = 60 + seededFloat(hash, i + 201) * 180;
        return (
          <ellipse
            key={`knot-${i}`}
            cx={cx}
            cy={cy}
            rx={6 + seededFloat(hash, i + 202) * 8}
            ry={3 + seededFloat(hash, i + 203) * 4}
            fill="none"
            stroke={accent}
            strokeWidth={0.8}
            opacity={0.12}
          />
        );
      })}
    </svg>
  );
}

/** Rising curved wisps like steam / loyly */
function SteamSVG({ fg, accent, hash }: VariantProps) {
  const wispCount = 5 + (hash % 4);
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {/* Soft radial glow at bottom */}
      <defs>
        <radialGradient id={`steam-glow-${hash}`} cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity={0.08} />
          <stop offset="100%" stopColor={accent} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#steam-glow-${hash})`} />
      {Array.from({ length: wispCount }, (_, i) => {
        const startX = 40 + seededFloat(hash, i * 4 + 20) * 320;
        const sway = 20 + seededFloat(hash, i * 4 + 21) * 40;
        const height = 120 + seededFloat(hash, i * 4 + 22) * 150;
        const startY = 300;
        const endY = startY - height;
        const cp1x = startX + sway * (seededFloat(hash, i * 4 + 23) > 0.5 ? 1 : -1);
        const cp1y = startY - height * 0.4;
        const cp2x = startX - sway * 0.6 * (seededFloat(hash, i * 4 + 24) > 0.5 ? 1 : -1);
        const cp2y = startY - height * 0.75;
        const color = i % 2 === 0 ? fg : accent;
        const opacity = 0.08 + seededFloat(hash, i + 60) * 0.12;
        return (
          <path
            key={i}
            d={`M${startX} ${startY} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${startX + sway * 0.3} ${endY}`}
            fill="none"
            stroke={color}
            strokeWidth={1.5 + seededFloat(hash, i + 80) * 2}
            strokeLinecap="round"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}

/** Scattered smooth pebbles / stacked sauna stones */
function StonesSVG({ fg, accent, hash }: VariantProps) {
  const stoneCount = 7 + (hash % 6);
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {Array.from({ length: stoneCount }, (_, i) => {
        const cx = 30 + seededFloat(hash, i * 5 + 30) * 340;
        const cy = 30 + seededFloat(hash, i * 5 + 31) * 240;
        const rx = 18 + seededFloat(hash, i * 5 + 32) * 30;
        const ry = 14 + seededFloat(hash, i * 5 + 33) * 22;
        const rotation = seededFloat(hash, i * 5 + 34) * 60 - 30;
        const color = i % 3 === 0 ? accent : fg;
        const opacity = 0.06 + seededFloat(hash, i + 90) * 0.1;
        const strokeOpacity = opacity + 0.04;
        return (
          <g key={i} transform={`rotate(${rotation} ${cx} ${cy})`}>
            <ellipse
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill={color}
              opacity={opacity}
            />
            <ellipse
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill="none"
              stroke={color}
              strokeWidth={0.8}
              opacity={strokeOpacity}
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Clean architectural grid — thin intersecting lines */
function GridLinesSVG({ fg, accent, hash }: VariantProps) {
  const cols = 6 + (hash % 4);
  const rows = 4 + (hash % 3);
  const jitter = 2 + seededFloat(hash, 0) * 3;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {/* Vertical lines */}
      {Array.from({ length: cols }, (_, i) => {
        const x = (400 / (cols + 1)) * (i + 1) + (seededFloat(hash, i + 40) - 0.5) * jitter;
        const opacity = 0.08 + seededFloat(hash, i + 100) * 0.08;
        return (
          <line
            key={`v-${i}`}
            x1={x}
            y1={0}
            x2={x}
            y2={300}
            stroke={fg}
            strokeWidth={0.6}
            opacity={opacity}
          />
        );
      })}
      {/* Horizontal lines */}
      {Array.from({ length: rows }, (_, i) => {
        const y = (300 / (rows + 1)) * (i + 1) + (seededFloat(hash, i + 50) - 0.5) * jitter;
        const opacity = 0.08 + seededFloat(hash, i + 110) * 0.08;
        return (
          <line
            key={`h-${i}`}
            x1={0}
            y1={y}
            x2={400}
            y2={y}
            stroke={fg}
            strokeWidth={0.6}
            opacity={opacity}
          />
        );
      })}
      {/* Accent dots at some intersections */}
      {Array.from({ length: cols }, (_, ci) =>
        Array.from({ length: rows }, (_, ri) => {
          if (seededFloat(hash, ci * 10 + ri + 300) > 0.55) return null;
          const x = (400 / (cols + 1)) * (ci + 1);
          const y = (300 / (rows + 1)) * (ri + 1);
          return (
            <circle
              key={`d-${ci}-${ri}`}
              cx={x}
              cy={y}
              r={2 + seededFloat(hash, ci + ri + 400) * 2}
              fill={accent}
              opacity={0.15 + seededFloat(hash, ci + ri + 500) * 0.1}
            />
          );
        }),
      )}
    </svg>
  );
}

/** Concentric rings radiating from a slightly off-centre point */
function ConcentricRingsSVG({ fg, accent, hash }: VariantProps) {
  const ringCount = 6 + (hash % 5);
  const cx = 160 + seededFloat(hash, 1) * 80;
  const cy = 120 + seededFloat(hash, 2) * 60;
  const maxR = 160 + seededFloat(hash, 3) * 60;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {Array.from({ length: ringCount }, (_, i) => {
        const r = (maxR / ringCount) * (i + 1);
        const color = i % 2 === 0 ? fg : accent;
        const opacity = 0.06 + (1 - i / ringCount) * 0.1;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={0.8 + seededFloat(hash, i + 120) * 0.8}
            opacity={opacity}
          />
        );
      })}
      {/* Small centre dot */}
      <circle cx={cx} cy={cy} r={3} fill={accent} opacity={0.2} />
    </svg>
  );
}

/** Diagonal hatching — fine parallel lines at an angle */
function DiagonalHatchSVG({ fg, accent, hash }: VariantProps) {
  const lineCount = 18 + (hash % 10);
  const angle = 30 + seededFloat(hash, 0) * 30; // 30-60 degrees
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`hatch-clip-${hash}`}>
          <rect width="400" height="300" />
        </clipPath>
      </defs>
      <g clipPath={`url(#hatch-clip-${hash})`}>
        {Array.from({ length: lineCount }, (_, i) => {
          const offset = ((700 / (lineCount + 1)) * (i + 1)) - 150;
          const color = i % 4 === 0 ? accent : fg;
          const opacity = 0.06 + seededFloat(hash, i + 130) * 0.1;
          const rad = (angle * Math.PI) / 180;
          const dx = Math.cos(rad);
          const dy = Math.sin(rad);
          const perpX = -dy;
          const perpY = dx;
          const cx = 200 + perpX * offset;
          const cy = 150 + perpY * offset;
          return (
            <line
              key={i}
              x1={cx - dx * 400}
              y1={cy - dy * 400}
              x2={cx + dx * 400}
              y2={cy + dy * 400}
              stroke={color}
              strokeWidth={0.7 + seededFloat(hash, i + 140) * 0.6}
              opacity={opacity}
            />
          );
        })}
      </g>
      {/* Subtle accent rectangle */}
      {(() => {
        const rx = 100 + seededFloat(hash, 600) * 200;
        const ry = 60 + seededFloat(hash, 601) * 140;
        const rw = 40 + seededFloat(hash, 602) * 60;
        const rh = 30 + seededFloat(hash, 603) * 50;
        return (
          <rect
            x={rx}
            y={ry}
            width={rw}
            height={rh}
            fill="none"
            stroke={accent}
            strokeWidth={0.8}
            opacity={0.12}
          />
        );
      })()}
    </svg>
  );
}

/** Layered sine-wave fields — like heat shimmer or thermal currents */
function WaveFieldSVG({ fg, accent, hash }: VariantProps) {
  const waveCount = 8 + (hash % 5);
  const amplitude = 8 + seededFloat(hash, 0) * 12;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {Array.from({ length: waveCount }, (_, i) => {
        const baseY = (300 / (waveCount + 1)) * (i + 1);
        const freq = 1.5 + seededFloat(hash, i * 2 + 10) * 1.5;
        const phase = seededFloat(hash, i * 2 + 11) * Math.PI * 2;
        const amp = amplitude * (0.6 + seededFloat(hash, i + 150) * 0.8);
        const color = i % 3 === 0 ? accent : fg;
        const opacity = 0.08 + seededFloat(hash, i + 160) * 0.1;
        // Build an SVG path using multiple points along a sine wave
        const points: string[] = [];
        for (let x = 0; x <= 400; x += 8) {
          const y = baseY + Math.sin((x / 400) * Math.PI * 2 * freq + phase) * amp;
          points.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
        }
        return (
          <path
            key={i}
            d={points.join(' ')}
            fill="none"
            stroke={color}
            strokeWidth={1 + seededFloat(hash, i + 170) * 1}
            strokeLinecap="round"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}

/** Abstract mosaic / tile pattern — rectangular blocks at varied opacities */
function MosaicSVG({ fg, accent, hash }: VariantProps) {
  const tileCols = 8 + (hash % 4);
  const tileRows = 6 + (hash % 3);
  const cellW = 400 / tileCols;
  const cellH = 300 / tileRows;
  const gap = 2;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {Array.from({ length: tileCols }, (_, ci) =>
        Array.from({ length: tileRows }, (_, ri) => {
          const show = seededFloat(hash, ci * 13 + ri * 7 + 700) > 0.35;
          if (!show) return null;
          const color =
            seededFloat(hash, ci * 11 + ri * 9 + 800) > 0.6 ? accent : fg;
          const opacity = 0.04 + seededFloat(hash, ci * 17 + ri * 3 + 900) * 0.1;
          return (
            <rect
              key={`${ci}-${ri}`}
              x={ci * cellW + gap / 2}
              y={ri * cellH + gap / 2}
              width={cellW - gap}
              height={cellH - gap}
              rx={1.5}
              fill={color}
              opacity={opacity}
            />
          );
        }),
      )}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Variant renderer map
// ---------------------------------------------------------------------------

const VARIANT_MAP: Record<
  PlaceholderVariant,
  (props: VariantProps) => React.ReactElement
> = {
  woodGrain: WoodGrainSVG,
  steam: SteamSVG,
  stones: StonesSVG,
  gridLines: GridLinesSVG,
  concentricRings: ConcentricRingsSVG,
  diagonalHatch: DiagonalHatchSVG,
  waveField: WaveFieldSVG,
  mosaic: MosaicSVG,
};

const ALL_VARIANTS = Object.keys(VARIANT_MAP) as PlaceholderVariant[];

// ---------------------------------------------------------------------------
// Category  ->  default variant mapping
// ---------------------------------------------------------------------------

const CATEGORY_VARIANT_MAP: Record<Category, PlaceholderVariant> = {
  'Manufacturer News': 'gridLines',
  'Product Launches': 'mosaic',
  'Market Intelligence': 'diagonalHatch',
  'Wellness Trends': 'steam',
  'Hospitality & Spa': 'stones',
  'Tariffs & Logistics': 'waveField',
  'Commentary': 'concentricRings',
};

/**
 * Maps an article category to a visually appropriate placeholder variant.
 * Falls back to `woodGrain` for unknown categories.
 */
export function variantForCategory(category: string): PlaceholderVariant {
  return (
    CATEGORY_VARIANT_MAP[category as Category] ?? 'woodGrain'
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PlaceholderImage({
  variant,
  aspectRatio = '16/10',
  className,
  seed = 'default',
}: PlaceholderImageProps) {
  const hash = hashSeed(seed);

  // If no variant is specified, pick one deterministically from the seed
  const resolvedVariant =
    variant ?? ALL_VARIANTS[hash % ALL_VARIANTS.length];

  // Pick colour combo deterministically
  const comboIndex = hash % LIGHT_COMBOS.length;
  const light = LIGHT_COMBOS[comboIndex];
  const dark = DARK_COMBOS[comboIndex];

  const Renderer = VARIANT_MAP[resolvedVariant];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg',
        className,
      )}
      style={{ aspectRatio }}
    >
      {/* Light-mode layer */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{ backgroundColor: light.bg }}
      >
        <Renderer fg={light.fg} accent={light.accent} hash={hash} />
      </div>

      {/* Dark-mode layer */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ backgroundColor: dark.bg }}
      >
        <Renderer fg={dark.fg} accent={dark.accent} hash={hash} />
      </div>
    </div>
  );
}
