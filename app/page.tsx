// app/page.tsx
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AOSInitializer from '@/components/AOSInitializer'
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Analytics/>
      <main>
        <AOSInitializer />
        <Hero />
        <Features />
        
      </main>
      <Footer />
    </>
  );
}
