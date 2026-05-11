import SectionContainer from "./SectionContainer";
import { motion } from "motion/react";

const skills = [
  "TypeScript", "React", "Next.js", "TailwindCSS", "Node.js", 
  "GraphQL", "PostgreSQL", "AWS", "Git"
];

export default function Skills() {
  return (
    <SectionContainer id="skills" title="Expertise">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span 
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] rounded-full text-[#E2E8F0]"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </SectionContainer>
  );
}
