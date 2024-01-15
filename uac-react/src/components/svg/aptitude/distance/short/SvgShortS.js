function SvgShortS() {
  return (
    <>
      <svg viewBox="0 0 208 56">
        <g>
          <rect x="0" y="0" rx={3} ry={3} width={208} height={56} fill="#e2d3c7" />
          <rect x="4" y="4" rx={3} ry={3} width={200} height={48} fill="#ffffff" />
        </g>
        <text x={20} y={44} fontSize="40px" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#794017` }}>
          단거리
        </text>

        <defs>
          <linearGradient id="textGradientB" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFD2DF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FA7AA2', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="borderGradientB" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FE9BAE', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A21C3D', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x={150} y={46} fontSize="50px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="url(#textGradientS)" stroke="url(#borderGradientS)" strokeWidth={2}>
          S
        </text>
      </svg>
    </>
  );
}

export default SvgShortS;
