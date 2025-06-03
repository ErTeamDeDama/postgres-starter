import Link from 'next/link';
const Features: React.FC=() =>(
<section id="features" className="card-container">
        

       
        <div data-aos="fade-up" className="card">
          <Link href="/historic-fake">
          <h3 className="text-xl font-bold mb-2">Fake News nella storia</h3>
           <p className="text-gray-400">Approfondisci quali sono state le più grandi Fake della storia.</p> 
          </Link>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="card">
          <Link href="/fake-toolkit">
          <h3 className="text-xl font-bold mb-2">Strumenti di Verifica</h3>
          <p className="text-gray-400">Accedi a tool utili per validare fonti e contenuti.</p>
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="card">
          <h3 className="text-xl font-bold mb-2">Coming soon...</h3>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
);

export default Features;