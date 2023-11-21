function ParentUmamusume() {
  return (
    <>
      <div className="p-8 min-w-640 grid grid-cols-2 gap-4">
        <div className="relative border border-sky-400 min-w-280 min-h-280">
          <div className="flex absolute justify-center items-center">
            <div className="bg-slate-400">
              <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100501.png`} alt={100501}></img>
            </div>
            <div className="bg-red-400">
              <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100601.png`} alt={100601}></img>
            </div>
            <div className="bg-blue-400">
              <img className="" src={`${process.env.PUBLIC_URL}/images/umamusume/100701.png`} alt={100701}></img>
            </div>
          </div>
        </div>

        <div className="border border-pink-400 min-w-280 min-h-280">
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
    </>
  );
}

export default ParentUmamusume;
