import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUmamusume } from '../data/api/Umamusume';
import Umamusume from '../components/Umamusume';

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
      <div className="w-full items-center p-4">
        <div>List Umamusume</div>
        <div className="mt-4">
          <ul className="grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {loading
              ? 'loading...'
              : umamusumes.map(umamusume => {
                  return (
                    <li key={umamusume.id}>
                      <div className="rounded-xl bg-zinc-200 p-4">
                        <Link to={`${umamusume.id}`}>
                          <Umamusume id={umamusume.id} name={umamusume.name}></Umamusume>
                        </Link>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListUmamusume;
