import Image from "next/image";
import Link from "next/link";
import { SlideInBottom } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-primary">
      <SlideInBottom duration={0.5}>
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-center md:justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              className="rounded-sm"
              src={SITE_CONFIG.siteLogo}
              width={35}
              height={35}
              alt={SITE_CONFIG.author}
            />
            <span
              className="font-nougat text-2xl md:text-3xl italic tracking-wide text-primary md:text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {SITE_CONFIG.author}
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.menuItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary uppercase text-md tracking-[0.2em] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SlideInBottom>
    </nav>
  );
}
