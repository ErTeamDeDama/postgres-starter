import { motion } from "framer-motion";
import { BarChart, Landmark, LineChart } from "lucide-react";

export default function FakeNewsSection() {
  return (
    <div className="relative bg-gray-100 py-20 flex justify-center items-center">
      {/* Cerchio grande animato */}
      <motion.div
        className="relative w-[500px] h-[500px] bg-[#8B4D4C] rounded-full flex flex-col justify-center items-center text-white text-center p-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Testo centrale */}
        <motion.p
          className="text-xl font-bold z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Le fake news hanno un impatto significativo sull'opinione pubblica e sui conflitti.
        </motion.p>

        {/* Cerchietto in alto */}
        <motion.div
          className="absolute -top-5 left-1/2 transform -translate-x-1/2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <IconCircle>
            <LineChart className="text-[#8B4D4C]" />
          </IconCircle>
        </motion.div>

        {/* Cerchietto a destra */}
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <IconCircle>
            <Landmark className="text-[#8B4D4C]" />
          </IconCircle>
        </motion.div>

        {/* Cerchietto in basso */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <IconCircle>
            <BarChart className="text-[#8B4D4C]" />
          </IconCircle>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Componente riutilizzabile per i cerchietti
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-md">
      {children}
    </div>
  );
}
