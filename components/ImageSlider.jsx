"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/degree1.png",
  "/principle.jpeg",
  "/degree3.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function ImageSlider() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1, true), 8000);
  };

  const paginate = (dir, fromAuto = false) => {
    setCurrent(([prev]) => {
      const newIndex = (prev + dir + images.length) % images.length;
      return [newIndex, dir];
    });
    if (!fromAuto) startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    const handleVisibility = () => {
      if (document.hidden) clearInterval(intervalRef.current);
      else startAutoSlide();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative w-full h-[470px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={images[current]}
          src={images[current]}
          custom={direction}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? "100%" : "-100%",
            }),
            center: {
              x: 0,
            },
            exit: (direction) => ({
              x: direction > 0 ? "-100%" : "100%",
            }),
          }}
          
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 1,
          }}
          className="absolute w-full h-full object-cover top-0 left-0"
        />
      </AnimatePresence>


      <div
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-opacity-60"
      >
        <ChevronLeft size={24} />
      </div>

      <div
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-opacity-60"
      >
        <ChevronRight size={24} />
      </div>
    </div>
  );
}
