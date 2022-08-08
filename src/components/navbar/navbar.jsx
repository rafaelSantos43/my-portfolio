import './navbar.css'
import React from 'react'
import {GitHub, Facebook, Instagram, Twitter} from '@material-ui/icons'


export default function Navbar(){



  return(
    <>
      <div className='container__navbar'>
          <img className='navbar__img' src="/assets/img/myphoto2.PNG" alt="" />

          <div className='container__text'>
            <ul className='container__list'>
                <li className='list__item'><a href="">About Me</a></li>
                <li className='list__item'><a href="">Proyect</a></li>
                <li className='list__item'><a href="">Experience</a></li>
                <li className='list__item'><a href="">Contact</a></li>
                
            </ul>

            <div className='container__icon'>
                <a href=""><GitHub className='icon'/></a>
                <a href=""><Facebook className='icon'/></a>
                <a href=""><Twitter className='icon'/></a>
                <a href=""><Instagram className='icon'/></a>
            </div>

          </div>
      </div>
    </>
  )
}