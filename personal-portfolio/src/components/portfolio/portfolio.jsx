import React from 'react';
import './portfolio.css';
import pic from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic1 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic2 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic3 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic4 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic5 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';



const data = [

  {
    id: 1,
    image: pic1,
    title: "crypto currency dashboard & financial visualization",
    github: "https://github.com/millyMilly1",
    demo: "https://dribbble.com/shots/23024230-Epoxy-treats",
  },

  {
    id: 2,
    image: pic2,
    title: "crypto currency dashboard & financial visualization",
    github: "https://github.com/millyMilly1",
    demo: "https://dribbble.com/shots/23024230-Epoxy-treats",
  },

  {
    id: 3,
    image: pic3,
    title: "crypto currency dashboard & financial visualization",
    github: "https://github.com/millyMilly1",
    demo: "https://dribbble.com/shots/23024230-Epoxy-treats",
  },

  {
    id: 4,
    image: pic4,
    title: "crypto currency dashboard & financial visualization",
    github: "https://github.com/millyMilly1",
    demo: "https://github.com/millyMilly1/MiyCare-pharmaceuticals",
  },
]


const portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map({id, image, github, demo}) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={pic} alt='portfolio pic'/>
                </div>
                <h3>this is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href=''></a>
                </div>
              </article>
              <div></div>
            )
          }
        }
      </div>
     </section>
  )
}

export default portfolio