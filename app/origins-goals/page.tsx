import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AOSInitializer from '@/components/AOSInitializer'


export default function OriginsGoalsPage() {
  return (
    
    
    <main className='origins-goals-content'>
      <AOSInitializer />
      <Navbar />
      <section  className="bg-panelBackground p-6 rounded-lg shadow-lg mb-6">
      <h1 className='text-aquaAccent text-2xl font-semibold mb-4'>
         Come sono nate le fake news?
      </h1>

      <p className='text-lightText'>
        Il nostro progetto è nato con l'idea di migliorare l'esperienza utente nel mondo digitale, creando una
        piattaforma che fosse al tempo stesso innovativa e accessibile a tutti.
        </p>
    

    </section>
    <Footer />
    </main>
  );
} 