import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/components/AOSInitializer';
import FakeNewsIntro from './components/FakeNewsIntro';
import FakeNewsPurpose from './components/FajeNewsPurpose';

export default function OriginsGoalsPage() {
  return (
    <main className="bg-page text-lightText min-h-screen flex flex-col">
      <AOSInitializer />
      <Navbar />

      <div className="w-full max-w-4xl flex flex-col items-center mx-auto z-50">
        <section className="p-6 rounded-lg shadow-lg mb-6" data-aos="fade-up">
          <h1 className="font-bold text-aquaAccent mb-4 text-center">
            Perché nascono le fake news e per cosa vengono usate
          </h1>
        </section>

        <FakeNewsIntro />
        <FakeNewsPurpose />
      </div>

      <Footer />
    </main>
  );
}