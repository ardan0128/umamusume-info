import SvgDistance from '../svg/aptitude/distance/SvgDistance';
import SvgSurface from '../svg/aptitude/surface/SvgSurface';
import SvgStrategy from '../svg/aptitude/strategy/SvgStrategy';

import SvgSurfaceA from '../svg/aptitude/surface/turf/SvgTurfA';
import SvgSurfaceB from '../svg/aptitude/surface/turf/SvgTurfB';
import SvgSurfaceC from '../svg/aptitude/surface/turf/SvgTurfC';
import SvgSurfaceD from '../svg/aptitude/surface/turf/SvgTurfD';
import SvgSurfaceE from '../svg/aptitude/surface/turf/SvgTurfE';
import SvgSurfaceF from '../svg/aptitude/surface/turf/SvgTurfF';
import SvgSurfaceG from '../svg/aptitude/surface/turf/SvgTurfG';

import SvgDirtA from '../svg/aptitude/surface/dirt/SvgDirtA';
import SvgDirtB from '../svg/aptitude/surface/dirt/SvgDirtB';
import SvgDirtC from '../svg/aptitude/surface/dirt/SvgDirtC';
import SvgDirtD from '../svg/aptitude/surface/dirt/SvgDirtD';
import SvgDirtE from '../svg/aptitude/surface/dirt/SvgDirtE';
import SvgDirtF from '../svg/aptitude/surface/dirt/SvgDirtF';
import SvgDirtG from '../svg/aptitude/surface/dirt/SvgDirtG';

import SvgShortA from '../svg/aptitude/distance/short/SvgShortA';
import SvgShortB from '../svg/aptitude/distance/short/SvgShortB';
import SvgShortC from '../svg/aptitude/distance/short/SvgShortC';
import SvgShortD from '../svg/aptitude/distance/short/SvgShortD';
import SvgShortE from '../svg/aptitude/distance/short/SvgShortE';
import SvgShortF from '../svg/aptitude/distance/short/SvgShortF';
import SvgShortG from '../svg/aptitude/distance/short/SvgShortG';

import SvgMileA from '../svg/aptitude/distance/mile/SvgMileA';
import SvgMileB from '../svg/aptitude/distance/mile/SvgMileB';
import SvgMileC from '../svg/aptitude/distance/mile/SvgMileC';
import SvgMileD from '../svg/aptitude/distance/mile/SvgMileD';
import SvgMileE from '../svg/aptitude/distance/mile/SvgMileE';
import SvgMileF from '../svg/aptitude/distance/mile/SvgMileF';
import SvgMileG from '../svg/aptitude/distance/mile/SvgMileG';

import SvgMediumA from '../svg/aptitude/distance/medium/SvgMediumA';
import SvgMediumB from '../svg/aptitude/distance/medium/SvgMediumB';
import SvgMediumC from '../svg/aptitude/distance/medium/SvgMediumC';
import SvgMediumD from '../svg/aptitude/distance/medium/SvgMediumD';
import SvgMediumE from '../svg/aptitude/distance/medium/SvgMediumE';
import SvgMediumF from '../svg/aptitude/distance/medium/SvgMediumF';
import SvgMediumG from '../svg/aptitude/distance/medium/SvgMediumG';

import SvgLongA from '../svg/aptitude/distance/long/SvgLongA';
import SvgLongB from '../svg/aptitude/distance/long/SvgLongB';
import SvgLongC from '../svg/aptitude/distance/long/SvgLongC';
import SvgLongD from '../svg/aptitude/distance/long/SvgLongD';
import SvgLongE from '../svg/aptitude/distance/long/SvgLongE';
import SvgLongF from '../svg/aptitude/distance/long/SvgLongF';
import SvgLongG from '../svg/aptitude/distance/long/SvgLongG';

import SvgRunnerA from '../svg/aptitude/strategy/runner/SvgRunnerA';
import SvgRunnerB from '../svg/aptitude/strategy/runner/SvgRunnerB';
import SvgRunnerC from '../svg/aptitude/strategy/runner/SvgRunnerC';
import SvgRunnerD from '../svg/aptitude/strategy/runner/SvgRunnerD';
import SvgRunnerE from '../svg/aptitude/strategy/runner/SvgRunnerE';
import SvgRunnerF from '../svg/aptitude/strategy/runner/SvgRunnerF';
import SvgRunnerG from '../svg/aptitude/strategy/runner/SvgRunnerG';

