import Image from "next/image";

export default function Skills() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold font-title">Skills</h2>
      </div>
      <div className="relative w-full aspect-[5/9]">
        <Image
          src="https://skillicons.dev/icons?i=html,css,javascript,python,c,markdown,latex,react,vue,astro,nextjs,flask,fastapi,nodejs,tailwindcss,scss,mongodb,postgres,supabase,firebase,prisma,git,github,postman,figma,vscode,pycharm,webpack,bash,powershell,cloudflare,workers,opencv,vercel,netlify,notion,githubactions,anaconda,arduino,raspberrypi,matlab,mint,arch,bun,bots&perline=5"
          alt="Skills"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          className="object-contain"
          quality={90}
        />
      </div>
    </div>
  );
}
