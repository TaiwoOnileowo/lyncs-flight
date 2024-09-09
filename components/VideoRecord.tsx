import React from "react";

const VideoRecord = () => {
  return (
    <div className=" relative z-[1] h-full max-xl:mt-12 rounded-full overflow-hidden w-fit md:border-[5px] border-gray-200">
      <div className="absolute bottom-0 max-xl:-bottom-24 max-xl:-right-16 max-lg:-bottom-32 h-fit max-lg:-right-24 -right-4 z-[3] rounded-xl">
        <video autoPlay loop muted className="w-[300px] h-fit object-cover rounded-xl ">
          <source src="/record.mp4" type="video/mp4" />
        </video>
      </div>
      <video
        autoPlay
        loop
        muted
        className="w-[240px]  lg:w-[300px] h-full object-cover rounded-full z-[2]"
      >
        <source src="/sky.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoRecord;
