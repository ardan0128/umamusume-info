import { useEffect, useState } from 'react';
import { getDetailUmamusume } from '../../data/api/Umamusume';
import Detailumamusume from '../DetailUmamusume';
import ModalSelectAptitude from './ModalSelectAptitude';

export default function ModalInfoUmamusume({ isOpen, onClose, umamusumeId }) {
  const [loading, setLoading] = useState(true);
  const [umamusumeDetail, setUmamusumeDetail] = useState();

  useEffect(() => {
    getDetailUmamusume(umamusumeId).then(res => {
      setLoading(false);
      setUmamusumeDetail(res);
    });
  }, [umamusumeId]);

  return (
    <>
      {isOpen ? (
        <div>
          <div className="modal-background" onClick={onClose}></div>
          <div className="modal-container flex flex-col items-center">
            {loading ? (
              `loding...`
            ) : (
              <div>
                <Detailumamusume {...umamusumeDetail}></Detailumamusume>
                <ModalSelectAptitude {...umamusumeDetail}></ModalSelectAptitude>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
