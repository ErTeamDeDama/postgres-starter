"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInitializer from "@/components/AOSInitializer";
import { MailIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <AOSInitializer />
      <div className="flex flex-col min-h-screen bg-page text-lightText px-6 py-10 md:py-20">
        <main className="flex-grow max-w-3xl mx-auto w-full space-y-10">
          <section data-aos="fade-down">
            <h1 className="text-4xl font-bold text-aquaAccent mb-4">Contattaci</h1>
            <p className="text-lg">
              Se hai dubbi, proposte, segnalazioni o vuoi collaborare con noi,
              puoi scriverci direttamente via email.
            </p>
          </section>

          <section
            className="bg-panelBackground rounded-2xl shadow-xl p-8 flex flex-col items-start space-y-4"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3">
              <MailIcon className="text-aquaAccent w-6 h-6" />
              <span className="text-xl font-semibold text-lightText">Email di contatto:</span>
            </div>
            <a
              href="mailto:erteamdedama@gmail.com"
              className="text-aquaAccent text-lg underline hover:text-softTeal transition"
            >
              erteamdedama@gmail.com
            </a>
            <p className="text-sm text-muted max-w-prose">
              Ti risponderemo appena possibile.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
