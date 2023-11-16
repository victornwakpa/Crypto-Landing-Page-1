import Hero from './components/Hero'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'

export default function Home() {
  return (
   <div className="bg-slate-100 text-gray-800">
    <Hero />
    <SectionTwo />
    <SectionThree />
   </div>
  )
}
