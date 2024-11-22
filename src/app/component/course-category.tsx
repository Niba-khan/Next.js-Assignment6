import React from 'react';
import Image from 'next/image';

export default function CourseCategory() {
  return (
    <div className="bg-[#FFFFFF] w-full max-w-[1280px] gap-[64px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-16">
      {/* Heading Section */}
      <div className="w-full text-center mb-[40px]">
        <h2 className="text-[#000000] text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.2]">
          Explore Courses By Category
        </h2>
        <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-[64px] sm:mt-[80px] lg:mt-[96px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[16px] md:gap-[24px] lg:gap-[32px]">
          {/* Card 1 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/iicon1.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
                Design & Development
              </h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon2.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Marketing</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon3.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Development</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon4.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Communication</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon5.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Digital Marketing</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon6.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Self Development</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon7.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Business</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon8.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Finance</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px]">
            <Image src="/images/icon9.png" alt="icon" width={80} height={80} className="mb-4 sm:mb-0 sm:mr-[16px]" />
            <div className="text-center sm:text-left">
              <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">Consulting</h3>
              <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="flex justify-center mt-[32px]">
          <button className="border-[1px] border-[#000000] px-[16px] py-[10px] bg-[#FFFFFF] text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] font-medium">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
