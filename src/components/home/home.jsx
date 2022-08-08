import React from 'react'
import './home.css'
import { textFlick } from '../../animetext'


export default function Home({ img }) {
  return (
    <>
      <div className='container__home'>
        <div className='container__myPhoto'>
          <h1 className='title__home'>My Portfolio</h1>
          <img className='home__img' src="/assets/img/myphoto2.PNG" alt="" />
          <span className='word'><textFlick /></span>
        </div>

        <div className='home__circle circle1'></div>
        <div className='home__circle circle2'></div>
        <div className='home__circle circle3'></div>
        <div className='home__circle circle4'></div>
        <div className='home__circle circle5'></div>

      </div>
    </>
  )
}