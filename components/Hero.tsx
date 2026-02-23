import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <section className='mt-16 lg:mt-20 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat grid place-items-center '
          style={{
          backgroundImage: 'url("/assets/hero.jpeg")'
        }}
      >
          <div className='grid place-items-center bg-white/50 p-6 rounded-md'>
              <Image
                  alt='Hilana logo'
                  src={'/assets/logo.png'}
                  width={400}
                  height={200}
              />
              <div>
                  <h1 className='text-3xl lg:text-4xl font-bold text-[#00008B]'>Marrakech-Morocco</h1>
                  <p className='text-[#00008B] text-xl text-center'>
                      From July 23 To 27, 2026
                  </p>
              </div>
          </div>
      </section>
  )
}

export default Hero