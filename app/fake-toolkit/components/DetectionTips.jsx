export default function DetectionTips() {
  const tips = [
    { title: "Titolo sensazionalistico", text: "Usa parole forti, maiuscole o emoji per attirare clic." },
    { title: "Fonte poco affidabile", text: "Controlla chi ha scritto la notizia e se il sito è conosciuto." },
    { title: "Mancanza di fonti", text: "Se non ci sono link o riferimenti, è un cattivo segno." },
    { title: "Foto fuori contesto", text: "Molte fake usano immagini vere ma decontestualizzate." },
    { title: "Errori grammaticali", text: "Spesso segnale di contenuti scritti in fretta o poco curati." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-xl font-bold mb-2">1. Titolo sensazionalistico</h4>
          <p className="text-gray-400">Usa parole forti, maiuscole o emoji per attirare clic.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-xl font-bold mb-2">2. Fonte poco affidabile</h4>
          <p className="text-gray-400">Controlla chi ha scritto la notizia e se il sito è conosciuto.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-xl font-bold mb-2">3. Mancanza di fonti</h4>
          <p className="text-gray-400">Se non ci sono link o riferimenti, è un cattivo segno.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-xl font-bold mb-2">4. Foto fuori contesto</h4>
          <p className="text-gray-400">Molte fake usano immagini vere ma decontestualizzate.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h4 className="text-xl font-bold mb-2">5. Errori grammaticali</h4>
          <p className="text-gray-400">Spesso segnale di contenuti scritti in fretta o poco curati.</p>
        </div>
      </section>
  );
}
