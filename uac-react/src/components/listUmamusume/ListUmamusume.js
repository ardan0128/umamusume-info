import { useState } from 'react';

function ListUmamusume(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={() => setIsModalOpen(!isModalOpen)}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
      </div>
      <div>{props.title}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default ListUmamusume;
