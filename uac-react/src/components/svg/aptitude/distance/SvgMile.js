function SvgMedium() {
  return (
    <>
      <svg viewBox="0 0 208 56">
        <g>
          <rect x="0" y="0" rx={3} ry={3} width={208} height={56} fill="#e2d3c7" />
          <rect x="4" y="4" rx={3} ry={3} width={200} height={48} fill="#ffffff" />
        </g>
        <text x={35} y={45} fontSize="40px" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#794017` }}>
          마일
        </text>

        <defs>
          <linearGradient id="textGradientC" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E0FBC4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7AD160', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="borderGradientC" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#67D144', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#25640F', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x={150} y={46} fontSize="50px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="url(#textGradientC)" stroke="url(#borderGradientC)" strokeWidth={2}>
          C
        </text>
      </svg>
    </>
  );
}

export default SvgMedium;
