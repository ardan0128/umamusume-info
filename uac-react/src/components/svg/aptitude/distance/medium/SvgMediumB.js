function SvgMediumB() {
  return (
    <>
      <svg viewBox="0 0 208 56">
        <g>
          <rect x="0" y="0" rx={3} ry={3} width={208} height={56} fill="#e2d3c7" />
          <rect x="4" y="4" rx={3} ry={3} width={200} height={48} fill="#ffffff" />
        </g>
        <text x={20} y={44} fontSize="40px" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#794017` }}>
          중거리
        </text>

        <defs>
          <linearGradient id="textGradientD" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C8ECFE', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#68BFFB', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="borderGradientD" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#69C0FB', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#306793', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text x={150} y={46} fontSize="50px" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="url(#textGradientB)" stroke="url(#borderGradientB)" strokeWidth={2}>
          B
        </text>
      </svg>
    </>
  );
}

export default SvgMediumB;
