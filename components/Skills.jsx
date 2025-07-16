import Image from "next/image";

export default function Skills() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg min-h-[400px] lg:h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold font-title">Skills</h2>
      </div>
      <div className="relative w-full flex-1 min-h-[300px]">
        <Image
          src="https://skillicons.dev/icons?i=html,css,javascript,python,c,markdown,latex,react,vue,astro,nextjs,nodejs,tailwindcss,postgres,supabase,firebase,prisma,git,github,postman,figma,vscode,pycharm,bash,powershell,cloudflare,workers,opencv,vercel,netlify,notion,githubactions,anaconda,arduino,raspberrypi,matlab,mint,arch,bun,bots&perline=5"
          alt="Skills"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          placeholder="empty"
          className="object-contain"
          quality={90}
        />
      </div>
    </div>
  );
}
