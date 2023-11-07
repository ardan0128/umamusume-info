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
  console.log(`${process.env.REACT_APP_PUBLIC_IMAGES}`);

  return (
    <>
      <div>List Umamusume</div>
      {loading
        ? 'loading...'
        : umamusumes.map(umamusume => {
            return (
              <div key={umamusume.id}>
                <Link to={`${umamusume.id}`}>
                  <div>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/images/umamusume/${umamusume.id}.png`} alt={umamusume.id}></img>
                    </div>
                    <div>{umamusume.title}</div>
                    <div>{umamusume.name}</div>
                  </div>
                </Link>
              </div>
            );
          })}
    </>
  );
}

export default ListUmamusume;
