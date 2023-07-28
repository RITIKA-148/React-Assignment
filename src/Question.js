import React, { useState } from 'react'
import img1 from"./image/Minus.png"


 const Question = ({question,answer}) => {
    const[show,setShow]=useState(false);
  return (
    <>
        <div className='main-heading'>
            <h6 className='main-question'>{question}
            <div>
            {/* <span className='clickable' onClick={()=>setShow(!show)}>+</span> */}
            <img className='clickable' src={img1}  onClick={()=>setShow(!show)}></img>
            </div>
</h6>

        </div>
        <div className='answers'>

        { show&&<p className="answer">{answer}</p>} 
        </div>

    
        {/* <h1>{question}
        
        </h1>
        <p>{answer}</p> */}
        </>
  )
}
export default Question;
