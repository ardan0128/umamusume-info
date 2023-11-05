import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUmamusume } from '../data/api/Umamusume';

function ListUmamusume() {
  const [umamusumes, setUmamusumes] = useState();

  useEffect(() => {
    getAllUmamusume().then(res => {
      setUmamusumes(res);
    });
  }, []);

  return (
    <>
      <div>List Umamusume</div>

      {/* {umamusumes.map(umamusume => {
        return (
          <div key={umamusume.id}>
            <Link to={`${umamusume.id}`} state={{ umamusume }}>
              {umamusume.name}
            </Link>
          </div>
        );
      })} */}
    </>
  );
}

export default ListUmamusume;
