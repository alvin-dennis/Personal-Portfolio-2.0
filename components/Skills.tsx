export default function Skills() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-[2rem] font-bold font-title">Skills</h2>
      </div>
      <img
        src="https://skillicons.dev/icons?i=html,css,javascript,typescript,python,c,mint,markdown,latex,react,vue,astro,nextjs,flask,fastapi,nodejs,tailwindcss,scss,mongodb,postgres,supabase,firebase,prisma,git,github,postman,figma,vscode,pycharm,bash,powershell,cloudflare,workers,opencv,vercel,netlify,notion,githubactions,anaconda,arduino,raspberrypi,matlab,arch,bun,bots&perline=5"
        alt="Skills"
      />
    </div>
  );
}
