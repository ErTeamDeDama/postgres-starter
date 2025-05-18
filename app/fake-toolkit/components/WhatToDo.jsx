export default function WhatToDo() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Cosa fare se pensi che una notizia sia falsa?</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Verifica la notizia su siti affidabili (es. fact-checking.it, bufale.net)</li>
        <li>Controlla la data di pubblicazione</li>
        <li>Fai una ricerca inversa dell’immagine</li>
        <li>Leggi oltre il titolo prima di condividere</li>
        <li>Segnala i contenuti sospetti alle piattaforme</li>
      </ul>
    </section>
  );
}