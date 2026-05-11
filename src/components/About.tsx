import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <SectionContainer id="about" title="About">
      <div className="grid md:grid-cols-2 gap-12 text-[#94A3B8] text-sm leading-relaxed">
        <p>
          I am a Full Stack Developer with 2 years of experience building modern web applications. 
          I specialize in creating efficient, scalable, and visually appealing user interfaces using 
          React, TypeScript, and Tailwind CSS.
        </p>
        <p>
          My passion lies in crafting digital experiences that not only look great but also perform 
          optimally. I am constantly learning new technologies to stay at the forefront of the industry.
        </p>
      </div>
    </SectionContainer>
  );
}
