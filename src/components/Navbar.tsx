import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { MotionHeader } from "@/components/Framer";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};


export default function Header() {
  return (
    <MotionHeader
      variants={fadeInUp}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-12 flex h-full max-h-14 origin-bottom">
        <Dock
          className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 
            [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
            dark:border-white dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  aria-label="Home link"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 flex items-center justify-center group"
                  )}
                >
                  <Image
                    className="rounded-full shadow-lg"
                    src={SITE_CONFIG.siteLogo}
                    width={32}
                    height={32}
                    alt="website logo"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                Home
              </TooltipContent>
            </Tooltip>
          </DockIcon>


          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  aria-label="Projects link"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 flex items-center justify-center group"
                  )}
                >
                  <FaCode className="size-5 text-current" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                Projects
              </TooltipContent>
            </Tooltip>
          </DockIcon>


          <Separator orientation="vertical" className="h-full" />

          {SITE_CONFIG.socialLinks.map((item) => (
            <DockIcon key={item.text}>
              <Tooltip>
                <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.text}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "flex size-12 items-center justify-center text-gray-800 dark:text-gray-200"
                  )}
                >
                  {item.icon && <item.icon className="size-4 text-current" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {item.text}
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
              <div className="group relative flex items-center">
                <ModeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Mode Toggle
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </MotionHeader>
  );
}
