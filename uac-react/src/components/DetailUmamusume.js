import SvgTurf from '../components/svg/aptitude/surface/SvgTurf';
import SvgDirt from '../components/svg/aptitude/surface/SvgDirt';
import SvgShort from '../components/svg/aptitude/distance/SvgShort';
import SvgMile from '../components/svg/aptitude/distance/SvgMile';
import SvgMedium from '../components/svg/aptitude/distance/SvgMedium';
import SvgLong from '../components/svg/aptitude/distance/SvgLong';
import SvgRunner from '../components/svg/aptitude/strategy/SvgRunner';
import SvgLeader from '../components/svg/aptitude/strategy/SvgLeader';

function Detailumamusume(props) {
  return (
    <>
      <div className="p-8 w-full min-w-640">
        <div className="flex justify-center items-center">
          <div className="w-1/4">
            <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
          </div>

          <div>
            <div className="flex-auto text-center text-3xl">{props.title}</div>
            <div className="flex-auto text-center text-4xl">{props.name}</div>
            <div className="flex flex-row">
              <div className="w-28 text-center text-lg">경기장 적성</div>
              <div className="flex">
                <div className="w-12 text-center text-lg">잔디</div>
                <div className="w-4 text-center text-lg">{props.surface.turf}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">더트</div>
                <div className="w-4 text-center text-lg">{props.surface.dirt}</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-28 text-center text-lg">거리 적성</div>
              <div className="flex">
                <div className="w-12 text-center text-lg">단거리</div>
                <div className="w-4 text-center text-lg">{props.distance._short}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">마일</div>
                <div className="w-4 text-center text-lg">{props.distance._mile}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">중거리</div>
                <div className="w-4 text-center text-lg">{props.distance._medium}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">장거리</div>
                <div className="w-4 text-center text-lg">{props.distance._long}</div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-28 text-center text-lg">각질 적성</div>
              <div className="flex">
                <div className="w-12 text-center text-lg">도주</div>
                <div className="w-4 text-center text-lg">{props.strategy.runner}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">선행</div>
                <div className="w-4 text-center text-lg">{props.strategy.leader}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">선입</div>
                <div className="w-4 text-center text-lg">{props.strategy.betweener}</div>
              </div>
              <div className="flex">
                <div className="w-12 text-center text-lg">추입</div>
                <div className="w-4 text-center text-lg">{props.strategy.chaser}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 w-full min-w-640">
        <div className="flex justify-center items-center">
          <div className="min-w-[16.666667%] w-1/6">
            <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
          </div>
          <div>
            <div className="flex-auto flex-row text-center text-4xl">[{props.title}]</div>
            <div className="flex-auto flex-row text-center text-6xl">{props.name}</div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full min-w-640 flex justify-center items-center">
        <div className="p-1 w-3/4 grid grid-cols-5 gap-2">
          <div className="text-center align-middle text-lg line-clamp-1">경기장 적성</div>
          <div>
            <SvgTurf></SvgTurf>
          </div>
          <div>
            <SvgDirt></SvgDirt>
          </div>
          <div></div>
          <div></div>
          <div className="text-lg">거리 적성</div>
          <div>
            <SvgShort></SvgShort>
          </div>
          <div>
            <SvgMile></SvgMile>
          </div>
          <div>
            <SvgMedium></SvgMedium>
          </div>
          <div>
            <SvgLong></SvgLong>
          </div>
          <div className="text-lg">각질 적성</div>
          <div>
            <SvgRunner></SvgRunner>
          </div>
          <div>
            <SvgLeader></SvgLeader>
          </div>
          <div>
            <SvgRunner></SvgRunner>
          </div>
          <div>
            <SvgLeader></SvgLeader>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailumamusume;
