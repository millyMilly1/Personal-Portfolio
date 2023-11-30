import React from 'react';
import './header.css';
import  Cta from  './Cta';
import ME from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header id='home'>
        <div className= "container header__container "> 
          <h5>Hello i'm</h5>
          <h1>Henry Chukwura Chukwunonso</h1>
          <h5 className='text-light'>Software Developer</h5>
          
          <Cta/>
          <HeaderSocials/>
          
          <div className='me'>
            <img src={ME} alt='me'/>
          </div>

          <a href='#contact'  className='scrol__down'>scroll down</a>

        </div>
        

    </header>
  )
}

export default header