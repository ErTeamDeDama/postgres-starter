export default function FakeNewsIntro() {
  return (
    <section
      className="p-8 rounded-lg shadow-lg mb-8 border border-borderDefault bg-panel"
      data-aos="fade-up"
    >
      <h2 className="text-aquaAccent text-3xl font-semibold mb-4" data-aos="fade-right">
        Che cosa sono le Fake News?
      </h2>
      <p className="text-lightText leading-relaxed" data-aos="fade-left">
        Le <span className="font-semibold text-aquaAccent">fake news</span> sono notizie false o distorte create con l’intento di ingannare, confondere o manipolare l’opinione pubblica.
        Si diffondono rapidamente, soprattutto tramite social media e piattaforme digitali.
      </p>
    </section>
  );
}
