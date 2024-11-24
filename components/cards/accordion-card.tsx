import { BiPlus } from "react-icons/bi";

interface PropsItem {
  question: string;
  answer: string;
  activeIndex: number;
  curIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function AccordionCard({
  question,
  answer,
  activeIndex,
  curIndex,
  setActiveIndex,
}: PropsItem) {
  return (
    <div className="border-2 border-muted/20 rounded-xl overflow-hidden">
      <div
        onClick={() =>
          setActiveIndex((prev) => (prev == curIndex ? -1 : curIndex))
        }
        className={`p-3 flex gap-2 justify-between bg-muted/10 ${
          activeIndex == curIndex ? "border-b border-b-muted/20 " : ""
        }`}>
        <h4 className="text-lg font-semibold">{question}</h4>
        <span
          className={`shrink-0 transition-all duration-300 ${
            activeIndex == curIndex ? "rotate-45" : ""
          }`}>
          <BiPlus fontSize={20} />
        </span>
      </div>
      <div
        className={`transition origin-top ${
          activeIndex == curIndex ? "" : "__scale-0 h-0"
        }`}>
        <p className="p-3">{answer}</p>
      </div>
    </div>
  );
}
