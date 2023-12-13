import Hero from './components/Hero'
import SectionFive from './components/SectionFive'
import SectionFour from './components/SectionFour'
import SectionSix from './components/SectionSix'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'
import Testimonial from './components/Testimonial'
import BottomBanner from './components/BottomBanner'
import Footer from './components/Footer'

export default function Home() {
  return (
   <div className="bg-slate-100 text-gray-800">
    <Hero />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <Testimonial />
    <BottomBanner />
    <Footer />
   </div>
  )
}
