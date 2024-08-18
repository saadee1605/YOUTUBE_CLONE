import React from 'react'
import PlayVideo from '../../Components/JSX/PlayVideo'
import Recommendation from '../../Components/JSX/Recommendation'
import './Video.css'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {VideoId,categoryId}=useParams()
  
  return (
    <div className='video'>
      
      <PlayVideo vidId={VideoId}/>
      <Recommendation cat={categoryId} />
    </div>
  )
}

export default Video