import SvgLeaderA from '../svg/aptitude/strategy/leader/SvgLeaderA';
import SvgLeaderB from '../svg/aptitude/strategy/leader/SvgLeaderB';
import SvgLeaderC from '../svg/aptitude/strategy/leader/SvgLeaderC';
import SvgLeaderD from '../svg/aptitude/strategy/leader/SvgLeaderD';
import SvgLeaderE from '../svg/aptitude/strategy/leader/SvgLeaderE';
import SvgLeaderF from '../svg/aptitude/strategy/leader/SvgLeaderF';
import SvgLeaderG from '../svg/aptitude/strategy/leader/SvgLeaderG';

import SvgBetweenerA from '../svg/aptitude/strategy/betweener/SvgBetweenerA';
import SvgBetweenerB from '../svg/aptitude/strategy/betweener/SvgBetweenerB';
import SvgBetweenerC from '../svg/aptitude/strategy/betweener/SvgBetweenerC';
import SvgBetweenerD from '../svg/aptitude/strategy/betweener/SvgBetweenerD';
import SvgBetweenerE from '../svg/aptitude/strategy/betweener/SvgBetweenerE';
import SvgBetweenerF from '../svg/aptitude/strategy/betweener/SvgBetweenerF';
import SvgBetweenerG from '../svg/aptitude/strategy/betweener/SvgBetweenerG';

import SvgChaserA from '../svg/aptitude/strategy/chaser/SvgChaserA';
import SvgChaserB from '../svg/aptitude/strategy/chaser/SvgChaserB';
import SvgChaserC from '../svg/aptitude/strategy/chaser/SvgChaserC';
import SvgChaserD from '../svg/aptitude/strategy/chaser/SvgChaserD';
import SvgChaserE from '../svg/aptitude/strategy/chaser/SvgChaserE';
import SvgChaserF from '../svg/aptitude/strategy/chaser/SvgChaserF';
import SvgChaserG from '../svg/aptitude/strategy/chaser/SvgChaserG';

import '../../styles/modal/selectBox.css';

