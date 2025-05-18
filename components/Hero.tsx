'use client';

import ExpandingArrow from './expanding-arrow';

const Hero: React.FC = () => (
  <section className="max-w-5xl mx-auto text-center px-6 pt-24 pb-32">
    <h2
      data-aos="fade-up"
      className="text-5xl font-extrabold mb-6 leading-tight"
    >
      Non credere a tutto ciò che leggi.
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-xl text-gray-400 mb-8"
    >
      La disinformazione online è un problema serio. Impara a distinguere i
      fatti dalle falsità con i nostri strumenti.
    </p>

    <button
      data-aos="fade-up"
      data-aos-delay="400"
      className="group inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold"
    >
      Scopri di più
      <ExpandingArrow className="ml-2" />
    </button>
  </section>
);

export default Hero;
