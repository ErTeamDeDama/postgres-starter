'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950 text-white px-6 py-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl bg-gray-900 p-10 rounded-3xl shadow-2xl space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-400"
          >
            Chi siamo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            Siamo un team appassionato di tecnologia, educazione e verità. La nostra missione è aiutare le persone a riconoscere le fake news e sviluppare il pensiero critico.
            Crediamo che accesso a informazioni corrette sia la chiave per una società più consapevole e responsabile.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            La nostra piattaforma è pensata per studenti, insegnanti e cittadini curiosi. Offriamo strumenti semplici ma potenti per imparare a distinguere fatti e opinioni,
            in un mondo sempre più complesso e veloce.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            Unisciti alla nostra missione: verifica, impara, condividi. Insieme possiamo costruire una cultura informazione più solida e trasparente.
          </motion.p>
        </motion.div>
      </main>
    </>
  );
}
