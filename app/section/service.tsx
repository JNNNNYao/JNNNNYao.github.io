import Section from "../ui/section";
import Separator from "../ui/separator";

export default function Service() {
  return (
    <Section id="service">
      <Separator name="Service" className="mt-4 mb-3" />
      <div className="cursor-default text-sm text-gray-700">
        <span className="font-semibold">Reviewer: </span>
        CVPR, NeurIPS, WACV, IEEE Transactions on Image Processing, ACM Transactions on Multimedia Computing, Communications, and Applications, Journal of Visual Communication and Image Representation, APSIPA Transactions on Signal and Information Processing
      </div>
    </Section>
  );
}
