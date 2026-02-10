'use client'
import Image from 'next/image'
//  import CurvedImage from './CurvedImage'
 import { motion } from 'framer-motion'
import Link from 'next/link'

 export default function Hero() {
 
  return (                                
<section id="Hero-section" className="relative px-6 pt-24 lg:pt-28 pb-20 overflow-hidden">
  <div className="max-w-5xl mx-auto grid gap-16 lg:grid-col-2 items-center">

    {/* Left */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center lg:text-left"
    >
      <p className="text-xs uppercase tracking-widest text-[#888]">
        PenPixel Studio
      </p>

      <h1 className="font-serif leading-tight mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
        We Create<br />
        <span className="">Visual Stories</span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-md mx-auto lg:mx-0">
        Luxury wedding & lifestyle photography with emotion, elegance,
        and timeless storytelling.
      </p>

      <Link href="/explore">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 rounded-full text-white bg-red-400"
        >
          Explore Work
        </motion.button>
      </Link>
    </motion.div>

    {/* Right image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className=" relative h-[340px] sm:h-[360px] lg:h-[480px] rounded-[40px] sm:rounded-[120px] lg:rounded-[260px] overflow-hidden mx-auto w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[560px]
      "
    >
      <Image
        src="/images/pixel5.png"
        alt="Hero photography"
        fill
        priority
        className="object-cover"
      />
    </motion.div>

  </div>

  {/* Desktop stats strip */}
  <div className=" flex flex-wrap justify-center md:justify-between gap-4 md:gap-5 lg:gap-10 mt-14 text-[10px] ">

 <div className=" flex items-center justify-between mt-14 w-[280px] sm:w-[380px] mx-auto">
    <div>
      <p className="text-2xl font-serif text-white">80+</p>
      <p className="text-xs tracking-wider text-gray-400 uppercase">
        Projects
      </p>
    </div>

    <div>
      <p className="text-2xl font-serif text-white">5yrs</p>
      <p className="text-xs tracking-wider text-gray-400 uppercase">
        Experience
      </p>
    </div>

    <div>
      <p className="text-2xl font-serif text-white">20+</p>
      <p className="text-xs tracking-wider text-gray-400 uppercase">
        Weddings
      </p>
    </div>

    <div>
      <p className="text-2xl font-serif text-white">70+</p>
      <p className="text-xs tracking-wider text-gray-400 uppercase">
        Clients
      </p>
    </div>
</div>
  </div>
</section>

 )
   
 }