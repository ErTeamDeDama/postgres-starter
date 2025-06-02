export default function FakeNewsPurpose() {
  return (
    <section
      className="p-8 rounded-lg shadow-lg mb-8 border border-borderDefault bg-panel"
      data-aos="fade-up"
    >
      <h2 className="text-aquaAccent text-3xl font-semibold mb-4" data-aos="fade-right">
        A cosa servono le fake news?
      </h2>

      <p className="text-lightText leading-relaxed mb-6" data-aos="fade-left">
        Le fake news non sono solo bugie innocue, ma strumenti potenti per:
      </p>

      <ul className="list-disc list-inside text-lightText space-y-3 leading-relaxed" data-aos="fade-left">
        <li>
          <strong>Controllare la narrazione:</strong> influenzano ciò che le persone pensano o sentono riguardo a un evento.
        </li>
        <li>
          <strong>Generare divisione sociale:</strong> alimentano tensioni e conflitti tra gruppi.
        </li>
        <li>
          <strong>Distrarre dai veri problemi:</strong> spostano l’attenzione su false notizie.
        </li>
        <li>
          <strong>Manipolare decisioni politiche ed economiche.</strong>
        </li>
      </ul>

      <p className="text-lightText mt-6 leading-relaxed" data-aos="fade-up">
        In sintesi, le fake news possono influenzare in modo profondo e duraturo la società, creando danni reali.
      </p>
    </section>
  );
}
