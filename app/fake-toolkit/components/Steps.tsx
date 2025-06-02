import React from 'react';
import Section from './Section';
import Step from './Step';

const Steps: React.FC = () => {
  const steps = [
    {
      title: 'Primo passo: Informarsi',
      text: (
        <>
          Oggi le fake news si diffondono a una velocità pazzesca grazie alla tecnologia. Per questo è fondamentale usare la stessa tecnologia per informarci bene. La prima cosa da fare è verificare la fonte della notizia. Le fonti devono essere affidabili e riconosciute, come ad esempio <em>La Repubblica</em> o <em>Il Corriere della Sera</em>. Se la notizia proviene da siti poco conosciuti o sospetti, è bene dubitare.
        </>
      ),
    },
    {
      title: 'Secondo passo: Verificare la data',
      text: (
        <>
          È molto importante controllare la data di pubblicazione della notizia. Le fake news spesso riciclano eventi vecchi o date di altri fatti, presentandoli come attuali per ingannare chi legge.
        </>
      ),
    },
    {
      title: 'Terzo passo: Cercare conferme',
      text: (
        <>
          Cercare conferme significa controllare se altri siti affidabili parlano della stessa notizia. Se la notizia è importante, sicuramente sarà riportata da più fonti. Se invece appare solo su siti poco noti o sconosciuti, probabilmente è falsa.
        </>
      ),
    },
    {
      title: 'Quarto passo: Analizzare il contenuto e il tono',
      text: (
        <>
          Spesso le fake news hanno titoli sensazionalistici o emotivamente forti, con l’obiettivo di attirare l’attenzione e generare condivisioni rapide. Se una notizia vi sembra esagerata, eccessivamente allarmistica o troppo bella per essere vera, prendetela con le pinze e verificate con calma.
        </>
      ),
    },
    {
      title: 'Quinto passo: Controllare immagini e video',
      text: (
        <>
          Molte fake news si basano su immagini o video manipolati o fuori contesto. Utilizzate strumenti di ricerca inversa delle immagini, come Google Immagini o TinEye, per verificare se una foto è autentica o se è stata modificata.
        </>
      ),
    },
  ];

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-10 text-aquaAccent border-b border-aquaAccent pb-2 max-w-max mx-auto">
        Come riconoscere una fake news
      </h2>
      {steps.map((step, i) => (
        <Step key={i} title={step.title} delay={i * 0.3}>
          {step.text}
        </Step>
      ))}
    </Section>
  );
};

export default Steps;
