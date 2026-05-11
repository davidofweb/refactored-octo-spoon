import SectionContainer from "./SectionContainer";
import { motion } from "motion/react";

const projects = [
  { title: "StkFlow Platform", description: "Real-time trading analytics dashboard built with Next.js.", tags: ["Fintech", "Next.js"], demoUrl: "#", repoUrl: "#" },
  { title: "Lumina AI", description: "Enterprise-grade LLM orchestration interface.", tags: ["AI Tools", "React"], demoUrl: "#", repoUrl: "#" },
];

export default function Projects() {
  return (
    <SectionContainer id="projects" title="Selected Work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-zinc-900 border border-white/5 overflow-hidden flex flex-col"
          >
            <div className="h-32 bg-zinc-800 flex items-center justify-center">
              <div className="text-[40px] opacity-20 font-bold">{project.title.substring(0, 3).toUpperCase()}</div>
            </div>
            <div className="p-4">
              <div className="text-[10px] text-blue-400 font-bold uppercase mb-1 tracking-widest">{project.tags[0]}</div>
              <div className="text-sm font-bold text-[#E2E8F0]">{project.title}</div>
              <div className="text-[10px] text-slate-500 mt-2 mb-4">{project.description}</div>
              <div className="flex gap-4">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold text-white hover:text-blue-400">Live Preview</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold text-white hover:text-blue-400">GitHub Repo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
