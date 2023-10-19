import React from 'react';
import './about.css';
import ME from '../../assets/PXL_20230403_150803966.PORTRAIT.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
   <section id='about'> 
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="myPicture"/> 
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward  className='about__icon'/>
          <h5>experience</h5>
          <small>2+ years working</small>
          </article>


          <article className='about__card'>
          <FiUsers  className='about__icon'/>
          <h5>clients</h5>
          <small>5+ worldwide</small>
          </article>


          <article className='about__card'>
          <AiFillFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small>20+ completed</small>
          </article>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed malesuada, est id eleifend dictum, justo erat convallis libero, et malesuada risus neque eu nisi. Vivamus non condimentum arcu.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
       </div>
    </div>
    </section>
  );
};

export default About; 