import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ id, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-16 border-t border-white/5 ${className}`}>
      <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-10">{title}</h2>
      {children}
    </section>
  );
}
