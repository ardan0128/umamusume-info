export default function Plus() {
  return (
    <svg viewBox="0 0 512 512" width={'100%'} height={'100%'}>
      <defs>
        <linearGradient id="parentEmpty" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="40%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F1F1F1', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="plusIcon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="40%" style={{ stopColor: '#B4E20C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#79D123', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="insetShadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
          <feOffset dx="0" dy="15" result="offsetblur" />
          <feFlood floodColor="#D7D7D7" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="plusShadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="0" dy="5" result="offsetblur" />
          <feFlood floodColor="#77C534" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>

      <circle cx={256} cy={256} r={256} fill="url(#parentEmpty)" filter="url(#insetShadow)" />
      <polygon points="230,180 230,230 180,230 180,270 230,270 230,320 270,320 270,270 320,270 320,230 270,230 270,180" fill="url(#plusIcon)" filter="url(#plusShadow)"></polygon>
    </svg>
  );
}
