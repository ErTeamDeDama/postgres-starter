import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  year: number;
  description: string;
  image: string;
};

export default function TimelineItem({ title, year, description, image }: Props) {
  return (
    <motion.div
      className="relative pl-6 border-l border-gray-300 pb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute left-0 w-4 h-4 bg-aquaAccent rounded-full -ml-2 mt-1.5"></div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">
          {title}{" "}
          <span className="text-gray-400 text-sm">({year})</span>
        </h3>
        <Image src={image} alt={title} width={500} height={300} className="rounded mt-2" />
        <p className="mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
