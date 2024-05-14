import React from 'react';
import "./Hero.css"
function Hero({hero,setHero,prevHero}) {

  
  return (
    <div className='counting'>
      <li onClick={()=>{setHero(0)}} className={hero===0?"hero-dot orange":"hero-dot"}></li>
      <li onClick={()=>{setHero(1)}} className={hero===1?"hero-dot orange":"hero-dot"}  ></li>
      <li onClick={()=>{setHero(2)}} className={hero===2?"hero-dot orange":"hero-dot"}></li>

    </div>
  )
}

export default Hero
