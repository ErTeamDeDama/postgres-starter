// app/page.tsx
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AOSInitializer from '@/components/AOSInitializer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen">
        <AOSInitializer />
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  )
}
