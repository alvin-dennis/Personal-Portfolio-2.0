import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header() {

  return (
    <header>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-12 flex h-full max-h-14 origin-bottom">
        <Dock
          className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 
            [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
            dark:border-white dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        >
          <DockIcon>
            <div className="group relative flex items-center">
              <a
                href="/"
                aria-label="Home link"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 flex items-center justify-center"
                )}
              >
                <Image
                  className="rounded-full shadow-lg"
                  src={SITE_CONFIG.siteLogo}
                  width={32}
                  height={32}
                  alt="website logo"
                />
              </a>
              <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                Home
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
              </span>
            </div>
          </DockIcon>

          <DockIcon>
            <div className="group relative flex items-center">
              <a
                href="/projects"
                aria-label="Projects link"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 flex items-center justify-center"
                )}
              >
                <FaCode className="size-5 text-current" />
              </a>
              <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                Projects
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
              </span>
            </div>
          </DockIcon>

          <Separator orientation="vertical" className="h-full" />

          {SITE_CONFIG.socialLinks.map((item) => (
            <DockIcon key={item.text}>
              <div className="group relative flex items-center">
                <a
                  href={item.href}
                  aria-label={item.text}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "flex size-12 items-center justify-center text-gray-800 dark:text-gray-200"
                  )}
                >
                  {item.icon && <item.icon className="size-4 text-current" />}
                </a>
                <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                  {item.text}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
                </span>
              </div>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          <DockIcon>
            <div className="group relative flex items-center">
              <ModeToggle />
            </div>
          </DockIcon>
        </Dock>
      </div>
    </header>
  );
}
