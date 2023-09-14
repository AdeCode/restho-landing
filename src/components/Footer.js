import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterSection className='px-[200px] flex flex-col'>
        <div className='grid grid-cols-3 text-white py-[150px]'>
            <div className='flex flex-col'>
                <h2 className='font-semibold font-cormorant text-5xl mb-6'>Our Facilities</h2>
                <div className='grid grid-cols-2 text-base lg:text-xl gap-y-3 gap-8'>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Indian Menu</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Popular Item</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Menu Item</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>regular Menu</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Private Event</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>New Food</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Italian Menu</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Special Offer</a>
                    <a className='hover:text-primaryText font-medium' href='www.demo.com'>Best Offer</a>                  
                </div>
            </div>
            <div className='flex flex-col items-center pt-10'>
                <div className='mb-4'>
                    <img src='https://restho-nextjs.vercel.app/assets/images/header1-logo.svg' alt='footer'/>
                </div>
                <p className='font-semibold text-base mb-3 lg:text-xl'>Established . 2022</p>
                <span>
                    <img src='https://restho-nextjs.vercel.app/assets/images/icon/footer-shape.svg' alt='footer'/>
                </span>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-semibold font-cormorant text-5xl mb-6'>Address Info</h2>
                <div className='grid grid-cols-1 text-base lg:text-2xl gap-y-3 gap-8'>
                    <h3 className='text-primaryText pr-4'>Phone: <span className='text-white'>+880-1776-766-767</span></h3>
                    <h3 className='text-primaryText pr-4'>Email: <span className='text-white'>info@example.com</span></h3>
                    <h3 className='text-primaryText pr-4'>Fax ID: <span className='text-white'>+99-75667-786</span></h3>
                    <h3 className='text-primaryText pr-4'>Location: <span className='text-white'>Mirpur DOHS,House-167/170,Road-02 Avenue-01.</span></h3>
                </div>
            </div>
        </div>
        <div className='flex justify-between text-white text-lg py-5 border-t border-y-gray-100'>
            <h3 className=''>@Copyright by Egenslab-2023, All Right Reserved.</h3>
            <div className='flex gap-4'>
                <a className='hover:text-primaryText' href='privacy.com'>Privacy &amp; Policy</a>
                 | 
                <a className='hover:text-primaryText' href='privacy.com'>Terms and Conditions</a>
            </div>
        </div>

    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
    background: linear-gradient(90deg,#000,#09161d);

    span:before{
        content: "";
        width: 84px;
        height: 1px;
        background-color: var(--primary-color1);
        position: absolute;
        left: -95px;
        top: 13px;
    }
    span:after{
        content: "";
        width: 84px;
        height: 1px;
        background-color: var(--primary-color1);
        position: absolute;
        left: -95px;
        top: 13px;
    }
`