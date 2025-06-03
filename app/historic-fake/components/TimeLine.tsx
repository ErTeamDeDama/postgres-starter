import { fakeNews } from "../data/fakeNews";
import TimelineItem from "./TimeLineItem";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Timeline delle Grandi Fake News
      </motion.h2>
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
