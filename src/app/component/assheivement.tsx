export default function Assheivement() {
  return (
    <div className="w-full lg:w-[1280px] h-auto px-[16px] lg:px-[64px] py-[56px] lg:py-[112px] gap-[40px] lg:gap-[80px] mx-auto">
      <div className="w-full lg:w-[1152px] h-auto gap-[16px] lg:gap-[32px] mx-auto">
        {/* Heading Section */}
        <h1 className="text-[#000000] text-[28px] sm:text-[36px] lg:text-[57.6px] text-center font-bold">
          Our Achievements
        </h1>
        <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[1152px] text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        {/* Achievements Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-[40px] sm:gap-[64px] lg:gap-[200px] mt-10">
          {/* Single Achievement */}
          <div className="flex flex-col items-center">
            <h3 className="text-[#000000] text-[28px] sm:text-[32px] lg:text-[40px] font-bold">+200</h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Courses</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#000000] text-[28px] sm:text-[32px] lg:text-[40px] font-bold">50K</h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Mentors</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#000000] text-[28px] sm:text-[32px] lg:text-[40px] font-bold">370K</h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Students</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#000000] text-[28px] sm:text-[32px] lg:text-[40px] font-bold">100+</h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[16px]">Recognition</p>
          </div>
        </div>
      </div>
    </div>
  );
}
