import Image from 'next/image';
import React from 'react';

const ImageSection: React.FC = () => (
  <section id="how" className="max-w-4xl mx-auto px-6 py-24 text-center">
    <Image
      data-aos="zoom-in"
      src="/images/fact-checking-dark.jpg"
      alt="Fact checking illustration"
      width={800}
      height={500}
      className="mx-auto rounded-xl shadow-2xl"
    />
    <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-gray-400 mt-8">
      Analizza i contenuti con attenzione. Ogni informazione deve essere verificata.
    </p>
  </section>
);

export default ImageSection;