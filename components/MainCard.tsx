import React from 'react'

type Props = {
  title: string;
  description: string;
}

const MainCard = ({title, description}: Props) => {
  return (
    <article className='bg-white rounded-lg shadow-md p-6 transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-lg'>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-700'>{description}</p>
    </article>
  )
}

export default MainCard