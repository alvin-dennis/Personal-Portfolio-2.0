import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { MotionFooter, MotionH2, MotionP } from "@/components/Framer";
import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Footer() {
  return (
    <MotionFooter
      id="contact"
      className="w-full px-4 py-12 text-center text-white"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid w-full items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-3">
          <MotionH2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold">Get in Touch
          </MotionH2>
          <MotionP
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[600px] text-lg md:text-xl">
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
          </MotionP>
        </div>
      </div>
    </MotionFooter>
  );
}
