import React from "react";
import { MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="max_padd_container w-full relative flexCenter"
      id="home"
    >
      <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10">
        <video
          src={"./video.mp4"}
          muted
          autoPlay
          loop
          className="absolute h-full w-full top-0 bottom-0 object-cover"
        ></video>
      </div>
      {/* content */}

      <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
        <div className="px-0 py-32 text-white ">
          <span className="uppercase regular-18">
            TRAVEL TO ANY CORNER OF THE WORLD
          </span>
          <h2 className="h2 max-w-[777px]">Make Your Tour Amazing With Us</h2>
        </div>

        {/* form */}
        {/* <div>
          <div className="text-center">
            <span className="bg-white text-tertiary medium-16 py-4 rounded-l-xl rounded-r-xl px-12">
              Search for Your Trip
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 px-6 py-10 md:px-12 bg-white rounded-xl">
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="city" className="block text-gray-50 pb-2">
                Search your destination :
              </label>
              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="text"
                  placeholder="Enter name here..."
                  className="bg-transparent border-none outline-none w-full regular-10"
                />
                <MdLocationPin className="text-lg" />
              </div>
            </div>

            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="date" className="block text-gray-50 pb-2">
                Select your date :
              </label>
              <div className="flexCenter h-10 px-4 bg-primary rrounded-full w-full">
                <input
                  type="date"
                  className="bg-transparent border-none outline-none w-full regular-14"
                />
              </div>
            </div>

            <div className="flex flex-col w-full xl:px-6">
              <div className="flexBetween items-center">
                <label htmlFor="price" className="block text-gray-50 pb-2">
                  Max price :
                </label>
                <h4>$5000</h4>
              </div>

              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="range"
                  max={"5000"}
                  min={"1000"}
                  className="border-none outline-none w-full regular-14"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
