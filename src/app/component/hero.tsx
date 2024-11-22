import Image from "next/image";

export default function Hero() {
  return (
  <div className="flex flex-col items-center bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full lg:w-[1280px] px-4 md:px-8">
     
        <div className="flex flex-col w-full md:w-1/2 gap-[24px] text-center md:text-left">
          <h1 className="text-[#000000] text-[40px] sm:text-[48px] md:text-[56px] font-bold w-full md:w-[500px]">
            Learn new skills online with ease
          </h1>
          <p className="text-[#000000] text-[16px] sm:text-[18px] w-full md:w-[500px]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>

          <div className="flex flex-col sm:flex-row gap-[16px] mt-[16px] items-center md:items-start">
            <button className="bg-[#000000] w-full sm:w-[180px] h-[48px] rounded-md text-[16px] text-[#FFFFFF]">
              Start learning now
            </button>
            <button className="w-full sm:w-[180px] h-[48px] rounded-md text-[#000000] text-[16px] border-[1px] border-[#000000]">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/images/heroimage.png"
            alt="Hero Image"
            width={680}
            height={900}
            className="md:ml-[32px] sm:max-w-[100%]"
          />
        </div>
      </div>

  
      <div className="w-full md:w-[1430px] h-auto mx-auto px-8 py-[60px] bg-[#F7F7F7] flex items-center justify-center sm:justify-start mb-20 md:mb-72">
        {/* Heading */}
        <h5 className="text-[24px] text-[#000000] font-bold text-center md:text-left w-[320px] sm:w-[350px]">
          Trusted by 2000+ companies worldwide.
        </h5>

        {/* Logo */}
        <div className="flex flex-wrap justify-center px-[64px] ml-[20px] sm:ml-[30px] gap-[20px] items-center mt-4 sm:mt-0">
          <Image
            src="/images/logo1.png"
            alt="Company Logo 1"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo2.png"
            alt="Company Logo 2"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo3.png"
            alt="Company Logo 3"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo4.png"
            alt="Company Logo 4"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo5.png"
            alt="Company Logo 5"
            width={124}
            height={39}
          />
          <Image
            src="/images/logo6.png"
            alt="Company Logo 6"
            width={124}
            height={39}
          />
        </div>
      </div>
    </div>
  );
}
