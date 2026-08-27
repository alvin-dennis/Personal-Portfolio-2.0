'use client';
import type { HTMLMotionProps } from 'framer-motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  type CSSProperties,
  type FC,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

type RestMotionProps = Omit<
  HTMLMotionProps<'div'>,
  'initial' | 'animate' | 'whileInView' | 'viewport' | 'transition' | 'variants' | 'style' | 'className' | 'children'
>;

interface AnimatedContentProps extends RestMotionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
}

interface ImageAnimationProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  viewportAmount?: number;
}

interface StaggeredContainerProps extends AnimatedContentProps {
  staggerDelay?: number;
  delayChildren?: number;
}

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const combineClasses = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

// 1. Slide in from left
export const SlideInLeft: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.75,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, x: -32 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 2. Slide in from right
export const SlideInRight: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.75,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, x: 32 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 3. Scale up
export const ScaleUp: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.65,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, scale: 0.88, y: 16 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 4. Rotate in
export const RotateIn: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.8,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 5. Staggered children
export const StaggeredContainer: FC<StaggeredContainerProps> = ({
  children,
  className = '',
  style = {},
  staggerDelay = 0.2,
  delayChildren = 0.1,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: staggerDelay, delayChildren } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className={combineClasses('mx-auto flex flex-nowrap gap-5 md:flex-row', className)}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

// 6. Parallax scroll
export const ParallaxScroll: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 1,
}) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration }}
      style={{ transform: `translateY(${scrollY * 0.3}px)`, ...style }}
    >
      {children}
    </motion.div>
  );
};

// 7. Bounce in
export const BounceIn: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.8,
  ...rest
}) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, scale: 0.3 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: [0.175, 0.885, 0.32, 1.275] }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 8. Reveal text (clip)
export const RevealText: FC<AnimatedContentProps & { viewportAmount?: number }> = ({
  children,
  className = '',
  style = {},
  duration = 1.0,
  viewportAmount = 0.5,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'clip-path', ...style }}
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
    viewport={{ once: true, amount: viewportAmount }}
    transition={{ duration, ease: EASE_OUT }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 9. Floating entrance
export const FloatingAnimation: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.8,
  ...rest
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: EASE_OUT }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

// 10. Magnetic hover
export const MagneticHover: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 0.3,
}) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    whileTap={{ scale: 0.95 }}
    viewport={{ once: true }}
    transition={{ duration }}
  >
    {children}
  </motion.div>
);

