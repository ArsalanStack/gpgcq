"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const shuffleArray = array => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 4000
  const columnDelay = index * 200
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  const currentLogo = useMemo(() => logos[currentIndex], [logos, currentIndex])

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}>
          <img
            src={currentLogo.img}
            alt={currentLogo.alt}
            className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
})

// Hook to detect screen size and return appropriate column count
const useResponsiveColumnCount = (mobileColumns = 3, desktopColumns = 2) => {
  const [columnCount, setColumnCount] = useState(desktopColumns)

  useEffect(() => {
    const checkScreenSize = () => {
      // Using 768px as the breakpoint (md in Tailwind)
      const isMobile = window.innerWidth < 768
      setColumnCount(isMobile ? mobileColumns : desktopColumns)
    }

    // Check on mount
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [mobileColumns, desktopColumns])

  return columnCount
}

export function LogoCarousel({
  columnCount, // This prop is now optional and will be overridden by responsive behavior
  mobileColumnCount = 3,
  desktopColumnCount = 4, // Changed default to match your current usage
  logos
}) {
  // Always use responsive column count (ignore columnCount prop for responsive behavior)
  const responsiveColumnCount = useResponsiveColumnCount(mobileColumnCount, desktopColumnCount)
  const finalColumnCount = responsiveColumnCount

  const [logoSets, setLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId);
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, finalColumnCount)
    setLogoSets(distributedLogos)
  }, [logos, finalColumnCount])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
      ))}
    </div>
  );
}

export { LogoColumn };