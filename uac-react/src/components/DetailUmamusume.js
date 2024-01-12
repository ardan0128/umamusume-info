import SvgTurf from '../components/svg/aptitude/surface/SvgTurf';
import SvgDirt from '../components/svg/aptitude/surface/SvgDirt';
import SvgShort from '../components/svg/aptitude/distance/SvgShort';
import SvgMile from '../components/svg/aptitude/distance/SvgMile';
import SvgMedium from '../components/svg/aptitude/distance/SvgMedium';
import SvgLong from '../components/svg/aptitude/distance/SvgLong';
import SvgRunner from '../components/svg/aptitude/strategy/SvgRunner';
import SvgLeader from '../components/svg/aptitude/strategy/SvgLeader';
import SvgDistance from './svg/aptitude/distance/SvgDistance';
import SvgSurface from './svg/aptitude/surface/SvgSurface';
import SvgStrategy from './svg/aptitude/strategy/SvgStrategy';

function Detailumamusume(props) {
  console.log(props);
  return (
    <>
      <div className="p-4 w-full flex justify-center items-center">
        <div className="min-w-640 max-w-7xl flex justify-center items-center">
          <div className="min-w-[16.666667%] w-1/6">
            <img src={`${process.env.PUBLIC_URL}/images/umamusume/${props.id}.png`} alt={props.id}></img>
          </div>
          <div>
            <div className="flex-auto flex-row text-center text-4xl">[{props.title}]</div>
            <div className="flex-auto flex-row text-center text-6xl">{props.name}</div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full flex justify-center items-center">
        <div className="p-1 min-w-640 max-w-3xl w-3/4 grid grid-cols-5 gap-2">
          <div>
            <SvgSurface></SvgSurface>
          </div>
          <div>
            <SvgTurf></SvgTurf>
          </div>
          <div>
            <SvgDirt></SvgDirt>
          </div>
          <div></div>
          <div></div>
          <div>
            <SvgDistance></SvgDistance>
          </div>
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
          <div>
            <SvgStrategy></SvgStrategy>
          </div>
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
