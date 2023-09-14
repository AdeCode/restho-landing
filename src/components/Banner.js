import React from 'react'
import styled from 'styled-components'
import sub from '../images/sub-title.svg'
import img1 from '../images/img1.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img22 from '../images/img22.png'

function Banner() {
  return (
    <Section className='pb-6'>
        <div className='banner text-white grid grid-cols-2 px-[50px] py-7 h-auto pb-[200px]'>
            <div className='pt-20'>
                <div className='flex gap-2 mb-5'>
                    <img src={sub} alt='sub'/>
                        <h3 className='text-primaryText text-lg lg:text-xl'>Welcome to Restho</h3>
                    <img src={sub} alt='sub'/>
                </div>
                <h2 className='text-lg lg:text-7xl font-bold font-cormorant mb-8'>Find Your Best Healthy &amp; Tasty Food.</h2>
                <p className='mb-10'>It is a long estalished fact that a reader will be distracted by the readabe content of a page.</p>

                <button className='border border-primaryText text-primaryText py-5 px-5 rounded-full'>Discover More</button>
            </div>
            <div className='relative hidden lg:flex'>
                <img className='h-auto absolute left-[180px]' src={img1} alt='food'/>
                <img className='h-auto absolute left-[10px] top-[150px]' src={img3} alt='food'/>
                <img className='h-auto absolute right-[260px] top-[150px]' src={img22} alt='food'/>
                <img className='h-auto absolute left-[130px] top-[300px]' src={img4} alt='food'/>
            </div>
        </div>
    </Section>
  )
}

export default Banner

const Section = styled.div`
    background: linear-gradient(90deg,#000,#09161d)
`