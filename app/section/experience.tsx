import Section from "../ui/section";
import Separator from "../ui/separator";
import data from "../../data/experience.json";

export default function Experience() {
  return (
    <Section id="experience">
      <Separator name="Experience" className="mt-4 mb-3" />
      <div className="flex flex-col gap-6 cursor-default">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline flex-wrap gap-x-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base text-[rgb(94,160,190)] underline underline-offset-2 decoration-[rgb(94,160,190)] decoration-1 hover:text-pink-800 hover:decoration-pink-400 transition-colors duration-200"
              >
                {item.company}
              </a>
              <span className="text-sm text-gray-500 whitespace-nowrap">{item.date}</span>
            </div>
            <div className="flex justify-between items-baseline flex-wrap gap-x-2 mt-0.5">
              <span className="text-gray-600 italic text-sm">{item.role}</span>
              <span className="text-sm text-gray-500">{item.location}</span>
            </div>
            <ul className="mt-2 ml-4 flex flex-col gap-1 list-disc text-sm text-gray-700">
              {item.items.flatMap((entry, i) =>
                entry.bullets.map((bullet, j) => (
                  <li key={`${i}-${j}`}>{bullet}</li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