// 11. Image zoom out→in
export const ImageZoomOutIn: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 1.5,
  ...rest
}) => (
  <motion.div
    className={combineClasses('overflow-hidden', className)}
    style={style}
    initial={{ scale: 1.2, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: 'easeOut' }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 12. Image zoom in→out
export const ImageZoomInOut: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 1.2,
}) => (
  <motion.div
    className={combineClasses('overflow-hidden', className)}
    style={style}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1.1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// 13. Continuous zoom (breathing)
export const ContinuousZoom: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 4,
}) => (
  <motion.div
    className={combineClasses('overflow-hidden', className)}
    style={style}
    initial={{ scale: 1, opacity: 0 }}
    whileInView={{ opacity: 1 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{
      scale: { duration, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 0.8 },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// 14. Hover zoom
export const HoverZoomImage: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 0.6,
}) => (
  <motion.div
    className={combineClasses('cursor-pointer overflow-hidden', className)}
    style={style}
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    viewport={{ once: true }}
    transition={{ duration, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// 15. Zoom with rotation
export const ZoomRotate: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 1.8,
}) => (
  <motion.div
    className={combineClasses('overflow-hidden', className)}
    style={style}
    initial={{ scale: 1.3, rotate: 5, opacity: 0 }}
    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// 16. Pulse zoom
export const PulseZoom: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  duration = 2,
}) => (
  <motion.div
    className={combineClasses('overflow-hidden', className)}
    style={style}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    animate={{ scale: [1, 1.02, 1] }}
    transition={{
      scale: { duration, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 0.8 },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// 17. Slide in from bottom
export const SlideInBottom: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.7,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 18. Slide in from top
export const SlideInTop: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.7,
  ...rest
}) => (
  <motion.div
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    initial={{ opacity: 0, y: -24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: EASE_OUT, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 19. Scroll animate
export const ScrollAnimate: FC<AnimatedContentProps> = ({
  children,
  className = '',
  style = {},
}) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
      className={combineClasses(
        'relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white',
        className,
      )}
      style={style}
      animate={{ y: Math.max(50 - scrollY * 0.5, -200) }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// 20. Entrance wave (per-character)
export const EntranceWave: FC<TextAnimationProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
}) => {
  let lines = text.split(/<br\s*\/?>/i);
  if (lines.length === 1) lines = text.split('\n');
  let charIndex = 0;
  return (
    <div className={combineClasses('flex flex-col', className)}>
      {lines.map((line: string, lineIndex: number) => (
        <div key={lineIndex} className="flex">
          {line.split('').map((char: string, index: number) => {
            const ci = charIndex++;
            return (
              <motion.span
                key={`${lineIndex}-${index}`}
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration, delay: delay + ci * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

// 21. Continuous wave
export const ContinuousWave: FC<TextAnimationProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 2,
}) => (
  <div className={combineClasses('flex', className)}>
    {text.split('').map((char: string, index: number) => (
      <motion.span
        key={index}
        className="inline-block"
        animate={{ y: [0, -12, 0], scaleY: [1, 1.2, 1] }}
        transition={{ duration, repeat: Infinity, delay: delay + index * 0.1, ease: 'easeInOut' }}
      >
        {char === ' ' ? ' ' : char}
      </motion.span>
    ))}
  </div>
);

// 22. Parallax depth (scroll-driven zoom)
export const ParallaxDepth: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        transition={{ duration, ease: 'easeOut' }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

// 23. Magnetic image (follows cursor)
export const MagneticImage: FC<ImageAnimationProps> = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.1,
      y: (e.clientY - rect.top - rect.height / 2) * 0.1,
    });
  };
  return (
    <motion.div
      ref={ref}
      className={`cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        x: isHovered ? mousePosition.x : 0,
        y: isHovered ? mousePosition.y : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// 24. Left-to-right reveal
export const RevealMaskLeft: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1.5,
  viewportAmount = 0.5,
}) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
    viewport={{ once: true, amount: viewportAmount }}
    transition={{ duration, ease: 'easeInOut' }}
  >
    <motion.div
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration * 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// 25. Right-to-left reveal
export const RevealMaskRight: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1.5,
}) => (
  <div className={`relative overflow-hidden ${className}`}>
    <motion.div
      className="absolute inset-0 z-10 bg-black"
      initial={{ x: '0%' }}
      whileInView={{ x: '100%' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, ease: 'easeInOut' }}
    />
    <motion.div
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration * 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </div>
);

// 26. Top-to-bottom reveal
export const RevealMaskTop: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1.5,
}) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    initial={{ clipPath: 'inset(100% 0 0 0)' }}
    whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: 'easeInOut' }}
  >
    <motion.div
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration * 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// 27. Bottom-to-top reveal
export const RevealMaskBottom: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1.5,
}) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    initial={{ clipPath: 'inset(0 0 100% 0)' }}
    whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: 'easeInOut' }}
  >
    <motion.div
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration * 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// 28. Center expand reveal
export const RevealMaskCenter: FC<ImageAnimationProps> = ({
  children,
  className = '',
  duration = 1.5,
}) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    initial={{ clipPath: 'inset(0 50% 0 50%)' }}
    whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration, ease: 'easeInOut' }}
  >
    <motion.div
      initial={{ scale: 1.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration * 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// 29. Tilt image (3D hover)
export const TiltImage: FC<ImageAnimationProps> = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRotateY((e.clientX - rect.left - rect.width / 2) / 10);
    setRotateX((rect.height / 2 - (e.clientY - rect.top)) / 10);
  };
  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <motion.div whileHover={{ z: 50 }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  );
};

// 30. Fixed top scroll progress bar
export const ScrollProgressBar: FC<{ className?: string }> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className={combineClasses(
        'fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]',
        className,
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// Variant objects used by MotionDiv components
export const viewportOnce = { once: true, amount: 0.15 } as const;