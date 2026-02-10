
import Image from 'next/image' 
import { projects } from '../../../lib/projects'
 import { notFound } from 'next/navigation'

 export default async function PortfolioDetails({ params }) { 
    const { slug } = await params

    const project = projects.find(
   (p) => p.slug === slug
 ) 
 if (!project) { 
 notFound()
 } 

 return (
 <section className="px-6 py-32 max-w-full mx-auto bg-black"> 
 <h1 className="text-4xl md:text-5xl font-serif mb-10"> 
 {project.title}
 </h1> 
 <div className="relative h-[440px] max-w-[440px] mx-auto rounded-[220px] "> <Image
 src={project.image} 
 alt={project.title}
 fill 
//  placeholder="blur"
//  blurDataURL="/images/blur.jpg" 
 className="object-cover"
 />
 </div> 
 <p className="text-gray-400 max-w-2xl leading-relaxed text-center"> 
 {project.description} 
 </p> 
 </section> 
 ) 
}