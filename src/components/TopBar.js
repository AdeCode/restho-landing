import React from 'react'
import styled from 'styled-components'

function TopBar() {
  return (
    <Top className='flex justify-between text-white text-lg lg:px-32 px-14 py-3'>
        <div className='flex gap-1'>
            <span className='text-primaryText'>Opening Hour:</span>
            <h3>9.00 am to 10.00 pm</h3>
        </div>
        <div className='lg:flex gap-4 hidden'>
            <div className='flex gap-2'>
                <span class="material-symbols-outlined text-primaryText">mail</span>
                <h3 className=''>info@example.com</h3>
            </div>
            <div className='flex gap-2'>
                <span class="material-symbols-outlined text-primaryText">location_on</span>
                <h3>Road-01, Block-B, West London City</h3>
            </div>
        </div>
    </Top>
  )
}

export default TopBar

const Top = styled.div`
    background: linear-gradient(90deg,#000,#09161d)
`