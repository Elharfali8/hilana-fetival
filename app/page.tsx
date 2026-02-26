import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programme from '@/components/Programme'
import React from 'react'

function HomePage() {
  return (
    <main className='min-h-[300vh]'>
      <Header />
      <Hero />
      <About />
      <Programme />
    </main>
  )
}

export default HomePage