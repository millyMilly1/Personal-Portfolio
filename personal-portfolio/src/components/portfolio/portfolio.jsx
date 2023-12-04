import React from 'react';
import './portfolio.css';
// import pic from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';
import pic1 from '../../assets/OIG.udGtSpJUej_.jpg';
import pic2 from '../../assets/OIG.WhYPcmYEBnK.jpg';
import pic3 from '../../assets/me.png';
import pic4 from '../../assets/background_image_copy.jpg';
// import pic5 from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg';



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
          data.map(({id, image, github, title, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt= {title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href= {github} className='btn' target='_blank' rel='noreferrer'>github</a>
                  <a href= {demo} className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
     </section>
  )
}

export default portfolio