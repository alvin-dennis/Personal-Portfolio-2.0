import React from "react";

interface Props {
  text: string;
  href: string;
  children?: React.ReactNode;
}

export default function Section({ text, href, children }: Props) {
  return (
    <section id={href} className="py-24">
      <h2 className="mb-14 text-3xl text-[#0a0a0a] md:text-5xl dark:text-white">
        {text}
      </h2>
      {children}
    </section>
  );
}
