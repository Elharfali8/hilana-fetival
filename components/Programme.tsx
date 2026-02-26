import React from 'react'
import SectionTitle from './SectionTitle'
import { festivalProgramme } from '@/utils/data'
import MainCard from './MainCard'

const Programme = () => {
  return (
          <section id='programme'  className='bg-cover bg-center bg-no-repeat grid place-items-center pb-16'
          style={{
          backgroundImage: 'url("/assets/background.png")'
        }}>
          <div className='container mx-auto px-4 lg:px-0'>
              <SectionTitle title='Festival Programme' />
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {festivalProgramme.map((item) => {

                  return <MainCard key={item.id} title={item.title} description={item.description} />
              })}
              </div>
          </div>
      </section>
  )
}

export default Programme