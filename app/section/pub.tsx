import Section from "../ui/section";
import data from "../../data/publications.json";
import Separator from "../ui/separator";
import MLink from "../ui/mlink";

interface PubItemProps {
  title: string;
  authors: { name: string; self?: boolean }[];
  link?: string;
  venue: string;
  award?: string;
  id?: string;
  video?: string;
  paper?: string;
}

function PubItem(item: PubItemProps) {
  const { title, authors, link, venue, award, id, video, paper } = item;
  return (
    <div
      className="my-auto px-1 max-w-[64rem] group relative"
      id={id}
    >
      <h3 className="font-bold leading-6 text-base">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(94,160,190)] underline underline-offset-2 decoration-[rgb(94,160,190)] decoration-1 hover:text-pink-800 hover:decoration-pink-400 transition-colors duration-200"
          >
            {title}
          </a>
        ) : title}
      </h3>
      <p className="mt-1 mb-1.5 text-gray-600 leading-5 italic text-sm">
        {authors.map((a, i) => (
          <span key={i}>
            {a.self ? <u className="underline-offset-2">{a.name}</u> : a.name}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="leading-5">
        <span className="font-semibold">{venue.split(" ")[0]}</span>{" "}{venue.split(" ").slice(1).join(" ")}
      </p>
      {award && (
        <p className="underline text-secondary underline-offset-2 decoration-dotted leading-5 mt-0.5">
          {award}
        </p>
      )}
      {video && (
        <div
          className="
      h-0
      group-hover:h-[calc(min(31.6vw,16rem)+3rem)]
      overflow-hidden
      transition-all duration-300
      "
        >
          <div className="relative h-[min(32vw,16rem)] w-[min(28.44rem,56.8889vw)] -m-[1px] mt-3 hidden group-hover:block transition-opacity duration-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video}?loop=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {link && (
            <MLink href={link} className="leading-8 mr-3">
              [Website]
            </MLink>
          )}
          {paper && (
            <MLink href={paper} className="leading-8">
              [Paper]
            </MLink>
          )}
        </div>
      )}
    </div>
  );
}


export default function Pub() {
  return (
    <Section id="pub">
      <Separator name="Publications" className="mt-6 mb-3" />
      <div className="border-gray-300 flex flex-col gap-6 cursor-default">
        {data.map((item, index) => (
          <PubItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
