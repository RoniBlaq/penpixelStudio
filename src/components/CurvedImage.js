 
import Image from 'next/image'
 export default function CurvedImage({ src, alt }) { 

 return (
 <div className="relative w-full h-[480px] rounded-[200px] overflow-hidden border border-white/10">
 <Image src={src} alt={alt} fill className="object-cover" />
 </div>
 ) 
}