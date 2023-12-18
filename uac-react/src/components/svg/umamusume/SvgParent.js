export default function SvgParent(props) {
  return (
    <>
      <svg viewBox="0 0 512 512" width={'100%'} height={'100%'}>
        <defs>
          <clipPath id="parentRounded">
            <circle cx={256} cy={256} r={245} />
          </clipPath>
        </defs>
        <circle cx={256} cy={256} r={250} fill="white" stroke="rgba(156, 163, 175)" strokeWidth={10} />
        <image href={`${process.env.PUBLIC_URL}/images/umamusume/${props.id ? props.id : 101101}.png`} width={'100%'} height={'100%'} clipPath="url(#parentRounded)"></image>
      </svg>
    </>
  );
}
