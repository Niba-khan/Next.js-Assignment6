import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function CustomerTestimonial() {
  return (
    <div className="bg-[#F7F7F7] w-full h-auto gap-[80px] px-[16px] sm:px-[64px] py-[32px] sm:py-[112px] ">
      <h2 className="text-[32px] sm:text-[48px] font-[700] text-black mb-4">
        Customer testimonials
      </h2>
      <p className="text-[14px] sm:text-[18px] text-[#000000] mb-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] sm:gap-[48px]">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-[362.67px] h-auto border-[1px] border-[#000000] p-[16px] sm:p-[32px] text-center">
          <div className="flex justify-center mb-4">
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
          </div>
          <p className="text-[14px] sm:text-[18px] font-[400] text-[#000000] mb-6">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`
          </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
            <Image
              src="/images/team3.png"
              alt="James Nduku"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-[14px] sm:text-[16px] text-[#000000] font-semibold">James Nduku</h3>
              <p className="text-[14px] sm:text-[16px] text-[#000000]">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full sm:w-[362.67px] h-auto border-[1px] border-[#000000] p-[16px] sm:p-[32px] text-center">
          <div className="flex justify-center mb-4">
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
          </div>
          <p className="text-[14px] sm:text-[18px] font-[400] text-[#000000] mb-6">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`
          </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
            <Image
              src="/images/team1.png"
              alt="Erick Kipkemboi"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-[14px] sm:text-[16px] text-[#000000] font-semibold">Erick Kipkemboi</h3>
              <p className="text-[14px] sm:text-[16px] text-[#000000]">Scrum Master</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full sm:w-[362.67px] h-auto border-[1px] border-[#000000] p-[16px] sm:p-[32px] text-center">
          <div className="flex justify-center mb-4">
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
            <FaStar size={20} color="#000000" />
          </div>
          <p className="text-[14px] sm:text-[18px] font-[400] text-[#000000] mb-6">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`
          </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
            <Image
              src="/images/team6.png"
              alt="Stephen Kerubo"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-[14px] sm:text-[16px] text-[#000000] font-semibold">Stephen Kerubo</h3>
              <p className="text-[14px] sm:text-[16px] text-[#000000]">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-10">
        <Image
          src="/images/cursol.png"
          alt="cursol"
          width={1152}
          height={48}
          className="m-7 mb-10"
        />
      </div>
    </div>
  );
}
