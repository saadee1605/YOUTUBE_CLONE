import React, { useState } from 'react'
import SideBar from '../../Components/JSX/SideBar'
import Feed from '../../Components/JSX/Feed';
import './Home.css'
const Home = (props) => {
const [category,setCategory]=useState(0)

  return (
    <div className={`home ${props.status ? '' : 'dontshow'}`}>
      <SideBar setSide={props.status} cat={category} setCat={setCategory} />
      <Feed cat={category}/>
    </div>
  )
}

export default Home
