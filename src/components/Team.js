import Image from 'next/image' 

 
 const team=[  
 { 
 name: 'Pencil',
 image: '/images/team/more.jpeg',
 },
 {
 name: 'Joseph', 
 image: '/images/team/avatar.jpeg',
 },
 {
 name: 'Jamie',
 image:'/images/team/new.jpeg',
 },
 { 
 name: 'Clara',
 image: '/images/team/replace.jpeg',
 },
 ]
 export default function Team() { 


 return ( 
 <section className="py-20 px-6">
 <h2 className="text-center text-3xl font-serif mb-12"> Our Photographers </h2>
 <div className=" max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10" >
 {team.map((member) => ( 
 <div key={member.name} className="flex flex-col items-center">
 <div className=" relative w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full overflow-hidden border border-white/10 mx-auto " > 
 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
 </div>
 <p className="mt-4 text-sm text-gray-300"> {member.name} </p>
 </div> 
 ))} 
 </div>
 </section>
 ) 
}