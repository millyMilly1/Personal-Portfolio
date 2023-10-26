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
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experience</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experience</small>
              </div>
              
            </article>
          </div>
          </div>

          <div className='experience__backend'>
          <h3>Networking technologies</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Network Topology Planning</h4>
              <small className='text-light'>Experience</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Network Design</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div> 
              <h4>Router Configuration</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Subnetting</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Firewall Configuration</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
          </div>
        </div>

     </section>
  )
}

export default experience