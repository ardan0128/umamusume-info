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
            <div className="relative border border-sky-400 min-w-280 min-h-280">
              <div className="flex absolute justify-center items-center">
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

            <div className="border border-pink-400 min-w-280 min-h-280">
              <div className="flex relative aspect-square justify-center items-center">
                <div className="absolute w-[42%] left-[8%]">
                  <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
                  <div className="grid grid-cols-3">
                    <div>
                      <div>스태미나</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>중거리</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>고유</div>
                      <div>별 별 별</div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[28%] top-[12%] right-[8%]">
                  <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
                  <div className="grid grid-cols-3">
                    <div>
                      <div>스태미나</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>중거리</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>고유</div>
                      <div>별 별 별</div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[28%] bottom-[12%] right-[8%]">
                  <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100101.png`} alt={100101}></img>
                  <div className="grid grid-cols-3">
                    <div>
                      <div>스태미나</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>중거리</div>
                      <div>별 별 별</div>
                    </div>
                    <div>
                      <div>고유</div>
                      <div>별 별 별</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailUmamusume;
