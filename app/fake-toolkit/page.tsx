import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from './components/HeroSection';
import WhatAreFakeNews from './components/WhatAreFakeNews';
import DetectionTips from './components/DetectionTips';
import WhatToDo from './components/WhatToDo';
import FinalCallToAction from './components/FinalCallToAction';

export default function faketoolkit() {
    return(
    <>
      <Navbar />
      <HeroSection />
      <WhatAreFakeNews />
      <DetectionTips />
      <WhatToDo />
      <FinalCallToAction />
      <Footer />
    </>
        
    )
}