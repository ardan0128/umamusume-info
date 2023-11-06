import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUmamusume } from '../data/api/Umamusume';

function ListUmamusume() {
  const [loading, setLoading] = useState(true);
  const [umamusumes, setUmamusumes] = useState();

  useEffect(() => {
    getAllUmamusume().then(res => {
      setLoading(false);
      setUmamusumes(res);
    });
  }, []);

  return (
    <>
      <div>List Umamusume</div>
      {loading
        ? 'loading...'
        : umamusumes.map(umamusume => {
            return (
              <div key={umamusume.id}>
                <Link to={`${umamusume.id}`}>{umamusume.name}</Link>
              </div>
            );
          })}
    </>
  );
}

export default ListUmamusume;
