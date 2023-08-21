import React, { useContext } from 'react'
import { AppContext } from '../context/productContext'


const About = () => {
  const data=useContext(AppContext)
  console.log("data to the page",data)
  return (
    <div>hello</div>
  )
}

export default About