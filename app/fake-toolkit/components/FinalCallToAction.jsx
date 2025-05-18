import Link from 'next/link';

export default function FinalCallToAction() {
  return (
    <section className="bg-black text-white py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Diventa parte della soluzione</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Ogni condivisione consapevole è un passo verso un web più sano. Scopri come ValidaFake può aiutarti a verificare notizie e fonti.
      </p>
      <Link href="/login" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
        Inizia a validare
      </Link>
    </section>
  );
}
