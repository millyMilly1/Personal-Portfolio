/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./nav.css";
import {BiHomeCircle} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {BiSolidBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiSolidContact} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav ] =  useState('#');
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }> <BiHomeCircle/> </a>
    <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' } > <BiUser/> </a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' } > <BiSolidBook/> </a>
    <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' } > <RiServiceLine/> </a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' } > <BiSolidContact/> </a>
   </nav>
  )
}

export default Nav