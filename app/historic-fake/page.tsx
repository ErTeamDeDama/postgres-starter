import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/TimeLine'

export default function Page(){
    return(
        <>
    <Navbar />
    
      <main className="min-h-screen">
        <Timeline />
      </main>
        
    <Footer />
    </>
    )
    
    
}