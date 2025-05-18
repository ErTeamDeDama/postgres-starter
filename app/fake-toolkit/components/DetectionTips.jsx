export default function DetectionTips() {
  const tips = [
    { title: "Titolo sensazionalistico", text: "Usa parole forti, maiuscole o emoji per attirare clic." },
    { title: "Fonte poco affidabile", text: "Controlla chi ha scritto la notizia e se il sito è conosciuto." },
    { title: "Mancanza di fonti", text: "Se non ci sono link o riferimenti, è un cattivo segno." },
    { title: "Foto fuori contesto", text: "Molte fake usano immagini vere ma decontestualizzate." },
    { title: "Errori grammaticali", text: "Spesso segnale di contenuti scritti in fretta o poco curati." },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">5 segnali per riconoscere una fake news</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {tips.map((tip, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-2">{index + 1}. {tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
