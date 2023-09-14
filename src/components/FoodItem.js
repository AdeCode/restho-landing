import React from 'react'
import foodData from '../assets/FoodItem'
import MenuCard from './MenuCard'
import sub from '../images/sub-title.svg'


function FoodItem() {
    console.log(foodData)
  return (
    <div className='flex flex-col px-[200px] py-[150px] bg-white'>
        <div className='flex items-center justify-between mb-10'>
            <div className='flex flex-col'>
                <div className='flex gap-5 mb-5'>
                    <img src={sub} alt='sub' width='30px' />
                    <h3 className='text-primaryText text-xl lg:text-3xl'>Menu List</h3>
                    <img src={sub} alt='sub' width='30px' />
                </div>
                <h2 className='font-semibold text-7xl font-cormorant'>Find Your Food Item</h2>
            </div>
            <div className=''>
                <button className='flex gap-3 items-center hover:bg-primaryText transition-all font-semibold text-xl border py-3 px-4 border-primaryText rounded-3xl'>
                    <span class="material-symbols-outlined">arrow_circle_right</span>
                    View More
                </button>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-14'>
            {
                foodData.map(food => (
                    <MenuCard
                        image={food.img}
                        name={food.name}
                        details={food.details}
                        price={food.price}
                        key={food.id}
                    />
                ))
            }
        </div>        
    </div>
  )
}

export default FoodItem