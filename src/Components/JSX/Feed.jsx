import React, { useEffect, useState } from 'react';
import '../CSS/Feed.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
const Feed = (props) => {
    const [ourData, setOurData] = useState([]);
   
    const fetchData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${props.cat}&maxResults=50&regionCode=US&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jSON_Data = await response.json();
            setOurData(jSON_Data.items); 
        } catch (error) {
            console.error('Fetch data failed:', error);
        }
    };
    console.log(1233);
    
    useEffect(() => {
        fetchData();
    }, [props.cat]);
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
    const timeCalculater=(time)=>{
        let date=new Date()
        
    }
    timeCalculater()
    return (
        <div className='feed'>
            { 
                ourData.map((data, index) => {
                    return (
                        <Link to={`video/${data.snippet.categoryId}/${data.id}`} className="card tt" key={index}>
                            <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
                            <h2>{data.snippet.title}</h2>
                            <h3>{data.snippet.channelTitle}</h3>
                            <p>{formatViews(data.statistics.viewCount)} views &bull; {moment(data.snippet.publishedAt).fromNow()}</p>
                        </Link>
                    );
                })
            }
        </div>
    );
};

export default Feed;
