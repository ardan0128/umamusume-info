function Detailumamusume(props) {
  return (
    <>
      <div className="p-8 w-full min-w-640">
        <div className="flex justify-center items-center">
          <div>
            <img className="max-h-28" src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
          </div>

          <div>
            <div className="flex-auto text-center">{props.title}</div>
            <div className="flex-auto text-center">{props.name}</div>
            <div className="flex flex-row">
              <div className="w-28 text-center">경기장 적성</div>
              <div className="flex">
                <div className="w-12 text-center">잔디</div>
                <div className="w-4 text-center">{props.surface.turf}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">더트</div>
                <div className="w-4 text-center">{props.surface.dirt}</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-28 text-center">거리 적성</div>
              <div className="flex">
                <div className="w-12 text-center">단거리</div>
                <div className="w-4 text-center">{props.distance._short}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">마일</div>
                <div className="w-4 text-center">{props.distance._mile}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">중거리</div>
                <div className="w-4 text-center">{props.distance._medium}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">장거리</div>
                <div className="w-4 text-center">{props.distance._long}</div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-28 text-center">각질 적성</div>
              <div className="flex">
                <div className="w-12 text-center">도주</div>
                <div className="w-4 text-center">{props.strategy.runner}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">선행</div>
                <div className="w-4 text-center">{props.strategy.leader}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">선입</div>
                <div className="w-4 text-center">{props.strategy.betweener}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center">추입</div>
                <div className="w-4 text-center">{props.strategy.chaser}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailumamusume;
