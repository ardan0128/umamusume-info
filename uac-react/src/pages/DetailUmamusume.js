import { useParams } from 'react-router-dom';
import Detailumamusume from '../components/DetailUmamusume';
import { getDetailUmamusume } from '../data/api/Umamusume';
import { useEffect, useState } from 'react';

function DetailUmamusume() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [umamusumeDetail, setUmamusumeDetail] = useState();

  useEffect(() => {
    getDetailUmamusume(params.id).then(res => {
      setLoading(false);
      setUmamusumeDetail(res);
    });
  }, [params.id]);

  return (
    <>
      {loading ? (
        `loding...`
      ) : (
        <div>
          <Detailumamusume {...umamusumeDetail}></Detailumamusume>
          <div className="p-8 min-w-640 grid grid-cols-2 gap-4">
            <div className="flex absolute">
              <div className="">
                <img className="bg-slate-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
              <div className="bg-red-400">
                <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
              <div className="bg-blue-400">
                <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
            </div>
            <div className="flex absolute">
              <div className="bg-slate-400">
                <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
              <div className="bg-red-400">
                <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
              <div className="bg-blue-400">
                <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailUmamusume;
