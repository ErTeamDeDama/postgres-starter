import React from 'react';

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <section
      data-aos="fade-up"
      className={`${className} max-w-4xl mx-auto my-12 px-6 md:px-0`}
      aria-live="polite"
    >
      {children}
    </section>
  );
};

export default Section;
