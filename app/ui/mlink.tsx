import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inplace?: boolean;
};

export default function MLink({ href, children, className, inplace }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-[rgb(94,160,190)] underline hover:text-pink-800 underline-offset-2 decoration-[rgb(94,160,190)] hover:decoration-pink-400 decoration-1 ${className} transition-colors duration-200`}
      target={inplace ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
