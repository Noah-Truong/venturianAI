export function HandshakeIcon({ size = 20 }: { size?: number }) {
  const r = size * 0.22;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lime-green rounded square background */}
      <rect width="100" height="100" rx={r} fill="#B4E234" />

      {/* Bold italic H — matched to the Handshake app icon */}
      <text
        x="42"
        y="73"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="72"
        fontStyle="italic"
        fill="#1a1a1a"
        letterSpacing="-2"
      >
        H
      </text>
    </svg>
  );
}
