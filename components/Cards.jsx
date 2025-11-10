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
      </div>
    </motion.div>
    
  );
}

export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-20 items-center justify-center p-6 w-full max-w-7xl mx-auto">
      <PersonCard
        direction="left"
        image="/principle1.jpg"
        titlePrefix="Principle"
        titleName="Prof: Abdul Razik Sabir Pirkani"
        description="Dedicated to innovation and growth of the GPGCQ sariab."
        readMoreLink="/abdul-Razik-Sabir-Pirkani"
      />
      <PersonCard
        direction="right"
        image="/vice-principle.jpg"
        titlePrefix="Vice Principle"
        titleName="Prof: Bashir Mengal"
        description="Focused on community development and sustainability."
        readMoreLink="/Bashir-Mengal"
      />
    </div>
  );
}