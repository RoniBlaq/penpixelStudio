

const steps =[
    {
        title: 'Book a session',
        desc: 'Tell us about your event, vision and preferred date.',
    },
    {
        title:'planning & styling',
        desc: 'We help you plan locations, mood and creative direction.',
    },
    {
        title:'The shoot day',
        desc:'Relax  and enjoy while we capture your story naturally.',
    },
    {
        title:'Final delivery',
        desc: 'professionally edited photos delivered in hight resolution.',
    },
]

export default function Process() {
    return(
        <section className="py-24 px-4 sm:px-6 lg:px-16">
       <div className="max-w-6xl max-auto">
        <div className="text-center max-w-xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-serif text-white">How It Works</h3>
            <p className="mt-4 text-white/70">
            A simple and transparent process from booking to final delivery.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
                <div key={step.title} className="rounded-3xl bg-white/5 border border-white/15 p-8">
                     <span className="text-primary text-sm font-semibold">0{+1}</span>
            <h4 className="mt-4 font-serif text-lg text-white">{step.title}</h4>
            <p className="mt-3 text-sm text-white/70 leading relaxed">{step.desc}
            </p>
         </div>
            ))}
        </div>
        
       </div>
        </section>
    )
}