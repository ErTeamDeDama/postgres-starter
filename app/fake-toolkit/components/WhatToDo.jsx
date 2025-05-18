export default function WhatToDo() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
        <h3 data-aos="fade-up" className="text-2xl font-bold mb-4">Cosa fare se pensi che una notizia sia falsa?</h3>
        <ul data-aos="fade-up" data-aos-delay="100" className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Verifica la notizia su siti affidabili (es. fact-checking.it, bufale.net)</li>
          <li>Controlla la data di pubblicazione</li>
          <li>Fai una ricerca inversa dell’immagine</li>
          <li>Leggi oltre il titolo prima di condividere</li>
          <li>Segnala i contenuti sospetti alle piattaforme</li>
        </ul>
      </section>
  );
}