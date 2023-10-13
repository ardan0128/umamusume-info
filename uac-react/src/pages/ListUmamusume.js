import { Link } from 'react-router-dom';
import umamusumes from '../data/umamusume.json';

function ListUmamusume() {
  return (
    <>
      <div>List Umamusume</div>

      {umamusumes.map(umamusume => {
        return (
          <div key={umamusume.id}>
            <Link to={`${umamusume.id}`} state={{ umamusume }}>
              {umamusume.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ListUmamusume;
