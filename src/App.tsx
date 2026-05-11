import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profileImage from "./assets/profile.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans p-8">
      <nav className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4 font-bold text-xl tracking-tighter">
          <img src={profileImage} alt="Adrian Smith" className="w-10 h-10 rounded-full object-cover" />
          <span>ADRIAN SMITH</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="border border-white/20 px-4 py-2 text-[10px] uppercase font-bold hover:bg-white hover:text-black transition-all">
          Download CV
        </button>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto">
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-12 mb-16"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400 mb-4 font-bold">Full Stack Developer</div>
          <h1 className="text-7xl font-light tracking-tighter leading-[0.9] mb-6">
            Helping <span className="italic font-serif">30+ Businesses</span><br/>Scale.
          </h1>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-8">
            Full Stack Developer with 2 years of experience. I build high-performance web applications that drive growth.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-400 transition">View Projects</a>
            <a href="#contact" className="border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition">Get in touch</a>
          </div>
        </motion.section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="mt-16 flex justify-between items-center text-[10px] text-slate-500 border-t border-white/10 pt-8 uppercase tracking-widest">
        <div>© {new Date().getFullYear()} Adrian Smith — Portfolio v4.0</div>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/share/14bMybbG7iw/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          <a href="https://www.instagram.com/thaatwebdev?igsh=Zm5oZTNtYmhrN3Yw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
}


