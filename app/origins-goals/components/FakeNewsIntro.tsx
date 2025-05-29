export default function FakeNewsIntro() {
  return (
    <section className="bg-panel p-6 rounded-lg shadow-lg mb-6" data-aos="fade-right">
      <p className="text-lightText">
        Viviamo in un mondo dove le informazioni viaggiano super velocemente. Basta aprire un social,
        leggere un messaggio su WhatsApp o cliccare su un link e ci troviamo davanti a una notizia.
        Ma non tutte le notizie sono vere. Alcune, infatti, sono completamente inventate o volutamente
        modificate: queste si chiamano <span className="text-aquaAccent font-semibold">fake news</span>.
      </p>

      <p className="text-lightText mt-4">
        Le fake news non sono un errore o una svista, ma vengono create apposta per ingannare, confondere o
        influenzare le persone. Sono diventate un fenomeno così grande che oggi è difficile distinguere subito
        cosa è vero e cosa no. Ma perché esistono? A cosa servono? E perché così tanta gente ci casca?
      </p>

      <h3 className="mt-6 font-semibold text-lg text-aquaAccent">Perché nascono le fake news?</h3>
      <p className="text-lightText mt-2">
        Le fake news nascono per diversi motivi, e spesso dietro c’è una strategia ben precisa.
        <br /><br />
        <strong className="text-borderAccent">1. Per fare soldi:</strong> attirare clic e guadagnare con la pubblicità.
        <br /><br />
        <strong className="text-borderAccent">2. Per influenzare l’opinione pubblica:</strong> manipolare opinioni.
        <br /><br />
        <strong className="text-borderAccent">3. Per creare confusione o panico:</strong> diffondere paura.
        <br /><br />
        <strong className="text-borderAccent">4. Per attaccare qualcuno:</strong> danneggiare reputazioni.
        <br /><br />
        <strong className="text-borderAccent">5. Per sostenere teorie complottiste:</strong> alimentare sospetti.
      </p>
    </section>
  );
}
