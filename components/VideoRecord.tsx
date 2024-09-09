import React from "react";

const VideoRecord = () => {
  return (
    <div className="max-md:hidden relative z-[1] h-full rounded-full overflow-hidden w-fit border-[5px] border-gray-200">
      <div className="absolute bottom-0 -right-4 z-[3]">
        <video autoPlay loop muted className="w-[300px] h-full object-cover ">
          <source src="/record.mp4" type="video/mp4" />
        </video>
      </div>
      <video
        autoPlay
        loop
        muted
        className="w-[300px] h-full object-cover rounded-full z-[2]"
      >
        <source src="/sky.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoRecord;
