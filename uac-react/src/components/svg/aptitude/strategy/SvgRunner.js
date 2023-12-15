function SvgMedium() {
  return (
    <>
      <svg viewBox="0 0 208 56">
        <g>
          <rect x="0" y="0" rx={3} ry={3} width={208} height={56} fill="#e2d3c7" />
          <rect x="4" y="4" rx={3} ry={3} width={200} height={48} fill="#ffffff" />
        </g>
        <text x={35} y={45} fontSize="40px" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#794017` }}>
          도주
        </text>

        <defs>
          <linearGradient id="textGradientF" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F5EFFE', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#AC96FD', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="borderGradientF" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#928CED', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#413B82', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x={150} y={46} fontSize="50px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="url(#textGradientF)" stroke="url(#borderGradientF)" strokeWidth={2}>
          F
        </text>
      </svg>
    </>
  );
}

export default SvgMedium;
