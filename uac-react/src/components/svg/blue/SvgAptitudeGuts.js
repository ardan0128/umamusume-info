function SvgAptitudeGuts() {
  return (
    <>
      <div>
        <svg viewBox="0 0 300 200">
          <polygon points="30,10 10,140 250,140 270,10" style={{ fill: `#40b4ec`, stroke: `#40b4ec`, strokeWidth: 5, strokeLinejoin: `round` }} />
          <text x="45" y="105" fontSize="115px" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}>
            근
          </text>
          <text x="145" y="105" fontSize="115px" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}>
            성
          </text>
          <polygon
            points="50,110 65,132.5 90,140 72.5,160 77.5,190 50,177.5 22.5,190 27.5,160 10,140 35,132.5"
            style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }}
          />
          <polygon
            points="130,110 145,132.5 170,140 152.5,160 157.5,190 130,177.5 102.5,190 107.5,160 90,140 115,132.5"
            style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }}
          />
          <polygon
            points="210,110 225,132.5 250,140 232.5,160 237.5,190 210,177.5 182.5,190 187.5,160 170,140 195,132.5"
            style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }}
          />
        </svg>
      </div>
    </>
  );
}

export default SvgAptitudeGuts;
