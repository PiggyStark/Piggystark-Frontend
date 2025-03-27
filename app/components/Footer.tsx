import Image, { StaticImageData } from 'next/image';
import { socialLinks } from 'app/constants/socials';
import Link from 'next/link';

interface SocialLink {
  name: string;
  icon: StaticImageData;
  url: string;
  alt: string;
}

// Type the imported socialLinks using the interface
const typedSocialLinks: SocialLink[] = socialLinks;

const Footer = () => {
  return (
    <div className='py-8'>
      <footer className="relative">
        <div className="relative w-full max-w-[1256px] h-[613.73px] mx-auto mt-[63.64px] rounded-[78px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/icons/wave.svg"
            alt="Decorative wave background"
            fill
            className="object-cover"
            priority
          />
          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            <h2 className="text-4xl text-white md:text-5xl font-medium mb-6 leading-tight font-display">
              Start saving and grow your wealth<br />with PiggyStark
            </h2>
            <Link
              href="/get-started"
              className="mt-8 font-heading bg-white text-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors text-lg xl:w-[310px]"
              aria-label="Get started with PiggyStark"
            >
              Get started
            </Link>
            {/* 3D Hand Illustration */}
            <div className="absolute top-[50%] right-[24%]">
              <Image
                width={350}
                height={250}
                src="/images/Hand.png"
                alt="3D hand illustration showing money growth"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Social Links */}
      <nav className="flex flex-wrap justify-center gap-4 md:gap-20 mt-20 px-4">
        {typedSocialLinks.map((link: SocialLink, index) => (
          <Link
            key={`social-link-${index}`}
            href={link.url}
            className="flex items-center gap-2 bg-[#fff6f1] text-black font-display font-medium px-4 py-2 outline-1 outline-solid outline-[#db440c] rounded-[20px] hover:bg-[#ffe8d9] transition-colors duration-200"
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.name}
          >
            <Image 
              src={link.icon} 
              alt={link.alt} 
              width={24} 
              height={24} 
              className="shrink-0"
            />
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
      );
    };
    
export default Footer;