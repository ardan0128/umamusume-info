function Detailumamusume(props) {
  return (
    <>
      <div>
        <div>{props.title}</div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
        </div>
        <div>{props.name}</div>
        <div>
          <div>경기장 적성</div>
          <div>
            <div>잔디</div>
            <div>{props.surface.turf}</div>
          </div>
          <div>
            <div>더트</div>
            <div>{props.surface.dirt}</div>
          </div>
        </div>
        <div>
          <div>거리 적성</div>
          <div>
            <div>
              <div>단거리</div>
              <div>{props.distance.short}</div>
            </div>
          </div>
          <div>
            <div>
              <div>마일</div>
              <div>{props.distance.mile}</div>
            </div>
          </div>
          <div>
            <div>
              <div>중거리</div>
              <div>{props.distance.medium}</div>
            </div>
          </div>
          <div>
            <div>
              <div>장거리</div>
              <div>{props.distance.long}</div>
            </div>
          </div>
        </div>
        <div>
          <div>각질 적성</div>
          <div>
            <div>
              <div>도주</div>
              <div>{props.strategy.runner}</div>
            </div>
          </div>
          <div>
            <div>
              <div>선행</div>
              <div>{props.strategy.leader}</div>
            </div>
          </div>
          <div>
            <div>
              <div>선입</div>
              <div>{props.strategy.betweener}</div>
            </div>
          </div>
          <div>
            <div>
              <div>추입</div>
              <div>{props.strategy.chaser}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailumamusume;
