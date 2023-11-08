function ListUmamusume(props) {
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
      </div>
      <div>{props.title}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default ListUmamusume;
