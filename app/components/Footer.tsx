import React from 'react';
import Image from 'next/image';
import Finger from '../../public/Finger.png';
import Twitter from '../../public/x.png';
import Lock from '../../public/lock.png';
import Privacy from '../../public/privacy.png';

const Footer = () => {
    return (
        <div>
            <footer className='relative'>
                <div className="bg-[#1c1a1e] text-white overflow-hidden mt-20 w-[90vw] mx-auto">
                    {/* Wavy Top*/}
                    <div className="absolute top-[-20%] right-[5%] w-[90vw] mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className="w-full h-[150px]"
                            preserveAspectRatio="none"
                            style={{ transform: 'rotate(0deg)' }}
                        >
                            <path
                                fill="#1c1a1e"
                                d="M0,192L10,186C20,180,40,168,60,165C80,162,100,168,120,174C140,180,160,186,180,183C200,180,220,168,240,165C260,162,280,168,300,174C320,180,340,186,360,183C380,180,400,168,420,165C440,162,460,168,480,174C500,180,520,186,540,183C560,180,580,168,600,165C620,162,640,168,660,174C680,180,700,186,720,183C740,180,760,168,780,165C800,162,820,168,840,174C860,180,880,186,900,183C920,180,940,168,960,165C980,162,1000,168,1020,174C1040,180,1060,186,1080,183C1100,180,1120,168,1140,165C1160,162,1180,168,1200,174C1220,180,1240,186,1260,183C1280,180,1300,168,1320,165C1340,162,1360,168,1380,174C1400,180,1420,186,1430,189L1440,192L1440,320L1430,320C1420,320,1380,320,1360,320C1340,320,1320,320,1300,320C1280,320,1260,320,1240,320C1220,320,1200,320,1180,320C1160,320,1140,320,1120,320C1100,320,1080,320,1060,320C1040,320,1020,320,1000,320C980,320,960,320,940,320C920,320,900,320,880,320C860,320,840,320,820,320C800,320,780,320,760,320C740,320,720,320,700,320C680,320,660,320,640,320C620,320,600,320,580,320C560,320,540,320,520,320C500,320,480,320,460,320C440,320,420,320,400,320C380,320,360,320,340,320C320,320,300,320,280,320C260,320,240,320,220,320C200,320,180,320,160,320C140,320,120,320,100,320C80,320,60,320,40,320C20,320,10,320,0,320Z"
                            ></path>
                        </svg>
                    </div>

                    {/* Main Content - COMPLETELY UNCHANGED */}
                    <div className="container mx-auto px-6 text-center pt-24 pb-28 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Start saving and grow your wealth<br />with PiggyStark
                        </h2>
                        <div>
                            <button className="mt-8 bg-white text-black font-semibold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors text-lg relative">
                                Get started
                            </button>
                            {/* 3D Hand Illustration */}
                            <div className="w-fit absolute top-[65%] right-[39%]">
                                <Image
                                    width={200}
                                    height={144}
                                    src={Finger}
                                    alt="3D hand illustration"
                                    className="w-[130px] h-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Wavy Bottom */}
                    <div className="absolute bottom-[-25%] w-[90vw] mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className="w-full h-[150px]"
                            preserveAspectRatio="none"
                            style={{ transform: 'rotate(180deg)' }}
                        >
                            <path
                                fill="#1c1a1e"
                                d="M0,192L10,186C20,180,40,168,60,165C80,162,100,168,120,174C140,180,160,186,180,183C200,180,220,168,240,165C260,162,280,168,300,174C320,180,340,186,360,183C380,180,400,168,420,165C440,162,460,168,480,174C500,180,520,186,540,183C560,180,580,168,600,165C620,162,640,168,660,174C680,180,700,186,720,183C740,180,760,168,780,165C800,162,820,168,840,174C860,180,880,186,900,183C920,180,940,168,960,165C980,162,1000,168,1020,174C1040,180,1060,186,1080,183C1100,180,1120,168,1140,165C1160,162,1180,168,1200,174C1220,180,1240,186,1260,183C1280,180,1300,168,1320,165C1340,162,1360,168,1380,174C1400,180,1420,186,1430,189L1440,192L1440,320L1430,320C1420,320,1380,320,1360,320C1340,320,1320,320,1300,320C1280,320,1260,320,1240,320C1220,320,1200,320,1180,320C1160,320,1140,320,1120,320C1100,320,1080,320,1060,320C1040,320,1020,320,1000,320C980,320,960,320,940,320C920,320,900,320,880,320C860,320,840,320,820,320C800,320,780,320,760,320C740,320,720,320,700,320C680,320,660,320,640,320C620,320,600,320,580,320C560,320,540,320,520,320C500,320,480,320,460,320C440,320,420,320,400,320C380,320,360,320,340,320C320,320,300,320,280,320C260,320,240,320,220,320C200,320,180,320,160,320C140,320,120,320,100,320C80,320,60,320,40,320C20,320,10,320,0,320Z"
                            ></path>
                        </svg>
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