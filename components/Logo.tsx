type Props = { size: number; radius?: number; className?: string };

// Icône de l'app (piste C4 · le boîtier).
export function AppIcon({ size, radius, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      style={{ borderRadius: radius, display: "block", flexShrink: 0 }}
    >
      <rect x="0" y="0" width="100" height="100" fill="#2A2622" />
      <rect x="0" y="0" width="100" height="30" fill="#1D1A16" />
      <rect x="62" y="10" width="22" height="12" rx="3" fill="#0B0A09" stroke="#4A443B" strokeWidth="1.2" />
      <circle cx="22" cy="16" r="5" fill="#E4572E" />
      <rect x="17" y="40" width="66" height="40" rx="10" fill="#0B0A09" />
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), monospace"
        fontWeight="600"
        fontSize="28"
        fill="#F2A07F"
      >
        27
      </text>
    </svg>
  );
}
