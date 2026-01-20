"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  type MotionProps,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { type PropsWithChildren, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-[#0a0a0a]/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border border-[#0a0a0a] dark:border-white p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement<DockIconProps>(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  // Motion values for measured bounds — measured in an effect to avoid accessing refs during render
  const boundsX = useMotionValue(0);
  const boundsWidth = useMotionValue(0);

  useEffect(() => {
    const updateBounds = () => {
      const rect = ref.current?.getBoundingClientRect();
      boundsX.set(rect?.x ?? 0);
      boundsWidth.set(rect?.width ?? 0);
    };

    updateBounds();

    const ro = new ResizeObserver(() => updateBounds());
    if (ref.current) ro.observe(ref.current);

    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds, true);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds, true);
    };
  }, [ref, boundsX, boundsWidth]);

  const distanceCalc = useTransform(
    [mouseX ?? defaultMouseX, boundsX, boundsWidth],
    ([val, bx, bw]: number[]) => {
      return val - bx - bw / 2;
    },
  );

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
