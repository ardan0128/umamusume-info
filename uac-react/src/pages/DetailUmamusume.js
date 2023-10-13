import { useLocation } from 'react-router-dom';

function DetailUmamusume() {
  const { state } = useLocation();
  const umamusume = require(`../data/umamusume/${state.umamusume.id}`);
  const umamusumeImage = require(`../assets/images/umamusume/${state.umamusume.id}.png`);

  return (
    <>
      <div>{umamusume.title}</div>
      <div>
        <img src={umamusumeImage} alt={umamusume.id}></img>
      </div>
      <div>{umamusume.name}</div>
      <div>
        <div>경기장 적성</div>
        <div>
          <div>잔디</div>
          <div>{umamusume.surface.turf}</div>
        </div>
        <div>
          <div>더트</div>
          <div>{umamusume.surface.dirt}</div>
        </div>
      </div>
      <div>
        <div>거리 적성</div>
        <div>
          <div>
            <div>단거리</div>
            <div>{umamusume.distance.short}</div>
          </div>
        </div>
        <div>
          <div>
            <div>마일</div>
            <div>{umamusume.distance.mile}</div>
          </div>
        </div>
        <div>
          <div>
            <div>중거리</div>
            <div>{umamusume.distance.medium}</div>
          </div>
        </div>
        <div>
          <div>
            <div>장거리</div>
            <div>{umamusume.distance.long}</div>
          </div>
        </div>
      </div>
      <div>
        <div>각질 적성</div>
        <div>
          <div>
            <div>도주</div>
            <div>{umamusume.strategy.runner}</div>
          </div>
        </div>
        <div>
          <div>
            <div>선행</div>
            <div>{umamusume.strategy.leader}</div>
          </div>
        </div>
        <div>
          <div>
            <div>선입</div>
            <div>{umamusume.strategy.betweener}</div>
          </div>
        </div>
        <div>
          <div>
            <div>추입</div>
            <div>{umamusume.strategy.chaser}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailUmamusume;
