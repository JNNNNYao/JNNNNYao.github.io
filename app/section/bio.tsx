import MLink from "../ui/mlink";
import Section from "../ui/section";
import Contact from "./contact";

export default function Bio() {
  return (
    <Section id="bio">
      <h1 className="text-5xl text-center md:text-left">Jie-En Yao</h1>
      <div className="text-lg leading-[1.36] gap-5 flex flex-col mt-6 break-words hyphens-auto cursor-default">
        <div>
          I am a Ph.D. student in Computer Science at the{" "}
          <MLink href="https://www.usc.edu/">
            University of Southern California
          </MLink>
          , advised by{" "}
          <MLink href="https://viterbi.usc.edu/directory/faculty/Kuo/Chung-Chieh">
            Prof. C.-C. Jay Kuo
          </MLink>
          . My research focuses on computer vision and machine learning, with interests in representation learning, visual understanding, and generative modeling. Previously, I received my Bachelor&apos;s degree in Computer Science from{" "}
          <MLink href="https://www.nthu.edu.tw/">
            National Tsing Hua University
          </MLink>
          , advised by{" "}
          <MLink href="https://elsalab.ai/">
            Prof. Chun-Yi Lee
          </MLink>
          .
        </div>
        <Contact className="flex-row sm:gap-x-3 sm:text-base md:text-lg md:gap-x-6" />
      </div>
    </Section>
  );
}
