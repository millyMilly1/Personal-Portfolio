import React from 'react';
import "./testimonial.css";
import pic from "../../assets/OIG.udGtSpJUej_.jpg";
import pic1 from "../../assets/OIG.udGtSpJUej_.jpg";
import pic2 from "../../assets/OIG.udGtSpJUej_.jpg";
import pic3 from "../../assets/OIG.udGtSpJUej_.jpg";


const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>review from clients</h5>
      <h2>testimonial</h2>


      <div className='container testimonial__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
           <img src={pic} alt='awards'/>
          </div>
          <h5 className='client__name'>ernest achiever</h5>
           <small className='client__review'>
            lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur
           </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
           <img src={pic} alt='awards'/>
          </div>
          <h5 className='client__name'>ernest achiever</h5>
           <small className='client__review'>
            lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur
           </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
           <img src={pic} alt='awards'/>
          </div>
          <h5 className='client__name'>ernest achiever</h5>
           <small className='client__review'>
            lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur
           </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
           <img src={pic} alt='awards'/>
          </div>
          <h5 className='client__name'>ernest achiever</h5>
           <small className='client__review'>
            lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur lorem ipsum dolor sit ament consectetur
           </small>
        </article>
      </div>
    </section>
  )
}

export default testimonial 