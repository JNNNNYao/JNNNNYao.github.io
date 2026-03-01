import Section from "../ui/section";

export default function Footer() {
  return (
    <Section id="footer" className="mt-4">
      <div className="text-xs text-gray-400 leading-[1.12]">
        Copyright © 2026 Jie-En Yao. Website template by{" "}
        <a
          href="https://github.com/itsrun/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          itsrun
        </a>
        .
      </div>
    </Section>
  );
}
