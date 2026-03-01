import MLink from "../ui/mlink";
import { Mail, Linkedin, GraduationCap, FileText } from "lucide-react";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap text-lg gap-y-0 gap-x-2 ${className}`}>
      <MLink href="mailto:jieenyao@usc.edu" className="block underline-offset-3">
        <span className="inline-flex items-center gap-1.5">
          <Mail size={16} />Email
        </span>
      </MLink>
      <MLink href="https://www.linkedin.com/in/MatthewYaoJN/" className="block underline-offset-3">
        <span className="inline-flex items-center gap-1.5">
          <Linkedin size={16} />LinkedIn
        </span>
      </MLink>
      <MLink href="https://scholar.google.com/citations?user=4mk_dZwAAAAJ&hl=en&authuser=1" className="block underline-offset-3">
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap size={16} />Google Scholar
        </span>
      </MLink>
      <MLink href="/Jie_En_Yao_Resume.pdf" className="block underline-offset-3">
        <span className="inline-flex items-center gap-1.5">
          <FileText size={16} />CV
        </span>
      </MLink>
    </div>
  );
}
