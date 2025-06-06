'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto bg-panelBackground p-10 rounded-3xl shadow-2xl space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            VALIDA FAKE – 4D Informatica
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <strong>VALIDA FAKE</strong> è il nome che noi della 4D Informatica abbiamo dato al nostro sito, realizzato per entrare nel mare di informazioni che ci sommergono tutti i giorni e per provare ad uscirne con qualche strumento in più per orientarci.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Nelle ore di Educazione Civica ci siamo affacciati al mondo delle false notizie, abbiamo provato a inventarne di nuove e ci siamo anche imbattuti in notizie incredibilmente vere.
            Ne abbiamo raccolte un po’ e vi proponiamo di giocare ad individuare, tra quelle che vi proponiamo, quali sono quelle vere e quali quelle false: è soltanto un piccolo test per mettervi alla prova…
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p>Abbiamo inoltre pensato che fosse utile condividere il frutto delle nostre ricerche nate a partire dalle domande che inevitabilmente ci sono venute in mente:</p>
            <ul className="list-disc list-inside text-lightText space-y-2">
              <li>Perché nascono le fake news e a quale scopo vengono diffuse?</li>
              <li>Come difendersi dalle false notizie e come evitare di diffonderle?</li>
              <li>Quali sono le più grandi fake news della storia e che conseguenze hanno avuto?</li>
            </ul>
          </motion.div>
        </motion.div>
        <div className='py-10'></div>
         <Footer />
      </main>
      
    </>
  );
}

