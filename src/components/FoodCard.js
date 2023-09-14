import React from 'react'
import spagh from '../images/spagh.png'
import soup from '../images/soup.png'
import salad from '../images/salad.png'
import chicken from '../images/chicken.png'

function FoodCard({name, image, details}) {
  return (
    <div className='p-8 relative flex items-center justify-center gap-5 w-[360px]'>
        <div className='flex z-10 absolute left-[5px]'>
            <img className='w-full' src={image} alt='food'/>
        </div>
        <div className='border h-[130px] pl-[130px] pr-3 flex flex-col justify-center'>
            <h2 className='font-bold font-cormorant lg:text-2xl text-lg'>{name}</h2>
            <p className='text-gray lg:text-gray-500'>{details}</p>
        </div>
    </div>
  )
}

export default FoodCard