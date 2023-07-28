import React, { useState } from 'react'
import {FAQ} from'./FAQ'
import Question from './Question'
import './Question.css'

export const According = () => {
    const [data,setData]=useState(FAQ)
  return (
    <>
    
  {
    data.map((curEle)=>{

        const{id}=curEle
        return <Question key={id} {...curEle}/>

    })
  }
  </>
  )
}
export default According
