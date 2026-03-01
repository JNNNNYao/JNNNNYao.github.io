import Section from "../ui/section";
import Separator from "../ui/separator";

export default function Misc() {
  return (
    <Section id="misc" className="cursor-default">
      <Separator name="Miscellaneous" className="mt-6 mb-3" />
      <div className="flex flex-col gap-3 text-sm text-gray-700 leading-relaxed">
        <p>
          Outside of work, I’m a big sports fan, particularly basketball and soccer. I also like playing poker, especially for the strategy behind it. In the winter, I like to hit the slopes and go skiing. I&apos;m powered by coffee and Coca-Cola.
        </p>
        <p>
          Fun fact: I absolutely love orcas (which is why one happens to be the logo of this website).
        </p>
      </div>
    </Section>
  );
}
