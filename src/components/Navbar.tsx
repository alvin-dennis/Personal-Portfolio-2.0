import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
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

export default function Navbar() {
  return (
    <MotionHeader
      variants={fadeInUp}
      viewport={{ once: true }}>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-12 flex h-full max-h-14 origin-bottom">
        <Dock
          className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 
            border-primary"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  aria-label="Home link"
                  className={cn(
                    "size-12 flex items-center justify-center group"
                  )}
                >
                  <Image
                    className="rounded-sm"
                    src={SITE_CONFIG.siteLogo}
                    width={35}
                    height={35}
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
                    "size-12 flex items-center justify-center group"
                  )}
                >
                  <FaCode className="size-5" />
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
                      "flex size-12 items-center justify-center"
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
        </Dock>
      </div>
    </MotionHeader>
  );
}