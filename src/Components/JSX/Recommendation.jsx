import React, { useEffect, useState } from 'react'
import '../CSS/Recommendation.css'
import { Link } from 'react-router-dom'

const Recommendation = (props) => {
  const [apiData, setApiData] = useState([])
  const relatedVideo = async () => {
    let api = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=40&videoCategoryId=${props.cat}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    const fetchTheApi = await fetch(api)
    const jsonCon = await fetchTheApi.json()
    setApiData(jsonCon.items)
  }
  useEffect(() => {
    relatedVideo();
  }, [props.cat])

  const formatViews = (count) => {
    if (count >= 1_000_000_000) {
        return (count / 1_000_000_000).toFixed(1) + 'B';
    } else if (count >= 1_000_000) {
        return (count / 1_000_000).toFixed(1) + 'M';
    } else if (count >= 1_000) {
        return (count / 1_000).toFixed(1) + 'K';
    } else {
        return count;
    }
};


  return (
    <div className='recommend'>
      {apiData.map((data, index) => {
        return (
          <Link  className='qwe' to={`/video/${data.snippet.categoryId}/${data.id}`}>
          <div key={index} className="recommend-card">
            <div className="rec-img-card">
              <img src={data.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="rec-card-det">
              <h3>{data.snippet.title}</h3>
              <div className="inner-card-det">
                <p>{data.snippet.channelTitle}</p>
                <p>{formatViews(data.statistics.viewCount)} Views</p>
              </div>
            </div>
          </div>
          </Link>
        )
      })}

    </div>
  )
}

export default Recommendation
