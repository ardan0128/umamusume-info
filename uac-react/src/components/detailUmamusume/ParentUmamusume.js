import SvgAptitudeSpeed from '../../pages/svg/blue/SvgAptitudeSpeed';
import SvgAptitudeGreen from '../../pages/svg/green/SvgAptitudeGreen';
import SvgAptitudeMedium from '../../pages/svg/red/distance/SvgAptitudeMedium';

function ParentUmamusume() {
  return (
    <>
      <div className="p-8 w-full min-w-640 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-sky-400 w-72">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-[42%] left-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100501.png`} alt={100501}></img>
                <div className="grid grid-cols-3">
                  <SvgAptitudeSpeed></SvgAptitudeSpeed>
                  <div>
                    <SvgAptitudeMedium></SvgAptitudeMedium>
                  </div>
                  <div>
                    <SvgAptitudeGreen></SvgAptitudeGreen>
                  </div>
                </div>
              </div>
              <div className="absolute w-[28%] top-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100601.png`} alt={100601}></img>
              </div>
              <div className="absolute w-[28%] bottom-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100701.png`} alt={100701}></img>
              </div>
            </div>
          </div>

          <div className="border border-pink-400 w-72">
            <div className="flex relative aspect-square justify-center items-center">
              <div className="absolute w-[42%] left-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100201.png`} alt={100201}></img>
              </div>
              <div className="absolute w-[28%] top-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100301.png`} alt={100301}></img>
              </div>
              <div className="absolute w-[28%] bottom-[12%] right-[8%]">
                <img className="rounded-full border border-gray-400" src={`${process.env.PUBLIC_URL}/images/umamusume/100401.png`} alt={100401}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentUmamusume;
