import Navbar from '@/components/Navbar'
 import Hero from '@/components/Hero'
 import Service from '@/components/Service' 
import Portfolio from '@/components/Portfolio' 
import Team from '@/components/Team'
 import Testimonials from '@/components/Testimonials'
 import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
 export default function Home() {
 return (
 <main 
//  className="bg-[url('/images/nasa.jpg')]
// bg-cover
// bg-center
// bg-no-repeat"
>
 <Navbar /> 
 <div className="flex flex-col  sm:flex-row md:flex-row 
 bg-[url('/images/unsplash.jpg')]
bg-cover
bg-center
bg-no-repeat
 ">
    <div className="sm:w-1/2"> 
   <Hero/>
    </div>
    <div className="sm:w-1/2 -mt-9"> 
    <Portfolio />
     </div>
 </div>
  

 <Service />
 <Team />
 <Contact/>
 <Testimonials />
 <Footer /> 
 </main> 
 ) 
 }