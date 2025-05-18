import Paragraph from './Paragraph';
import ImageCard from './ImageCard';

const HomeContent: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 space-y-10">
      <h1
        data-aos="fade-down"
        className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
      >
        Riconoscere le Fake News
      </h1>

      <Paragraph
        data-aos="fade-up"
        data-aos-delay="100"
        text="Nell’era digitale, le notizie false si diffondono rapidamente attraverso i social media e i siti web, creando disinformazione e confusione."
        className="text-gray-300 leading-relaxed text-lg"
      />
      <Paragraph
        data-aos="fade-up"
        data-aos-delay="200"
        text="Saper riconoscere una fake news è fondamentale per proteggere sé stessi e la società da manipolazioni, paure ingiustificate e danni alla reputazione."
        className="text-gray-300 leading-relaxed text-lg"
      />

      <ImageCard
        data-aos="zoom-in"
        data-aos-delay="300"
        src="/images/fake-news.jpg"
        alt="Illustrazione di fake news diffuse online"
        className="rounded-lg shadow-xl mx-auto"
      />

      <Paragraph
        data-aos="fade-up"
        data-aos-delay="400"
        text="Molte fake news sfruttano titoli sensazionalistici, fonti non verificate o manipolazioni emotive. È importante leggere sempre con spirito critico."
        className="text-gray-300 leading-relaxed text-lg"
      />
      <Paragraph
        data-aos="fade-up"
        data-aos-delay="500"
        text="Verificare le fonti, cercare conferme su più testate attendibili e usare strumenti di fact-checking sono buone pratiche quotidiane."
        className="text-gray-300 leading-relaxed text-lg"
      />

      <ImageCard
        data-aos="zoom-in"
        data-aos-delay="600"
        src="/images/check-facts.jpg"
        alt="Controllo dei fatti con strumenti digitali"
        className="rounded-lg shadow-xl mx-auto"
      />

      <Paragraph
        data-aos="fade-up"
        data-aos-delay="700"
        text="La consapevolezza è la prima difesa contro la disinformazione. Condividere solo notizie verificate contribuisce a costruire una rete informativa sana."
        className="text-gray-300 leading-relaxed text-lg"
      />
    </section>
  );
};

export default HomeContent;
