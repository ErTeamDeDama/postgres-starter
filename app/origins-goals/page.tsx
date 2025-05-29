import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AOSInitializer from '@/components/AOSInitializer'
import FakeNewsIntro from './components/FakeNewsIntro'
import FakeNewsPurpose from './components/FajeNewsPurpose'

export default function OriginsGoalsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <AOSInitializer />
      <Navbar />

      <section className="p-6 rounded-lg shadow-lg mb-6" data-aos="fade-up">
        
        <h1>Perché nascono le fake news e a cosa servono</h1>
        <h3>
          Come sono nate le fake news?
        </h3>
      </section>

      <FakeNewsIntro />
      <FakeNewsPurpose />

      <Footer />
    </main>
  );
}
