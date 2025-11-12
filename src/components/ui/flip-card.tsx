"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

const TRANSITION_CONFIG = {
  duration: 0.7,
  ease: [0.4, 0.2, 0.2, 1],
  transition: "0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
} as const
const TRANSFORM_STYLES: React.CSSProperties = {
  transformStyle: "preserve-3d",
  perspective: "1000px",
  backfaceVisibility: "hidden",
}

type FlipDirection = "horizontal" | "vertical"
interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  flipDirection?: FlipDirection
  initialFlipped?: boolean
  onFlip?: (isFlipped: boolean) => void
  disabled?: boolean
}
interface FlipCardContextValue {
  isFlipped: boolean
  flipDirection: FlipDirection
  disabled?: boolean
}

const FlipCardContext = React.createContext<FlipCardContextValue | undefined>(
  undefined
)
function useFlipCardContext() {
  const context = React.useContext(FlipCardContext)
  if (!context) {
    throw new Error("useFlipCardContext must be used within a FlipCard")
  }
  return context
}

const FlipCard = React.memo(
  React.forwardRef<HTMLDivElement, FlipCardProps>(
    (
      {
        className,
        flipDirection = "horizontal",
        initialFlipped = false,
        onFlip,
        disabled,
        ...props
      },
      ref
    ) => {
      const [isFlipped, setIsFlipped] = React.useState(initialFlipped)

      const handleMouseEnter = React.useCallback(() => {
        if (!disabled) {
          setIsFlipped(true)
          onFlip?.(true)
        }
      }, [disabled, onFlip])

      const handleMouseLeave = React.useCallback(() => {
        if (!disabled) {
          setIsFlipped(false)
          onFlip?.(false)
        }
      }, [disabled, onFlip])

      const contextValue = React.useMemo(
        () => ({ isFlipped, flipDirection, disabled }),
        [isFlipped, flipDirection, disabled]
      )

      return (
        <FlipCardContext.Provider value={contextValue}>
          <div
            ref={ref}
            className={cn(
              "relative border-none bg-none shadow-none",
              disabled && "pointer-events-none",
              className
            )}
            style={{
              ...TRANSFORM_STYLES,
              ...props.style,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={isFlipped}
            {...props}
          />
        </FlipCardContext.Provider>
      )
    }
  )
)
FlipCard.displayName = "FlipCard"

const FlipCardFront = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useFlipCardContext()

      const rotation = React.useMemo(() => {
        if (!isFlipped) return { rotateX: 0, rotateY: 0 }
        return flipDirection === "horizontal"
          ? { rotateY: -180, rotateX: 0 }
          : { rotateX: -180, rotateY: 0 }
      }, [isFlipped, flipDirection])

      return (
        <motion.div
          ref={ref}
          className={cn(
            "absolute inset-0 z-20 size-full overflow-hidden",
            className
          )}
          initial={false}
          animate={rotation}
          transition={TRANSITION_CONFIG}
          style={{
            ...TRANSFORM_STYLES,
            ...props.style,
          }}
          {...props}
        />
      )
    }
  )
)
FlipCardFront.displayName = "FlipCardFront"

const FlipCardBack = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useFlipCardContext()

      const rotation = React.useMemo(() => {
        if (isFlipped) return { rotateX: 0, rotateY: 0 }
        return flipDirection === "horizontal"
          ? { rotateY: 180, rotateX: 0 }
          : { rotateX: 180, rotateY: 0 }
      }, [isFlipped, flipDirection])

      return (
        <motion.div
          ref={ref}
          className={cn("absolute inset-0 z-10 size-full", className)}
          initial={false}
          animate={rotation}
          transition={TRANSITION_CONFIG}
          style={{
            ...TRANSFORM_STYLES,
            ...props.style,
          }}
          {...props}
        />
      )
    }
  )
)
FlipCardBack.displayName = "FlipCardBack"

export { FlipCard, FlipCardFront, FlipCardBack }