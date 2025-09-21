// @ts-nocheck

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCode,
  FaServer,
  FaRobot,
  FaToolbox,
  FaMicrochip,
} from "react-icons/fa";

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef([]);

  const tabs = [
    { label: "All", icon: <FaGlobe /> },
    { label: "Frontend", icon: <FaCode /> },
    { label: "Backend", icon: <FaServer /> },
    { label: "GenAI", icon: <FaRobot /> },
    { label: "Tools", icon: <FaToolbox /> },
    { label: "Hardware", icon: <FaMicrochip /> },
  ];

  // Update cursor position when selected tab changes or window resizes
  const updatePosition = () => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [selected]);

  return (
    <ul
      onMouseLeave={updatePosition}
      className="scrollbar-hide relative mx-auto flex flex-nowrap overflow-x-auto rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
          icon={tab.icon}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef(
  ({ children, setPosition, onClick, icon }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 flex flex-shrink-0 cursor-pointer items-center gap-1 px-2 py-1 text-xs whitespace-nowrap text-white uppercase mix-blend-difference sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm md:gap-2 md:px-5 md:py-3 md:text-base"
      >
        {icon} {children}
      </li>
    );
  },
);

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-6 cursor-pointer rounded-full bg-black transition-all duration-300 sm:h-8 md:h-12 dark:bg-white"
    />
  );
};
