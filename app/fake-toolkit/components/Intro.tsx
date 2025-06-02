import React from 'react';
import Section from './Section';
import { FiAlertCircle, FiTrendingUp, FiUserX } from 'react-icons/fi';

const points = [
  { icon: <FiTrendingUp className="inline text-aquaAccent mr-2" />, text: 'Manipolare l’opinione pubblica' },
  { icon: <FiAlertCircle className="inline text-aquaAccent mr-2" />, text: 'Generare guadagni attraverso click o pubblicità' },
  { icon: <FiUserX className="inline text-aquaAccent mr-2" />, text: 'Screditare persone o istituzioni' },
];

const Intro: React.FC = () => (
  <Section className="bg-panelBackground rounded-xl p-8 shadow-lg">
    <div className='ml-5'>
        <h1 className="text-4xl font-extrabold mb-8 text-aquaAccent drop-shadow-md animate-pulse">
      Come riconoscere una <span className="text-softTeal">Fake News</span>
    </h1>

    <p className="text-lg max-w-3xl leading-relaxed mb-8 text-lightText">
      Le fake news sono notizie false presentate come vere, spesso con l’obiettivo di{' '}
      <span className="text-aquaAccent font-semibold">manipolare</span>,{' '}
      <span className="text-aquaAccent font-semibold">generare guadagni</span> o{' '}
      <span className="text-aquaAccent font-semibold">screditare</span> persone o istituzioni.
    </p>

    <ul className="list-none max-w-md space-y-4 mb-10 text-lightText text-lg">
      {points.map(({ icon, text }, i) => (
        <li
          key={i}
          className="flex items-center bg-page rounded-md p-3 shadow-md hover:shadow-lg transition-shadow cursor-default select-none"
          tabIndex={0}
          role="listitem"
          aria-label={text}
        >
          {icon}
          <span>{text}</span>
        </li>
      ))}
    </ul>

    <p className="max-w-3xl leading-relaxed text-lightText text-lg">
      Vi è mai capitato di leggere una “notizia bomba” che vi ha stupito, per poi condividerla con amici o parenti, scoprendo in seguito che era falsa? Oppure di scorrere su TikTok e vedere un video che sembrava vero, ma che in realtà raccontava informazioni false? Se sì, state tranquilli: non siete gli unici a cui è successo. Se invece non vi è mai capitato, probabilmente è perché non ve ne siete ancora accorti. Ma niente paura, ci pensiamo noi a spiegarvi come riconoscere una fake news.
    </p>
    </div>
    
  </Section>
);

export default Intro;
