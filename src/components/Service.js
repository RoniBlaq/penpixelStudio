 const services = [
    {
        title:'Wedding Shoot', 
        desc: 'Elegant and emotional wedding coverage focused on storytelling, moments and atmosphere.',
    },
    {
        title: 'Event Coverage',
        desc: 'professional documentation of corporate events, parties and special occasions.',
    },
    {
      title:'Portraits Sessions',
      desc:'personal and creative portrait photography for individuals, families and creatives.',
    },
    {
       title:
         'Model & Editorial',
       desc:' High-end fashion, branding and editorial shoots with refined direction and lighting.',
    },
        ] 

 export default function Services() { 

 return (
 <section id="Service" className="py-24 px-4 sm:px-6 lg:px-16">   
 <div className="max-w-6xl mx-auto">

    <div className="text-center max-w-xl mx-auto">
 <h3 className="text-3xl sm:text-4xl text-white font-serif text-center">
Our Services
</h3>
<p className="mt-4 text-sm sm:text-base text-white/80">Carefully crafted photography services designed to capture meaningful stories with style and emotion.</p>
</div>
  
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-6 mt-14"> 
 {services.map((service) => (
 <div key={service.title} className="group relative rounded-3xl border border-white/15 bd-white/5
p-6
 text-left transistion hover:bg-white/10"> 

 <div className="w-10 h-[2px] bg-primary mb-6"/>
 <h4 className="text-lg font-serif text-white">{service.title}</h4>
 <p className="text-sm leading-relaxed text-white/70 mt-3">{service.desc}</p>
 </div>
 ))} 
 </div>
 </div>
 </section>
 ) 
}