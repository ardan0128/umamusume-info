import SvgTurfS from '../components/svg/aptitude/surface/SvgTurfS';
import SvgTurfA from '../components/svg/aptitude/surface/SvgTurfA';
import SvgTurfB from '../components/svg/aptitude/surface/SvgTurfB';
import SvgTurfC from '../components/svg/aptitude/surface/SvgTurfC';
import SvgTurfD from '../components/svg/aptitude/surface/SvgTurfD';
import SvgTurfE from '../components/svg/aptitude/surface/SvgTurfE';
import SvgTurfF from '../components/svg/aptitude/surface/SvgTurfF';
import SvgTurfG from '../components/svg/aptitude/surface/SvgTurfG';
import SvgDirtS from '../components/svg/aptitude/surface/SvgDirtS';
import SvgDirtA from '../components/svg/aptitude/surface/SvgDirtA';
import SvgDirtB from '../components/svg/aptitude/surface/SvgDirtB';
import SvgDirtC from '../components/svg/aptitude/surface/SvgDirtC';
import SvgDirtD from '../components/svg/aptitude/surface/SvgDirtD';
import SvgDirtE from '../components/svg/aptitude/surface/SvgDirtE';
import SvgDirtF from '../components/svg/aptitude/surface/SvgDirtF';
import SvgDirtG from '../components/svg/aptitude/surface/SvgDirtG';
import SvgShort from '../components/svg/aptitude/distance/SvgShort';
import SvgMile from '../components/svg/aptitude/distance/SvgMile';
import SvgMedium from '../components/svg/aptitude/distance/SvgMedium';
import SvgLong from '../components/svg/aptitude/distance/SvgLong';
import SvgRunner from '../components/svg/aptitude/strategy/SvgRunner';
import SvgLeader from '../components/svg/aptitude/strategy/SvgLeader';
import SvgBetweener from '../components/svg/aptitude/strategy/SvgBetweener';
import SvgChaser from '../components/svg/aptitude/strategy/SvgChaser';
import SvgSurface from '../components/svg/aptitude/surface/SvgSurface';
import SvgDistance from '../components/svg/aptitude/distance/SvgDistance';
import SvgStrategy from '../components/svg/aptitude/strategy/SvgStrategy';
import SvgParent from '../components/svg/umamusume/SvgParent';
import SvgPlus from '../components/svg/icon/SvgPlus';

function SvgGather() {
  return (
    <>
      <SvgTurfS></SvgTurfS>
      <SvgTurfA></SvgTurfA>
      <SvgTurfB></SvgTurfB>
      <SvgTurfC></SvgTurfC>
      <SvgTurfD></SvgTurfD>
      <SvgTurfE></SvgTurfE>
      <SvgTurfF></SvgTurfF>
      <SvgTurfG></SvgTurfG>
      <SvgDirtS></SvgDirtS>
      <SvgDirtA></SvgDirtA>
      <SvgDirtB></SvgDirtB>
      <SvgDirtC></SvgDirtC>
      <SvgDirtD></SvgDirtD>
      <SvgDirtE></SvgDirtE>
      <SvgDirtF></SvgDirtF>
      <SvgDirtG></SvgDirtG>
      <SvgShort></SvgShort>
      <SvgMile></SvgMile>
      <SvgMedium></SvgMedium>
      <SvgLong></SvgLong>
      <SvgRunner></SvgRunner>
      <SvgLeader></SvgLeader>
      <SvgBetweener></SvgBetweener>
      <SvgChaser></SvgChaser>

      <div className="p-4 w-full min-w-640 flex justify-center items-center">
        <div className="p-1 w-3/4 grid grid-cols-5 gap-2">
          <div>
            <SvgSurface></SvgSurface>
          </div>
          <div>
            <SvgTurfS></SvgTurfS>
          </div>
          <div>
            <SvgDirtS></SvgDirtS>
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
      <SvgPlus></SvgPlus>
    </>
  );
}

export default SvgGather;
