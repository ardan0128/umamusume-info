export default function Plus() {
  return (
    <svg viewBox="0 0 512 512" width={'100%'} height={'100%'}>
      <defs>
        <linearGradient id="parentEmpty" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="20%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F1F1F1', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="insetShadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feFlood flood-color="#D7D7D7" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="textShadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="0" dy="5" result="offsetblur" />
          <feFlood flood-color="#D7D7D7" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>

      <circle cx={256} cy={256} r={251} stroke="#E4E4E4" strokeWidth={5} fill="url(#parentEmpty)" filter="url(#insetShadow)" />
    </svg>
  );
}
