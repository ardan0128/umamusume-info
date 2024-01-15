function SvgDirtA() {
  return (
    <>
      <svg viewBox="0 0 208 56">
        <g>
          <rect x="0" y="0" rx={3} ry={3} width={208} height={56} fill="#e2d3c7" />
          <rect x="4" y="4" rx={3} ry={3} width={200} height={48} fill="#ffffff" />
        </g>
        <text x={35} y={44} fontSize="40px" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#794017` }}>
          더트
        </text>

        <defs>
          <linearGradient id="textGradientA" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FDE3B3', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FB8C39', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="borderGradientA" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ED7B2A', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A63F0A', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x={150} y={46} fontSize="50px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="url(#textGradientA)" stroke="url(#borderGradientA)" strokeWidth={2}>
          A
        </text>
      </svg>
    </>
  );
}

export default SvgDirtA;
