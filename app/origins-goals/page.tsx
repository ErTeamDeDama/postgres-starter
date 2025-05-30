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

      <div className="w-full max-w-4xl items-center">
        <section className="bg-panel p-6 rounded-lg shadow-lg mb-6" data-aos="fade-up">
          <h1 className="text-2xl font-bold text-aquaAccent mb-4 text-center">
            Perché nascono le fake news e a cosa servono
          </h1>
          <h3 className="text-lg text-lightText text-center">Come sono nate le fake news?</h3>
        </section>

        <FakeNewsIntro />
        <FakeNewsPurpose />
      </div>

      <Footer />
    </main>
  );
}