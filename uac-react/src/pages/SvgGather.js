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
    </>
  );
}

export default SvgGather;