export default function ModalSelectAptitude(props) {
  return (
    <>
      <div className="p-4 w-full flex justify-center items-center">
        <div className="p-1 min-w-640 max-w-3xl w-3/4 grid grid-cols-5 gap-2">
          <div>
            <SvgSurface></SvgSurface>
          </div>
          <div>
            {(() => {
              switch (props.surface.turf) {
                case 'A':
                  return <SvgSurfaceA></SvgSurfaceA>;
                case 'B':
                  return <SvgSurfaceB></SvgSurfaceB>;
                case 'C':
                  return <SvgSurfaceC></SvgSurfaceC>;
                case 'D':
                  return <SvgSurfaceD></SvgSurfaceD>;
                case 'E':
                  return <SvgSurfaceE></SvgSurfaceE>;
                case 'F':
                  return <SvgSurfaceF></SvgSurfaceF>;
                default:
                  return <SvgSurfaceG></SvgSurfaceG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.surface.dirt) {
                case 'A':
                  return <SvgDirtA></SvgDirtA>;
                case 'B':
                  return <SvgDirtB></SvgDirtB>;
                case 'C':
                  return <SvgDirtC></SvgDirtC>;
                case 'D':
                  return <SvgDirtD></SvgDirtD>;
                case 'E':
                  return <SvgDirtE></SvgDirtE>;
                case 'F':
                  return <SvgDirtF></SvgDirtF>;
                default:
                  return <SvgDirtG></SvgDirtG>;
              }
            })()}
          </div>
          <div className="select w-full">
            <div className="selected">
              <div>
                <SvgDirtA></SvgDirtA>
              </div>
            </div>
            <ul>
              <li>
                <SvgDirtA></SvgDirtA>
              </li>
              <li className="option">
                <SvgDirtB></SvgDirtB>
              </li>
              <li className="option">
                <SvgDirtC></SvgDirtC>
              </li>
              <li className="option">
                <SvgDirtD></SvgDirtD>
              </li>
              <li className="option">
                <SvgDirtE></SvgDirtE>
              </li>
              <li className="option">
                <SvgDirtF></SvgDirtF>
              </li>
              <li className="option">
                <SvgDirtG></SvgDirtG>
              </li>
            </ul>
          </div>

          <div></div>
          <div>
            <SvgDistance></SvgDistance>
          </div>
          <div>
            {(() => {
              switch (props.distance._short) {
                case 'A':
                  return <SvgShortA></SvgShortA>;
                case 'B':
                  return <SvgShortB></SvgShortB>;
                case 'C':
                  return <SvgShortC></SvgShortC>;
                case 'D':
                  return <SvgShortD></SvgShortD>;
                case 'E':
                  return <SvgShortE></SvgShortE>;
                case 'F':
                  return <SvgShortF></SvgShortF>;
                default:
                  return <SvgShortG></SvgShortG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.distance._mile) {
                case 'A':
                  return <SvgMileA></SvgMileA>;
                case 'B':
                  return <SvgMileB></SvgMileB>;
                case 'C':
                  return <SvgMileC></SvgMileC>;
                case 'D':
                  return <SvgMileD></SvgMileD>;
                case 'E':
                  return <SvgMileE></SvgMileE>;
                case 'F':
                  return <SvgMileF></SvgMileF>;
                default:
                  return <SvgMileG></SvgMileG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.distance._medium) {
                case 'A':
                  return <SvgMediumA></SvgMediumA>;
                case 'B':
                  return <SvgMediumB></SvgMediumB>;
                case 'C':
                  return <SvgMediumC></SvgMediumC>;
                case 'D':
                  return <SvgMediumD></SvgMediumD>;
                case 'E':
                  return <SvgMediumE></SvgMediumE>;
                case 'F':
                  return <SvgMediumF></SvgMediumF>;
                default:
                  return <SvgMediumG></SvgMediumG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.distance._long) {
                case 'A':
                  return <SvgLongA></SvgLongA>;
                case 'B':
                  return <SvgLongB></SvgLongB>;
                case 'C':
                  return <SvgLongC></SvgLongC>;
                case 'D':
                  return <SvgLongD></SvgLongD>;
                case 'E':
                  return <SvgLongE></SvgLongE>;
                case 'F':
                  return <SvgLongF></SvgLongF>;
                default:
                  return <SvgLongG></SvgLongG>;
              }
            })()}
          </div>
          <div>
            <SvgStrategy></SvgStrategy>
          </div>
          <div>
            {(() => {
              switch (props.strategy.runner) {
                case 'A':
                  return <SvgRunnerA></SvgRunnerA>;
                case 'B':
                  return <SvgRunnerB></SvgRunnerB>;
                case 'C':
                  return <SvgRunnerC></SvgRunnerC>;
                case 'D':
                  return <SvgRunnerD></SvgRunnerD>;
                case 'E':
                  return <SvgRunnerE></SvgRunnerE>;
                case 'F':
                  return <SvgRunnerF></SvgRunnerF>;
                default:
                  return <SvgRunnerG></SvgRunnerG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.strategy.leader) {
                case 'A':
                  return <SvgLeaderA></SvgLeaderA>;
                case 'B':
                  return <SvgLeaderB></SvgLeaderB>;
                case 'C':
                  return <SvgLeaderC></SvgLeaderC>;
                case 'D':
                  return <SvgLeaderD></SvgLeaderD>;
                case 'E':
                  return <SvgLeaderE></SvgLeaderE>;
                case 'F':
                  return <SvgLeaderF></SvgLeaderF>;
                default:
                  return <SvgLeaderG></SvgLeaderG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.strategy.betweener) {
                case 'A':
                  return <SvgBetweenerA></SvgBetweenerA>;
                case 'B':
                  return <SvgBetweenerB></SvgBetweenerB>;
                case 'C':
                  return <SvgBetweenerC></SvgBetweenerC>;
                case 'D':
                  return <SvgBetweenerD></SvgBetweenerD>;
                case 'E':
                  return <SvgBetweenerE></SvgBetweenerE>;
                case 'F':
                  return <SvgBetweenerF></SvgBetweenerF>;
                default:
                  return <SvgBetweenerG></SvgBetweenerG>;
              }
            })()}
          </div>
          <div>
            {(() => {
              switch (props.strategy.chaser) {
                case 'A':
                  return <SvgChaserA></SvgChaserA>;
                case 'B':
                  return <SvgChaserB></SvgChaserB>;
                case 'C':
                  return <SvgChaserC></SvgChaserC>;
                case 'D':
                  return <SvgChaserD></SvgChaserD>;
                case 'E':
                  return <SvgChaserE></SvgChaserE>;
                case 'F':
                  return <SvgChaserF></SvgChaserF>;
                default:
                  return <SvgChaserG></SvgChaserG>;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
}
