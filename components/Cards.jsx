'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

function PersonCard({ direction, image, titlePrefix, titleName, description, readMoreLink }) {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-lg md:flex-row items-center mx-auto"
    >
      <div className="w-full md:w-full">
        <img
          src={image}
          alt={titleName}
          className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"
          style={{
            maxHeight: '400px',
            objectFit: 'fill',
          }}
        />
      </div>
      <div className="w-full md:w-full p-4 flex flex-col">
        <h3 className="text-sm md:text-lg text-gray-700 mb-1">{titlePrefix}</h3>
        <h2 className="text-base md:text-lg font-semibold text-[var(--primary-background)] mb-2">{titleName}</h2>
        <p className="text-gray-600 text-xs md:text-sm mb-3">{description}</p>
        {readMoreLink && (
          <a
            href={readMoreLink}
            className="px-4 py-2 cursor-pointer bg-[var(--primary-background)] text-white border border-[var(--secondry-color)] rounded-md text-xs md:text-sm transition duration-200 hover:bg-[var(--secondry-color)] hover:text-[var(--primary-background)] hover:border-[var(--primary-background)] mt-auto text-center"
          >
            Read More
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-22 items-center justify-center p-6 w-full max-w-7xl mx-auto">
      <PersonCard
        direction="left"
        image="/principle1.jpg"
        titlePrefix="Principle"
        titleName="Prof: Abdul Razik Sabir Pirkani"
        description="Dedicated to innovation and growth of the GPGCQ sariab."
        readMoreLink="/alex-johnson"
      />
      <PersonCard
        direction="right"
        image="https://randomuser.me/api/portraits/women/50.jpg"
        titlePrefix="Leader Two"
        titleName="Sarah Williams"
        description="Focused on community development and sustainability."
        readMoreLink="/sarah-williams"
      />
    </div>
  );
}