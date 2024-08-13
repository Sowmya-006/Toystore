
import React from 'react'
import { BoxRevealDemo } from './Box-Reveal'

import { MagicCardDemo } from './Magic'
import {  MagicCards } from './Magic-copy'
import Footer from '@/components/Shared/Footer'
import FeedbackForm from './Feedbackform'

const Home = () => {
    return (<>
    <br></br>
    <br>
    </br>
        <div className='h-full w-full flex justify-center items-center'>
            <BoxRevealDemo/>
            <MagicCardDemo/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex justify-center items-center ">
    
</div>
<br></br>
<br></br>
<div className="flex justify-center items-center h-30" style={{ backgroundColor: '#d1c8fe' }}>
  <h6 className="font-semibold text-1xl sm:text-3xl md:text-4xl lg:text-6xl" style={{ fontFamily: "'Baloo Chettan 2', cursive" }}>
    ENTER THE REALM OF TOYS
  </h6>
</div>


            <br></br>
            <br></br>
            <div className='h-full w-50 flex-col justify-center items-center'>
            
            <MagicCards/>
 
 
        </div>
        <br></br>
        <FeedbackForm></FeedbackForm>
     
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
        </>
    )
}

export default Home