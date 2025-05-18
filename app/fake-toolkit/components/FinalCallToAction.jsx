import Link from 'next/link';
import ExpandingArrow from '@/components/expanding-arrow';


export default function FinalCallToAction() {
  return (
    <section className="bg-white text-black text-center py-20 px-6">
        <h3 data-aos="fade-up" className="text-2xl font-bold mb-4">Diventa parte della soluzione</h3>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-800 mb-6 max-w-2xl mx-auto">
          Ogni condivisione consapevole è un passo verso un web più sano. Scopri come ValidaFake può aiutarti a verificare notizie e fonti.
        </p>
        <button data-aos="fade-up" data-aos-delay="200" className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold">
          Inizia ora
          <ExpandingArrow className="ml-2 text-white" />
        </button>
      </section>
  );
}
