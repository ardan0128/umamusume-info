function SvgAptitudeMile() {
  return (
    <>
      <div>
        <div className="relative w-[300px] h-[200px]">
          <div className="absolute">
            <svg height="100%">
              <polygon points="35,10 10,135 265,135 290,10" style={{ fill: `#FF83B8`, stroke: `#FF83B8`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[120px] h-[120px] left-[45px] top-[5px]">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
              <text
                x="10"
                y="95"
                fontSize="110px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#F44992`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                마
              </text>
            </svg>
          </div>
          <div className="absolute w-[120px] h-[120px] left-[160px] top-[5px]">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
              <text x="5" y="95" fontSize="110px" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" style={{ fill: `#fefefe`, stroke: `#F44992`, strokeWidth: `5`, strokeLinejoin: `round` }}>
                일
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

export default SvgAptitudeMile;
