import SectionContainer from "./SectionContainer";

export default function Contact() {
  return (
    <SectionContainer id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-slate-400 text-sm mb-6">Let's work together!</p>
          <a href="mailto:adrianwebdev@gmail.com" className="text-[#E2E8F0] font-bold text-sm block mb-2 underline hover:text-blue-400">adrianwebdev@gmail.com</a>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="NAME" className="w-full p-3 bg-white/5 border border-white/10 text-white text-xs uppercase" />
          <input type="email" placeholder="EMAIL" className="w-full p-3 bg-white/5 border border-white/10 text-white text-xs uppercase" />
          <textarea placeholder="MESSAGE" className="w-full p-3 bg-white/5 border border-white/10 text-white text-xs uppercase h-32" />
          <button className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider w-full hover:bg-blue-400 transition">Send Message</button>
        </form>
      </div>
    </SectionContainer>
  );
}
