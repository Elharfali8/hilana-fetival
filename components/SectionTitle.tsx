import React from 'react'

type Props = {
    title: string
    }

const SectionTitle = ({ title }: Props) => {
  return (
      <div className='pt-12 pb-10 grid place-items-center' >
          <h2 className="text-2xl lg:text-3xl font-bold text-[#00008B]">
              {title}
          </h2>
          <span className='w-24 h-1 bg-[#00008B]'></span>
    </div>
  )
}

export default SectionTitle