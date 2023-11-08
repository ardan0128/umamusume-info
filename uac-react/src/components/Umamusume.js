function Umamusume(props) {
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default Umamusume;
