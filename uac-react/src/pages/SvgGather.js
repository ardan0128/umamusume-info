import SvgTurf from '../components/svg/aptitude/surface/SvgTurf';
import SvgDirt from '../components/svg/aptitude/surface/SvgDirt';
import SvgShort from '../components/svg/aptitude/distance/SvgShort';
import SvgMile from '../components/svg/aptitude/distance/SvgMile';
import SvgMedium from '../components/svg/aptitude/distance/SvgMedium';
import SvgLong from '../components/svg/aptitude/distance/SvgLong';
import SvgRunner from '../components/svg/aptitude/strategy/SvgRunner';
import SvgLeader from '../components/svg/aptitude/strategy/SvgLeader';

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

      <div className="p-8 w-full min-w-640 flex justify-center items-center">
        <div className="p-1 w-full grid grid-cols-5 gap-4">
          <div>경기장 적성</div>
          <div>
            <SvgTurf></SvgTurf>
          </div>
          <div>
            <SvgDirt></SvgDirt>
          </div>

          <div></div>
          <div></div>
          <div>거리 적성</div>
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
          <div>각질 적성</div>
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

export default SvgGather;
