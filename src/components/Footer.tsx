import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full px-4 py-12 text-center text-[#0a0a0a] dark:text-white"
    >
      <div className="grid w-full items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-lg md:text-xl">
            Having any questions or just want to say hello?
            <br />
            <Link
              href={`mailto:${SITE_CONFIG.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Email
            </Link>{" "}
            me or{" "}
            <Link
              href={SITE_CONFIG.contact.cal_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Schedule
            </Link>{" "}
            a Call
          </p>
        </div>
      </div>
    </footer>
  );
}

