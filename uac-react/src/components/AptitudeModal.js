import { useEffect, useState } from 'react';
import './../styles/modal.css';
import { getAllUmamusume } from '../data/api/Umamusume';
import Umamusume from './Umamusume';

export default function AptitudeModal({ isOpen, onClose }) {
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
      {isOpen ? (
        <div>
          <div className="modal-background" onClick={onClose}></div>
          <div className="modal-container flex flex-col justify-center items-center">
            <div>Progress bar</div>
            <div>Title</div>
            <div className="overflow-auto">
              <ul className="m-2 ml-4 mr-4 grid gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
                {loading
                  ? 'loading...'
                  : umamusumes.map(umamusume => {
                      return (
                        <li key={umamusume.id}>
                          <Umamusume id={umamusume.id} name={umamusume.name}></Umamusume>
                        </li>
                      );
                    })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
