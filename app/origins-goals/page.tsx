import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/components/AOSInitializer';

import FakeNewsIntro from './components/FakeNewsIntro';
import WhyFakeNewsExist from './components/WhyFakeNewsExist';
import FakeNewsPurpose from './components/FajeNewsPurpose';


export default function OriginsGoalsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-lightText min-h-screen flex flex-col px-6 md:px-12 lg:px-24">
        <AOSInitializer />

        <div className="w-full max-w-5xl mx-auto flex flex-col items-start py-12 space-y-8">
          <section
            className="w-full mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="font-bold text-aquaAccent text-4xl tracking-tight leading-tight">
              Perché nascono le fake news <br /> e per cosa vengono usate
            </h1>
          </section>

          <FakeNewsIntro />
          <WhyFakeNewsExist />
          <FakeNewsPurpose />
        </div>

        <Footer />
      </main>
    </>
  );
}
