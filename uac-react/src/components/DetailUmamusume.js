function Detailumamusume(props) {
  console.log(props);
  return (
    <>
      <div className="p-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="text-center">{props.title}</div>
            <div>
              <img className="max-w-80 max-h-80" src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
            </div>
            <div className="text-center">{props.name}</div>

            <div className="grid">
              <div>경기장 적성</div>
              <div className="grid grid-cols-2">
                <div>잔디</div>
                <div>{props.surface.turf}</div>
              </div>
              <div className="grid grid-cols-2">
                <div>더트</div>
                <div>{props.surface.dirt}</div>
              </div>
            </div>
            <div className="grid grid-cols-9">
              <div>거리 적성</div>
              <div className="grid-cols-2">
                <div>
                  <div>단거리</div>
                  <div>{props.distance._short}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>마일</div>
                  <div>{props.distance._mile}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>중거리</div>
                  <div>{props.distance._medium}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>장거리</div>
                  <div>{props.distance._long}</div>
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
        </div>
      </div>
    </>
  );
}

export default Detailumamusume;
