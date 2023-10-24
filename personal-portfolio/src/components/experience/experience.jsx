import React from 'react';
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (

    <section id='experience'>
      <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
          <h3>Web development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>PHP</h4>
              <small className='text-light'>Experience</small>
            </article>
          </div>
          </div>

          <div className='experience__backend'>
          <h3>Networking technologies</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Experience</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Experience</small>
            </article>
          </div>
          </div>
        </div>

     </section>
  )
}

export default experience