import React from 'react';

interface StepProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const Step: React.FC<StepProps> = ({ title, children, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay * 200}
      className="mb-10 rounded-lg p-4 bg-panelBackground shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
      aria-label={`Passo: ${title}`}
      role="region"
      tabIndex={0}
    >
      <h3 className="text-2xl font-semibold mb-3 border-l-4 border-aquaAccent pl-3 text-aquaAccent">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-lightText max-w-prose">{children}</p>
    </div>
  );
};

export default Step;
