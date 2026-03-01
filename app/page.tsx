import Bio from "./section/bio";
import Profile from "./section/profile";
import Pub from "./section/pub";
import Experience from "./section/experience";
import Teaching from "./section/teaching";
import Service from "./section/service";
import Misc from "./section/misc";
import Footer from "./section/footer";

export default function Home() {
  return (
    <main className="mx-auto px-[6%] max-w-[78rem] my-[4.2vw] grid grid-cols-1 md:grid-cols-4 gap-[3.2vw]">
      <div className="col-span-1">
        <Profile />
        <nav className="hidden md:flex flex-col gap-1 mt-4 px-1 text-sm">
          {[
            { label: "About", href: "#bio" },
            { label: "Publications", href: "#pub" },
            { label: "Experience", href: "#experience" },
            { label: "Teaching", href: "#teaching" },
            { label: "Service", href: "#service" },
            { label: "Miscellaneous", href: "#misc" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-500 hover:text-[#00275c] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="col-span-1 md:col-span-3">
        <Bio />
        <Pub />
        <Experience />
        <Teaching />
        <Service />
        <Misc />
        <Footer />
      </div>
    </main>
  );
}
