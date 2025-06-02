export default function WhyFakeNewsExist() {
  return (
    <section
      className="p-8 rounded-lg shadow-lg mb-8 border border-borderDefault bg-panel"
      data-aos="fade-up"
    >
      <h2 className="text-aquaAccent text-3xl font-semibold mb-4" data-aos="fade-right">
        Perché nascono le fake news?
      </h2>

      <ul className="list-disc list-inside text-lightText space-y-3 leading-relaxed" data-aos="fade-left">
        <li>
          <strong>Fare soldi:</strong> generano traffico e profitti da pubblicità.
        </li>
        <li>
          <strong>Manipolare opinioni:</strong> influenzare scelte politiche o sociali.
        </li>
        <li>
          <strong>Creare caos:</strong> diffondere paura e sfiducia.
        </li>
        <li>
          <strong>Distruggere reputazioni:</strong> danneggiare avversari o gruppi.
        </li>
        <li>
          <strong>Promuovere teorie complottiste:</strong> alimentare sospetti infondati.
        </li>
        <li>
          <strong>Intrattenimento e sensazionalismo:</strong> per attirare attenzione e condividere.
        </li>
      </ul>
    </section>
  );
}
