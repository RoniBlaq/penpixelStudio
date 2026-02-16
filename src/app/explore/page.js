'use client';

import Image from "next/image";

const galleryImages = [
"/images/pixel2.png",
"/images/portrait9.png",
"/images/portrait2.png",
"/images/portrait3.png",
"/images/portrait4.png",
"/images/portrait5.png",
"/images/portrait6.png",
"/images/wedding.png",
"/images/wedding1.png",
"/images/portrait7.png",
"/images/portrait8.png",
"/images/portrait9.png",
"/images/portrait10.png",
"/images/pixel1.png",
"/images/pixel3.png",
"/images/pixel4.png",
"/images/pixel5.png",
"/images/pixel6.png",
"/images/pixel7.png",
"/images/pixel8.png",
"/images/pixel9.png",
"/images/pixel10.png",
"/images/pixel11.png",
"/images/pixel12.png",
"/images/pixel13.png",
"/images/pixel14.png",
"/images/pixel15.png",
"/images/pixel16.png",
"/images/pixel17.png",
"/images/pixel18.png",
"/images/pixel19.png",
"/images/pixel20.png",
"/images/pixel21.png",
"/images/pixel22.png",
"/images/pixel23.png",
"/images/pixel24.png",
"/images/pixel27.png",
"/images/pixel28.png",
"/images/pixel29.png",
"/images/pixel30.png",

];

export default function Explore() {
    return(
        <section className="py-24 px-4 sm:px-6 lg:px-16 bg-[#0B0B0E] text-white">
     <h1 className="text-4xl sm:text-5xl font-serif text-center mb-12">
        Explore Our Work
     </h1>

     <p className="max-w-2xl mx-auto text-center text-gray-400 mb-16">
        Discover moments captured with emotion, elegance, and timeless style.
     </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {galleryImages.map((img, index) => (
            <div key={index} className="relative  w-60  md:w-full h-68 sm:h-100 md:h-64 lg:h-72 rounded-2xl overflow-hidden group">
                <Image
                src={img} alt={`Gallery Image ${index + 1}`}
                fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
        ))}
      </div>
        </section>
    );
}