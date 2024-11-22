import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 pb-48">
      <div className="flex flex-col md:flex-row mx-auto mb-20 gap-8">
        <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-[18px] font-semibold text-[#000000] mb-2">Subscribe to our newsletter</h3>
          <p className="text-[16px] mb-6 font-[400] text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 md:pl-16">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[265px] h-[45px] p-[12px] border-[1px] rounded-md border-[#000000] text-[16px] text-[#505050]"
            />
            <button className="w-full sm:w-[119px] h-[49px] text-[#000000] text-[16px] px-6 py-2 border-[1px] border-[#000000] rounded-md">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-center md:text-left text-[16px]">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-10">
        {/* Logo */}
        <div className="w-full md:w-auto">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={130.6}
            height={30.38}
          />
        </div>

        {/* Courses Section */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="font-semibold text-black text-lg mb-2">Courses</h4>
          <div className="space-y-2 text-sm">
            <h2>Business</h2>
            <h2>Development</h2>
            <h2>Technology</h2>
            <h2>Design</h2>
            <h2>Programming</h2>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="font-semibold text-black text-lg mb-2">Resources</h4>
          <div className="space-y-2 text-sm">
            <h2>Career</h2>
            <h2>Resume</h2>
            <h2>Learning</h2>
            <h2>Interview Preparation</h2>
            <h2>Jobs</h2>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="font-semibold text-black text-lg mb-2">About Us</h4>
          <div className="space-y-2 text-sm mb-10">
            <h2>Contact</h2>
            <h2>Help/Support</h2>
            <h2>FAQ</h2>
            <h2>Terms and Conditions</h2>
            <h2>Partners</h2>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#000000] pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-[14px] text-[#000000]">2023 Ddsgnr. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="text-[#000000]">Privacy Policy</a>
          <a href="#" className="text-[#000000]">Terms of Service</a>
          <a href="#" className="text-[#000000]">Cookies Settings</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF size={18} color="#000000" />
          <FaInstagram size={18} color="#000000" />
          <FaTwitter size={18} color="#000000" />
          <FaLinkedin size={18} color="#000000" />
        </div>
      </div>
    </footer>
  );
}
