 const services = ['Wedding Shoot', 'Event Shoot', 'Portrait Shoot', 'Model Shoot'] 

 export default function Services() { 

 return (
 <section id="Service" className="py-20 px-4 sm:px-6 lg:px-16 

 ">    
 <h3 className="text-3xl font-serif text-center">
Our Services
</h3>
 <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 gap-6 mt-12 max-w-[520px]
mx-auto bg-red-500/20"> 
 {services.map(service => (
 <div key={service} className="border border-white/10 

p-6
 text-center rounded-xl"> 
 <h4 className="font-semibold">{service}</h4>
 <p className="text-sm text-gray-400 mt-2">High-quality professional coverage.</p>
 </div>
 ))} 
 </div>
 </section>
 ) 
}