import React from 'react';
import Section from './Section';
import Link from 'next/link';

const Conclusion: React.FC = () => (
  <Section className="text-center">
    <h2 className="text-3xl font-bold mb-6 text-aquaAccent">Mettiti alla prova</h2>
    <p className="mb-8 max-w-xl mx-auto leading-relaxed text-lg text-lightText">
      Riconoscere una fake news non è sempre facile, ma seguendo questi semplici passi potete ridurre il rischio di cadere in inganno. Informarsi con attenzione, verificare le fonti e non condividere subito tutto ciò che si legge o si vede è la miglior difesa contro la disinformazione. Ricordate: il vero potere sta nell’essere informati e critici.
    </p>
    <Link
      href="/login"
      className="inline-block bg-aquaAccent text-darkBackground font-bold py-3 px-7 rounded-lg shadow-lg hover:brightness-110 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-aquaAccent/60"
      aria-label="Vai al quiz per riconoscere le fake news"
    >
      Metti alla prova le tue conoscenze con il quiz!
    </Link>
  </Section>
);

export default Conclusion;
