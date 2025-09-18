'use client'
import Cards from "@/components/Cards";
import ImageSlider from "@/components/ImageSlider";
import UniversityNewsBoard from "@/components/NewsBoard";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { motion } from 'framer-motion';


const logos = [
  { id: '1', img: '/logo1.png', alt: 'Logo 1' },
  { id: '2', img: '/logo2.png', alt: 'Logo 2' },
  { id: '3', img: '/logo3.png', alt: 'Logo 3' },
  { id: '4', img: '/logo4.png', alt: 'Logo 4' },
  { id: '5', img: '/logo5.png', alt: 'Logo 5' },
];


export default function Home() {
  return (
    <>
      <ImageSlider />
      <Cards />
      <UniversityNewsBoard />
      <div className="relative mt-18 min-h-[150px]">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              style={{ fill: "#831212" }}
              d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <div className="relative z-0 pt-16 pb-24 bg-[var(--primary-background)] flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
            className="text-3xl font-bold text-white shadow-md relative mt-[20px] mb-18 text-center"
          >
            <span className="relative inline-block px-6 py-2">
              <span className="absolute left-0 top-1/2 w-10 h-0.5 bg-white -translate-y-1/2 -translate-x-full"></span>
              <span className="absolute right-0 top-1/2 w-10 h-0.5 bg-white translate-y-1/2 translate-x-full"></span>
              <span className=" mb-8 drop-shadow-sm text-white">PARTNERS</span>
            </span>
          </motion.h2>
          <LogoCarousel
            logos={logos}
            mobileColumnCount={3}
            desktopColumnCount={4}
          />
        </div>
      </div>
    </>
  );
}
