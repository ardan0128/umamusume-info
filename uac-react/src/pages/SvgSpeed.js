function SvgSpeed() {
  return (
    <>
      <div className="p-8 w-full">
        <div className="flex relative aspect-square justify-center items-center">
          <div className="absolute">
            <svg>
              <polygon points="60,5 5,160 190,160 240,5" style={{ fill: `#40b4ec` }} />
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <text
                x="50%"
                y="50%"
                alignmentBaseline="middle"
                textAnchor="middle"
                textLength="100%"
                lengthAdjust="spacing"
                fontSize="7em"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                스피드
              </text>
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SvgSpeed;
