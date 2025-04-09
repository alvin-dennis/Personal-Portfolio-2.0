export default function Skills() {
  return (
    <div className="bg-[#161616] rounded-[2rem] p-6 relative border border-[#222222] hover:border-[#333333] transition-colors">
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
