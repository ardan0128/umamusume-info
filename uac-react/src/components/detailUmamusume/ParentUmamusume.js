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

function ParentUmamusume() {
  return (
    <>
      <div className="p-4 pt-0 w-full min-w-640 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-3/4">
          <div className="border border-sky-400 w-full">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-[42%] left-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100501.png`} alt={100501}></img>
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
              <div className="absolute w-[28%] top-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100601.png`} alt={100601}></img>
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
              <div className="absolute w-[28%] bottom-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100701.png`} alt={100701}></img>
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

          <div className="border border-pink-400 w-full">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-[42%] left-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100201.png`} alt={100201}></img>
                <div className="absolute w-[36%] -bottom-3 left-0">
                  <SvgAptitudeGuts></SvgAptitudeGuts>
                </div>
                <div className="absolute w-[36%] -bottom-3 left-[32.5%]">
                  <SvgAptitudeTurf></SvgAptitudeTurf>
                </div>
                <div className="absolute w-[36%] -bottom-3 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
              <div className="absolute w-[28%] top-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100301.png`} alt={100301}></img>
                <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudeWisdom></SvgAptitudeWisdom>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeRunner></SvgAptitudeRunner>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
              <div className="absolute w-[28%] bottom-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100401.png`} alt={100401}></img>
                <div className="absolute w-[36%] -bottom-2 left-0">
                  <SvgAptitudeSpeed></SvgAptitudeSpeed>
                </div>
                <div className="absolute w-[36%] -bottom-2 left-[32.5%]">
                  <SvgAptitudeDirt></SvgAptitudeDirt>
                </div>
                <div className="absolute w-[36%] -bottom-2 right-0">
                  <SvgAptitudeGreen></SvgAptitudeGreen>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentUmamusume;
