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
          <div className="modal-container flex flex-col justify-center items-center"></div>
        </div>
      ) : null}
    </>
  );
}
