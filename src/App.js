import React, { useState,useEffect } from 'react'
import Background from './Background/Background.jsx';
import Hero from './hero/Hero.jsx'


function App() {
  const [hero,setHero]=useState(2);
  
  
  return (
    <div>
      
    

      <Background hero={hero}/>
<Hero hero={hero} setHero={setHero} />
    </div>
  )
}

export default App
