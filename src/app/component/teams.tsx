import Image from "next/image";
import { FaDribbble, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  return (
    <div className="bg-[#F7F7F7] px-[16px] sm:px-[64px] py-[64px] sm:py-[112px]">
      <div className="text-center mb-24">
        <h2 className="text-[36px] sm:text-[48px] text-[#000000] font-[700] mb-4">Our Team</h2>
        <p className="text-[#000000] text-[16px] sm:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team1.png"
            alt="Team1"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">James Nduku</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">Marketing Coordinator</p>
          <div className="flex gap-[16px] mt-4 justify-center">
            <FaLinkedin size={18} color="#000000" />
            <FaTwitter size={18} color="#000000" />
            <FaDribbble size={18} color="#000000" />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team2.png"
            alt="Team2"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Joseph Munyambu</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">Nursing Assistant</p>
          <div className="flex gap-[16px] mt-4 justify-center">
            <FaLinkedin size={18} color="#000000" />
            <FaTwitter size={18} color="#000000" />
            <FaDribbble size={18} color="#000000" />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team3.png"
            alt="Team3"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Joseph Ngumbau</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">Medical Assistant</p>
          <div className="flex gap-[16px] mt-4 justify-center">
            <FaLinkedin size={18} color="#000000" />
            <FaTwitter size={18} color="#000000" />
            <FaDribbble size={18} color="#000000" />
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team4.png"
            alt="Team4"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Erick Kipkemboi</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">Web Designer</p>
        </div>

        {/* Team Member 5 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team5.png"
            alt="Team5"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">Stephen Kerubo</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">President of Sales</p>
        </div>

        {/* Team Member 6 */}
        <div className="w-full text-center flex flex-col items-center justify-center">
          <Image
            src="/images/team6.png"
            alt="Team6"
            height={80}
            width={80}
            className="object-cover mb-4"
          />
          <h1 className="text-[18px] sm:text-[20px] text-[#000000] font-[600]">John Leboo</h1>
          <p className="text-[16px] sm:text-[18px] text-[#000000] font-[400]">Dog Trainer</p>
        </div>
      </div>
    </div>
  );
}
