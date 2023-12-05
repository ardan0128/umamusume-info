function SvgAptitudeRed() {
  return (
    <>
      <div>
        <div className="relative w-[300px] h-[200px]">
          <div className="absolute">
            <svg height="100%">
              <polygon points="35,10 10,135 265,135 290,10" style={{ fill: `#FF83B8`, stroke: `#FF83B8`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <text
                x="50%"
                y="50%"
                alignmentBaseline="middle"
                textAnchor="middle"
                // textLength="100%"
                lengthAdjust="spacing"
                fontSize="115px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#F44992`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                장거리
              </text>
            </svg>
          </div>
          <div className="absolute w-[95px] left-[5px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#F44992`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[90px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#F44992`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[175px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#F44992`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SvgAptitudeRed;
