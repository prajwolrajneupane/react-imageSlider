import React from 'react'
import image1 from './../assets/image1.png';
import image2 from './../assets/image2.png';
import image3 from './../assets/image3.jpg';


import './background.css'

function Background({hero}) {
    {

       if (hero===0) {
       return (<img src={image1} className='background' alt="" />)
       
       }
       else if(hero===1)
        {
return(            <img src={image2} className='background' alt="" />)

        }
        else if(hero===2)
            {
                return(<img src={image3} className='background' alt="" />)
    
            }
            

}
}

export default Background
