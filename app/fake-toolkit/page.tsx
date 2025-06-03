import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Intro from './components/Intro';
import Steps from './components/Steps';
import GoQuiz from './components/GoQuiz';

export default function page() {
    return(
    <>
    <Navbar />
    <main >      
      <Intro />
      <Steps />
      <GoQuiz />
      
    </main>
    <Footer />
    </>
     
  )
}