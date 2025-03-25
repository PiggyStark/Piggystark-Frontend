import React from 'react';
import Image from 'next/image';
import Hand from '../../public/Hand.png';
import wave from '../../public/wave.svg';
import Twitter from '../../public/x.webp';
import Privacy from '../../public/privacy.webp';
import Lock from '../../public/privacy.webp';



const Footer = () => {
    return (
        <div>
            <footer className="relative">
                <div className="relative w-[1256px] h-[613.73px] mx-auto mt-[63.64px] rounded-[78px] overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={wave}
                        alt="Background"
                        className="w-full h-auto object-cover"
                        priority
                    />
                    {/* Main Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight unbounded">
                            Start saving and grow your wealth<br />with PiggyStark
                        </h2>
                        <button className="mt-8 bg-white text-black font-semibold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors text-lg relative">
                            Get started
                        </button>
                        {/* 3D Hand Illustration */}
                        <div className="absolute top-[50%] right-[24%]">
                            <Image
                                width={200}
                                height={144}
                                src={Hand}
                                alt="3D hand illustration"
                                className="w-[350px] h-full object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </footer>

            <div className='flex justify-center gap-20 mt-20'>
                <div className='flex items-center gap-2 bg-[#fff6f1] text-black font-bold px-4 py-2 outline-2 outline-solid outline-[#db440c] rounded-xl'>
                    <Image src={Twitter} alt='Twitter' width={28} height={28} />
                    <p>Twitter</p>
                </div>
                <div className='flex items-center gap-2 bg-[#fff6f1] text-black font-bold px-4 py-2 outline-2 outline-solid outline-[#db440c] rounded-xl'>
                    <Image src={Privacy} alt='Twitter' width={28} height={28} />
                    <p>Term of use</p>
                </div>
                <div className='flex items-center gap-2 bg-[#fff6f1] text-black font-bold px-4 py-2 outline-2 outline-solid outline-[#db440c] rounded-xl'>
                    <Image src={Lock} alt='Twitter' width={28} height={28} />
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;