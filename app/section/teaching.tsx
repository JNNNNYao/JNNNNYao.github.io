import Section from "../ui/section";
import Separator from "../ui/separator";
import List from "../ui/list";
import data from "../../data/teaching.json";

export default function Teaching() {
  return (
    <Section id="teaching">
      <Separator name="Teaching" className="mt-4 mb-3" />
      <List data={data} large />
    </Section>
  );
}
