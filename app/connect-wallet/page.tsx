import React from 'react';
import { Unbounded } from 'next/font/google';
import { Syne } from 'next/font/google';
import Image from 'next/image';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400'],
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400'],
});

export default function ConnectWalletPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center p-4">
      {/* Eclipse superior izquierdo */}
      <div 
        className="absolute hidden sm:block"
        style={{
          width: '532.02px',
          height: '532.02px',
          top: '-174.16px',
          left: '-93.99px',
          background: 'radial-gradient(circle at center, rgba(202, 150, 255, 0.4) 0%, rgba(202, 150, 255, 0.1) 50%, rgba(202, 150, 255, 0) 70%)',
          filter: 'blur(60px)',
          transform: 'scale(1.5)',
          zIndex: 0
        }}
      />

      {/* Eclipse inferior derecho */}
      <div 
        className="absolute hidden sm:block"
        style={{
          width: '459.38px',
          height: '459.38px',
          bottom: '-174.16px',
          right: '-93.99px',
          background: 'radial-gradient(circle at center, rgba(213, 60, 4, 0.3) 0%, rgba(213, 60, 4, 0.1) 50%, rgba(213, 60, 4, 0) 70%)',
          filter: 'blur(60px)',
          transform: 'scale(1.5)',
          zIndex: 0
        }}
      />

      {/* Frame principal */}
      <div 
        className="relative flex flex-col items-center w-full sm:w-[674px] min-h-[430px] p-6 sm:p-[62px_40px] gap-6 sm:gap-10 rounded-[20px] border border-[rgba(0,0,0,0.05)] bg-white z-10"
      >
        {/* Frame interno */}
        <div 
          className="flex flex-col w-full gap-6 sm:gap-8"
        >
          {/* Título principal */}
          <h1 
            className={`${unbounded.className} text-center text-2xl sm:text-[32px] leading-[1.4] sm:leading-[45px] tracking-[0.03em]`}
            style={{
              fontWeight: 400,
            }}
          >
            Start your savings journey
          </h1>

          {/* Subtítulo */}
          <h2 
            className={`${unbounded.className} text-center text-base sm:text-[20px] leading-[1.4] sm:leading-[30px]`}
            style={{
              fontWeight: 400,
            }}
          >
            Connect to PiggyStark
          </h2>

          {/* Frame de wallets */}
          <div 
            className="flex flex-col w-full max-w-[594px] gap-4 sm:gap-[16px] mx-auto mt-4 sm:mt-8"
          >
            {/* Frame Argent */}
            <button
              className="flex items-center w-full hover:opacity-80 transition-opacity rounded-[15px] p-4 sm:p-6 gap-4 sm:gap-[16px] border border-[rgba(0,0,0,0.1)] bg-white"
            >
              <Image 
                src="/icons/argent.jpg"
                alt="Argent Wallet" 
                width={24} 
                height={24}
                className="w-5 sm:w-6 h-5 sm:h-6"
              />
              <span 
                className={`${syne.className} text-base sm:text-[20px] leading-none`}
                style={{
                  fontWeight: 400,
                }}
              >
                Argent
              </span>
            </button>

            {/* Frame Bravoos */}
            <button
              className="flex items-center w-full hover:opacity-80 transition-opacity rounded-[15px] p-4 sm:p-6 gap-4 sm:gap-[16px] border border-[rgba(0,0,0,0.1)] bg-white"
            >
              <Image 
                src="/icons/bravoos.jpg"
                alt="Bravoos Wallet" 
                width={24} 
                height={24}
                className="w-5 sm:w-6 h-5 sm:h-6"
              />
              <span 
                className={`${syne.className} text-base sm:text-[20px] leading-none`}
                style={{
                  fontWeight: 400,
                }}
              >
                Bravoos
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 