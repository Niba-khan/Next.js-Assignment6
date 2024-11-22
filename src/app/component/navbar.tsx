'use client'

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#F7F7F7]">
            {/* Topbar */}
            <div className="h-[54px] flex items-center justify-between px-4 md:px-[62px] border-b-2 border-[#000000]">
                <div className="flex items-center h-[54px] gap-[16px] md:gap-[32px]">
                    <p className="text-[12px] md:text-[14px] text-[#000000] leading-[2]">
                        Phone Number: 956 742 455 678
                    </p>
                    <div className="hidden md:block border-l-[1px] h-[30px] border-l-[#676767]"></div>
                    <p className="text-[12px] md:text-[14px]">
                        Email: <span>emailme@dsngr.com</span>
                    </p>
                </div>

                <div className="flex gap-[8px] md:gap-[16px]">
                    <FaFacebookF size={18} color="#000000" />
                    <FaInstagram size={18} color="#000000" />
                    <FaTwitter size={18} color="#000000" />
                    <FaLinkedin size={18} color="#000000" />
                </div>
            </div>
            <div className="bg-white h-[20px]"></div>
           
            <div className="bg-[#F7F7F7] border-b-2 border-[#000000]">
                <div className="container mx-auto flex justify-between items-center p-4">
                    
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={130.6}
                            height={30.38}
                            className="h-auto w-auto"
                        />
                    </div>

                    <div className="hidden md:flex bg-[#FFFFFF] w-auto h-[44px] gap-[16px] md:gap-[32px] px-3 items-center">
                        <a href="#" className="text-[#000000]">
                            Home
                        </a>
                        <a href="#" className="text-[#000000]">
                            Courses
                        </a>
                        <a href="#" className="text-[#000000]">
                            Services
                        </a>
                        <a href="#" className="text-[#000000]">
                            Achievement
                        </a>
                        <a href="#" className="text-[#000000]">
                            About Us
                        </a>
                        <a href="#testimonial" className="text-[#000000]">
                            Testimonial
                        </a>

                      
                        <div className="flex gap-[8px] md:gap-[16px] ml-auto items-center">
                            <button className="w-[80px] h-[40px] border-[1px] border-[#000000] rounded-md">
                                Login
                            </button>
                            <button className="w-[95px] h-[40px] bg-[#000000] text-[16px] text-center text-[#FFFFFF] flex justify-center items-center rounded-md">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <span className="bg-[#F7F7F7] text-2xl">&times;</span> 
                        ) : (
                            <span className="bg-[#F7F7F7] text-2xl">&#9776;</span> 
                        )}
                    </button>
                </div>

                {isMenuOpen && (             
                 <div className="container mx-auto flex justify-between items-center p-4">
              
                    <div className="flex flex-col bg-[#F7F7F7] border-t-2 border-[#000000] p-4 md:hidden">
                        <a href="#" className="text-[#000000] py-2">
                            Home
                        </a>
                        <a href="#" className="text-[#000000] py-2">
                            Courses
                        </a>
                        <a href="#" className="text-[#000000] py-2">
                            Services
                        </a>
                        <a href="#" className="text-[#000000] py-2">
                            Achievement
                        </a>
                        <a href="#" className="text-[#000000] py-2">
                            About Us
                        </a>
                        <a href="#" className="text-[#000000] py-2">
                            Testimonial
                        </a>
                        <div className="flex flex-col gap-2 mt-4">
                            <button className="w-[178px] h-[48px] border-[1px] border-[#000000] rounded-md">
                                Login
                            </button>
                            <button className="w-[178px] h-[48px] bg-[#000000] text-[#FFFFFF] rounded-md">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            </div> 
    );
}
