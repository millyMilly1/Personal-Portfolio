import React from 'react';
import './portfolio.css';
import pic from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic1 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic2 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic3 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic4 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic5 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';


const portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic} alt="my pic"/>
          </div>

          <h3>This is a portfolio item title 1</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic1} alt="my pic"/>
          </div>
          
          <h3>This is a portfolio item title 2</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic2} alt="my pic"/>
          </div>
          
          <h3>This is a portfolio item title 3</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic3} alt="my pic"/>
          </div>
          
          <h3>This is a portfolio item title 4</h3>
          
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic4} alt="my pic"/>
          </div>
          
          <h3>This is a portfolio item title 5</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pic5} alt="my pic"/>
          </div>
          
          <h3>This is a portfolio item title 6</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/millyMilly1" className='btn'>github</a>
          <a href="#hh" className='btn btn-primary' target='_blank'>live demo</a>
          </div>
        </article>
      </div>
     </section>
  )
}

export default portfolio