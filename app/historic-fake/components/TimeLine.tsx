import { fakeNews } from "../data/fakeNews";
import TimelineItem from "./TimeLineItem";

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Timeline delle Grandi Fake News</h2>
      <div className="space-y-10">
        {fakeNews
          .sort((a, b) => a.year - b.year)
          .map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}
