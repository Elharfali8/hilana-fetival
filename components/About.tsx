import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
     <section id='about' className='bg-cover bg-center bg-no-repeat grid place-items-center pb-16'
          style={{
          backgroundImage: 'url("/assets/background.png")'
        }}
      >
          <SectionTitle title='General Idea' />

          <div className='max-w-225 lg:text-lg px-4 lg:px-0'>
              <p className='text-center text-gray-700'>
                        This festival is based on the idea of supporting young talents and energies, and opening the door to artistic creativity in its various forms, through a diverse programme combining artistic performances, training workshops and open meetings.
                It aims to make art a means of expression, dialogue, and building bridges of communication between young people and society, in a festive setting that celebrates the values of innovation and openness.
                    </p>
          </div>
    </section>
  )
}

export default About