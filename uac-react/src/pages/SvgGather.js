import SvgTurf from '../components/svg/aptitude/surface/SvgTurf';
import SvgDirt from '../components/svg/aptitude/surface/SvgDirt';
import SvgShort from '../components/svg/aptitude/distance/SvgShort';
import SvgMile from '../components/svg/aptitude/distance/SvgMile';
import SvgMedium from '../components/svg/aptitude/distance/SvgMedium';
import SvgLong from '../components/svg/aptitude/distance/SvgLong';
import SvgRunner from '../components/svg/aptitude/strategy/SvgRunner';
import SvgLeader from '../components/svg/aptitude/strategy/SvgLeader';
import SvgSurface from '../components/svg/aptitude/surface/SvgSurface';
import SvgDistance from '../components/svg/aptitude/distance/SvgDistance';
import SvgStrategy from '../components/svg/aptitude/strategy/SvgStrategy';
import SvgParent from '../components/svg/umamusume/SvgParent';

function SvgGather() {
  return (
    <>
      <SvgTurf></SvgTurf>
      <SvgDirt></SvgDirt>
      <SvgShort></SvgShort>
      <SvgMile></SvgMile>
      <SvgMedium></SvgMedium>
      <SvgLong></SvgLong>
      <SvgRunner></SvgRunner>
      <SvgLeader></SvgLeader>
      <SvgSurface></SvgSurface>
      <SvgDistance></SvgDistance>
      <SvgStrategy></SvgStrategy>

      <div className="p-4 w-full min-w-640 flex justify-center items-center">
        <div className="p-1 w-3/4 grid grid-cols-5 gap-2">
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

      <SvgParent></SvgParent>
    </>
  );
}

export default SvgGather;
