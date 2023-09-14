import React from 'react'
import styled from 'styled-components'
import sub from '../images/sub-title.svg'
import prawn from '../images/prawn.png'
import soupEgg from '../images/soup-egg.png'
import prawnNoodles from '../images/prawn-noodles.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function NewItem() {
    return (
        <Section className='py-16 px-5'>
            <div className='flex flex-col items-center gap-7 text-white mb-10'>
                <div className='flex'>
                    <img src={sub} alt='sub' width='30px' />
                    <h3 className='text-primaryText text-xl lg:text-3xl'>Our New Item</h3>
                    <img src={sub} alt='sub' width='30px' />
                </div>
                <h1 className='text-xl lg:text-6xl font-bold font-cormorant'>Restho New Item List</h1>
                <p className='text-xl lg:text-2xl font-normal'>Various versions have evolved over the years, sometimes on purpose.</p>
            </div>
           <div className='flex justify-center gap-8'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                loop={true}
                className='mySwiper'
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-5'>
                            <img className='fluid' src={prawn} alt='new-item' />
                            <div className='bg-white hover:bg-primaryText hover:text-white transition-all text-black p-3 text-2xl font-medium rounded-lg origin-center rotate-45 absolute bottom-8 right-[43%]'>
                                <span className='origin-bottom -rotate-12'>$32</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white items-center w-[350px]'>
                            <h2 className='text-xl font-bold font-cormorant lg:text-4xl mb-4 hover:text-primaryText transition-all'>Prawn with Noodles</h2>
                            <p className='text-xl text-center'>It is a long established fact that a reader will be distracted</p>
                        </div> 
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-5'>
                            <img className='fluid' src={soupEgg} alt='new-item' />
                            <div className='bg-white hover:bg-primaryText hover:text-white transition-all text-black p-3 text-2xl font-medium rounded-lg origin-center rotate-45 absolute bottom-8 right-[43%]'>
                                <span className='origin-bottom -rotate-12'>$32</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white items-center w-[350px]'>
                            <h2 className='text-xl font-bold font-cormorant lg:text-4xl mb-4 hover:text-primaryText transition-all'>Prawn Fried</h2>
                            <p className='text-xl text-center'>It is a long established fact that a reader will be distracted</p>
                        </div> 
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-5'>
                            <img className='fluid' src={prawn} alt='new-item' />
                            <div className='bg-white hover:bg-primaryText hover:text-white transition-all text-black p-3 text-2xl font-medium rounded-lg origin-center rotate-45 absolute bottom-8 right-[43%]'>
                                <span className='origin-bottom -rotate-12'>$32</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white items-center w-[350px]'>
                            <h2 className='text-xl font-bold font-cormorant lg:text-4xl mb-4 hover:text-primaryText transition-all'>Soup with Egg</h2>
                            <p className='text-xl text-center'>It is a long established fact that a reader will be distracted</p>
                        </div> 
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-5'>
                            <img className='fluid' src={prawn} alt='new-item' />
                            <div className='bg-white hover:bg-primaryText hover:text-white transition-all text-black p-3 text-2xl font-medium rounded-lg origin-center rotate-45 absolute bottom-8 right-[43%]'>
                                <span className='origin-bottom -rotate-12'>$32</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white items-center w-[350px]'>
                            <h2 className='text-xl font-bold font-cormorant lg:text-4xl mb-4 hover:text-primaryText transition-all'>Prawn with Noodles</h2>
                            <p className='text-xl text-center'>It is a long established fact that a reader will be distracted</p>
                        </div> 
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-5'>
                            <img className='fluid' src={soupEgg} alt='new-item' />
                            <div className='bg-white hover:bg-primaryText hover:text-white transition-all text-black p-3 text-2xl font-medium rounded-lg origin-center rotate-45 absolute bottom-8 right-[43%]'>
                                <span className='origin-bottom -rotate-12'>$32</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white items-center w-[350px]'>
                            <h2 className='text-xl font-bold font-cormorant lg:text-4xl mb-4 hover:text-primaryText transition-all'>Prawn Fried</h2>
                            <p className='text-xl text-center'>It is a long established fact that a reader will be distracted</p>
                        </div> 
                    </div> 
                </SwiperSlide>
            </Swiper>
            {/* <div className='relative'>
                <img className='fluid' src={prawn} alt='new-item' />
                <span className='bg-white text-black p-8 rounded-r-[50px]  rounded-l-[50px] absolute bottom-4 right-[40%]'>$32</span>
            </div>
            <div className=''>
                <img className='fluid' src={soupEgg} alt='new-item' />
            </div>
            <div className=''>
                <img className='fluid' src={prawn} alt='new-item' />
            </div>
            <div className=''>
                <img className='fluid' src={prawnNoodles} alt='new-item' />
            </div> */}
           </div>
        </Section>
    )
}

export default NewItem

const Section = styled.section`
    background: linear-gradient(90deg,#000,#09161d)

`