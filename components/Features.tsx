
const Features: React.FC=() =>(
<section id="features" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
      
        <div data-aos="fade-up" className="card">
          <h3 className="text-xl font-bold mb-2">Educazione Digitale</h3>
          <p className="text-gray-400">Approfondisci come vengono create e diffuse le fake news.</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Strumenti di Verifica</h3>
          <p className="text-gray-400">Accedi a tool utili per validare fonti e contenuti.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-gray-400">Condividi e discuti con altri utenti sulle notizie del giorno.</p>
        </div>
      </section>
);

export default Features;