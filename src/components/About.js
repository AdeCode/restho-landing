import React from 'react'
import sub from '../images/sub-title.svg'
import wings from '../images/wings.png'
import years from '../images/20years.png'
import fish from '../images/fish.png'
import lap from '../images/lap.png'
import fresh from '../images/fresh.svg'
import chef from '../images/chef.svg'
import FoodCard from './FoodCard'
import { foods } from '../assets/foods'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function About() {
    return (
        <div className='bg-white px-[50px] py-[150px]' >
            <div className='px-10 flex mb-[150px]'>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                className='mySwiper'
            >
                {
                    foods.map(food => (
                        <SwiperSlide>
                            <FoodCard
                                name={food.name}
                                image={food.img}
                                details={food.details}
                            />
                        </SwiperSlide>
                    ))
                }   
            </Swiper>             
            </div>
            {/* <div className='px-10 flex gap-5 mb-[150px]'>
                {
                    foods.map(food => (
                        <FoodCard
                            name={food.name}
                            image={food.img}
                            details={food.details}
                        />
                    ))
                }                
            </div> */}
            <div className='grid grid-cols-2 gap-2 mb-5'>
                <div className=''>
                    <div className='relative'>
                        <img className='h-auto absolute left-[240px]' src={years} alt='food'/>
                        <img className='h-auto absolute left-[-20px] top-[70px]' src={fish} alt='food'/>
                        <img className='h-auto absolute right-[210px] top-[140px]' src={lap} alt='food'/>
                        <img className='h-auto absolute left-[200px] top-[280px]' src={wings} alt='food'/>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2'>
                        <img src={sub} alt='sub' width='30px'/>
                        <h3 className='text-primaryText text-xl lg:text-3xl'>About to Restho</h3>
                        <img src={sub} alt='sub' width='30px'/>
                    </div>
                    <h2 className='font-bold text-6xl font-cormorant'>Come to Our Restaurant, Ready Your Food.</h2>
                    <p className=''>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-5 w-[250px]'>
                            <img src={fresh} alt='fresh'/>
                            <div className='flex flex-col'>
                                <h2 className=''>Pure Fresh Food.</h2>
                                <p className=''>We are serve different type of fresh food.</p>
                            </div>
                        </div>
                        <div className='flex gap-5 w-[250px]'>
                            <img src={chef} alt='chef'/>
                            <div className='flex flex-col'>
                                <h2 className=''>Experties Chef.</h2>
                                <p className=''>We are serve different type of fresh food.</p>
                            </div>
                        </div>
                    </div>
                    <button className='border transition-all w-[200px] border-primaryText text-primaryText py-5 px-5 rounded-full hover:text-white hover:bg-primaryText'>Discover More</button>
                </div>
            </div>
        </div>
    )
}

export default About