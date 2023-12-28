import SvgAptitudeSpeed from '../svg/blue/SvgAptitudeSpeed';
import SvgAptitudeStamina from '../svg/blue/SvgAptitudeStamina';
import SvgAptitudePower from '../svg/blue/SvgAptitudePower';
import SvgAptitudeGuts from '../svg/blue/SvgAptitudeGuts';
import SvgAptitudeWisdom from '../svg/blue/SvgAptitudeWisdom';

import SvgAptitudeDirt from '../svg/red/surface/SvgAptitudeDirt';
import SvgAptitudeTurf from '../svg/red/surface/SvgAptitudeTurf';

import SvgAptitudeShort from '../svg/red/distance/SvgAptitudeShort';
import SvgAptitudeMedium from '../svg/red/distance/SvgAptitudeMedium';
import SvgAptitudeLong from '../svg/red/distance/SvgAptitudeLong';

import SvgAptitudeRunner from '../svg/red/strategy/SvgAptitudeRunner';

import SvgAptitudeGreen from '../svg/green/SvgAptitudeGreen';
import SvgParent from '../svg/umamusume/SvgParent';
import SvgPlus from '../svg/icon/SvgPlus';

function ParentUmamusume() {
  return (
    <>
      <div className="p-4 pt-0 w-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-3/4 min-w-640 max-w-3xl">
          <div className="border-2 border-sky-400 w-full">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-1/4 h-1/2 ml-[15%] flex">
                <div className="w-1/2 h-1/2 border-b-2 border-gray-400"></div>
                <div className="w-1/2 h-full border-t-2 border-b-2 border-l-2 border-gray-400"></div>
              </div>
              <div className="absolute w-[48%] left-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  <SvgParent id="100501"></SvgParent>
                </div>
                <div className="absolute w-[36%] -bottom-3 left-0">
                  <SvgAptitudeSpeed></SvgAptitudeSpeed>
                </div>
                <div className="absolute w-[36%] -bottom-3 left-[32.5%]">
                  <SvgAptitudeMedium></SvgAptitudeMedium>
                </div>
                <div className="absolute w-[36%] -bottom-3 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
              <div className="absolute w-[32%] top-[10%] right-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  <SvgParent id="100601"></SvgParent>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudePower></SvgAptitudePower>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeLong></SvgAptitudeLong>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
              <div className="absolute w-[32%] bottom-[10%] right-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  <SvgParent id="100701"></SvgParent>
                </div>

                <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudeStamina></SvgAptitudeStamina>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeShort></SvgAptitudeShort>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-pink-400 rounded w-full">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-1/4 h-1/2 ml-[15%] flex">
                <div className="w-1/2 h-1/2 border-b-2 border-gray-400"></div>
                <div className="w-1/2 h-full border-t-2 border-b-2 border-l-2 border-gray-400"></div>
              </div>
              <div className="absolute w-[48%] left-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  {/* <SvgParent id="100201"></SvgParent> */}
                  <SvgPlus></SvgPlus>
                </div>
                {/* <div className="absolute w-[36%] -bottom-3 left-0">
                  <SvgAptitudeGuts></SvgAptitudeGuts>
                </div>
                <div className="absolute w-[36%] -bottom-3 left-[32.5%]">
                  <SvgAptitudeTurf></SvgAptitudeTurf>
                </div>
                <div className="absolute w-[36%] -bottom-3 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div> */}
              </div>
              <div className="absolute w-[32%] top-[10%] right-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  <SvgPlus></SvgPlus>
                  {/* <SvgParent id="100301"></SvgParent> */}
                </div>
                {/* <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudeWisdom></SvgAptitudeWisdom>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeRunner></SvgAptitudeRunner>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div> */}
              </div>
              <div className="absolute w-[32%] bottom-[10%] right-[4%]">
                <div className="bg-white border border-gray-400 rounded-full">
                  <SvgPlus></SvgPlus>
                  {/* <SvgParent id="100401"></SvgParent> */}
                </div>
                {/* <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudeSpeed></SvgAptitudeSpeed>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeDirt></SvgAptitudeDirt>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentUmamusume;
