import { Link } from 'react-router-dom';
import umamusumes from '../data/umamusume.json';

function ListUmamusume() {
  console.log(umamusumes);
  return (
    <>
      <div>List Umamusume</div>

      {umamusumes.map(umamusume => {
        return (
          <div key={umamusume.id}>
            <Link to={`${umamusume.id}`} state={{ id: umamusume.id }}>
              {umamusume.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ListUmamusume;
