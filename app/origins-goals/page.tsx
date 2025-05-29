import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AOSInitializer from '@/components/AOSInitializer'
import FakeNewsIntro from './components/FakeNewsIntro'
import FakeNewsPurpose from './components/FajeNewsPurpose'

export default function OriginsGoalsPage() {
  return (
    <main className="origins-goals-content">
      <AOSInitializer />
      <Navbar />

      <section className="bg-panelBackground p-6 rounded-lg shadow-lg mb-6" data-aos="fade-up">
        <h1 className="text-aquaAccent text-2xl font-semibold mb-4">
          Come sono nate le fake news?
        </h1>
        <h2>Perché nascono le fake news e a cosa servono</h2>
      </section>

      <FakeNewsIntro />
      <FakeNewsPurpose />

      <Footer />
    </main>
  );
}
