import Image from 'next/image' 

 
 const team=[  
 { 
 name: 'Pencil',
 role: 'Lead Photographer',
 image: '/images/team/more.jpeg',
 },
 {
 name: 'Joseph', 
  role: 'Creative Director',
 image: '/images/team/avatar.jpeg',
 },
 {
 name: 'Jamie',
  role: 'Lighting Specialist',
 image:'/images/team/new.jpeg',
 },
 { 
 name: 'Clara',
  role: 'Photo Editor',
 image: '/images/team/replace.jpeg',
 },
 ]
 export default function Team() { 


 return ( 
 <section className="py-20 px-6">
 <h2 className="text-center text-3xl font-serif mb-12"> Our Photographers </h2>
 <div className=" max-w-4xl bg-white/5 border border-white/15 rounded-3xl p-6 text-center mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10" >
 {team.map((member) => ( 
 <div key={member.name} className="flex flex-col items-center">
 <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-white/10" > 
 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
 </div>
 <p className="mt-4 text-sm text-gray-300"> {member.name} </p>
  <p className="mt-4 text-sm text-gray-300"> {member.role} </p>
 </div> 
 ))} 
 </div>
 </section>
 ) 
}