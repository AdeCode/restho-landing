import React from 'react'

function MenuCard({image,name, details, price}) {
  return (
    <div className='flex flex-col w-full lg:w-[300px]'>
        <div className='relative'>
            <img src={image} alt='food' className='rounded-t-xl'/>
            <span className='bg-white py-2 text-base font-semibold px-6 rounded-l-[18px] text-black absolute top-4 right-0'>Lanch</span>
            <span className='bg-white text-primaryText px-10 py-1 font-semibold rounded-3xl absolute bottom-[-8%] border left-[37%] text-lg'>{price}</span>
        </div>
        <div className='flex rounded-b-xl text-black flex-col border py-8 items-center'>
            <h2 className='font-semibold font-cormorant text-4xl'>{name}</h2>
            <p className='text-base leading-10 lg:w-[250px] text-center'>{details}</p>
        </div>
    </div>
  )
}

export default MenuCard