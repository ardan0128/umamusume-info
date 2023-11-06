import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailUmamusume } from '../data/api/Umamusume';

function DetailUmamusume() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [umamusumeDetail, setUmamusumeDetail] = useState();
  const [image, setImage] = useState();
  // const umamusumeImage = require(`${process.env.REACT_APP_PUBLIC_IMAGES}/${umamusumeDetail.id}.png`);

  useEffect(() => {
    getDetailUmamusume(params.id).then(res => {
      setLoading(false);
      setUmamusumeDetail(res);
      setImage(require(`${process.env.REACT_APP_PUBLIC_IMAGES}/${res.id}.png`));
    });
  }, []);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>{umamusumeDetail.title}</div>
          <div>
            <img src={image} alt={umamusumeDetail.id}></img>
          </div>
          <div>{umamusumeDetail.name}</div>
          <div>
            <div>경기장 적성</div>
            <div>
              <div>잔디</div>
              <div>{umamusumeDetail.surface.turf}</div>
            </div>
            <div>
              <div>더트</div>
              <div>{umamusumeDetail.surface.dirt}</div>
            </div>
          </div>
          <div>
            <div>거리 적성</div>
            <div>
              <div>
                <div>단거리</div>
                <div>{umamusumeDetail.distance.short}</div>
              </div>
            </div>
            <div>
              <div>
                <div>마일</div>
                <div>{umamusumeDetail.distance.mile}</div>
              </div>
            </div>
            <div>
              <div>
                <div>중거리</div>
                <div>{umamusumeDetail.distance.medium}</div>
              </div>
            </div>
            <div>
              <div>
                <div>장거리</div>
                <div>{umamusumeDetail.distance.long}</div>
              </div>
            </div>
          </div>
          <div>
            <div>각질 적성</div>
            <div>
              <div>
                <div>도주</div>
                <div>{umamusumeDetail.strategy.runner}</div>
              </div>
            </div>
            <div>
              <div>
                <div>선행</div>
                <div>{umamusumeDetail.strategy.leader}</div>
              </div>
            </div>
            <div>
              <div>
                <div>선입</div>
                <div>{umamusumeDetail.strategy.betweener}</div>
              </div>
            </div>
            <div>
              <div>
                <div>추입</div>
                <div>{umamusumeDetail.strategy.chaser}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailUmamusume;
