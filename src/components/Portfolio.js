'use client'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Portfolio() {

  return (

    <section className="relative py-32 px-6">
    <div className=" insert-0 w-2/2 mx-auto">
   
      <h3 className="text-center text-3xl font-serif mb-16">
        Featured Work
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto ">
        {projects.map((project) => (
          <Link

            key={project.slug}

            href={`/portfolio/${project.slug}`}

            className="group block"

          >

            <div className="relative h-80 md:h-[420px] rounded-[220px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"

              />
            </div>
            <p className="mt-6 text-center font-serif text-lg">

              {project.title}

            </p>

          </Link>

        ))}

      </div>
        </div>
    </section>

  )

}