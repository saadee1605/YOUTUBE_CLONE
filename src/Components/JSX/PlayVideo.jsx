import React, { useEffect, useState } from 'react';
import '../CSS/PlayVideo.css';
import like from '../../Assets/like.png';
import dislike from '../../Assets/dislike.png';
import share from '../../Assets/share.png';
import save from '../../Assets/save.png';
import jack from '../../Assets/jack.png';
import moment from 'moment';

const PlayVideo = (props) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchChannelData = async () => {

        try {
            const api = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setChannelData(jsonData.items[0]);
        } catch (error) {
            console.log('Fetch Error', error);
        }

    };

    const fetchCommentData = async () => {
        try {
            const commentApi = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${props.vidId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
            const response = await fetch(commentApi);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setCommentData(jsonData.items);
        } catch (error) {
            console.log('Fetch Error', error);
        }
    };

    const fetchTheData = async () => {
        try {
            const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.vidId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setApiData(jsonData.items[0]);
        } catch (error) {
            console.error('Fetching data failed:', error);
        }
    };

    useEffect(() => {
        fetchTheData();
    }, [props.vidId]);

    useEffect(() => {
        if (apiData) {
            fetchChannelData();
            fetchCommentData();
        }
    }, [apiData]);

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
        <div className='playvideo'>
            <iframe
                src={`https://www.youtube.com/embed/${props.vidId}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h3>{apiData ? apiData.snippet.title : 'Title Loading...'}</h3>
            <div className="heyy">
                <div className='view-time'>
                    <span>{apiData ? formatViews(apiData.statistics.viewCount) : 'View Loading...'} Views</span> <span className='bull'>&bull;</span> <span>{apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'Time Loading...'}</span>
                </div>
                <div className="specs">
                    <span><img src={like} alt="Like" />{apiData ? formatViews(apiData.statistics.likeCount) : 'Loading Likes...'}</span>
                    <span><img src={dislike} alt="Dislike" /></span>
                    <span><img src={share} alt="Share" /></span>
                    <span><img src={save} alt="Save" /></span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <div className="ee">
                    <div className='aa'>
                        <img src={channelData ? channelData.snippet.thumbnails.default.url : jack} alt="Channel Thumbnail" />
                        <div className='pp'>
                            <p>{apiData?.snippet?.channelTitle || "Loading..."}</p>
                            <span>{channelData ? formatViews(channelData.statistics.subscriberCount) : 'Loading Subscribers...'}</span>
                        </div>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className="video-description">
                    <p>{apiData?.snippet?.description.slice(0, 200) || "Loading..."}</p>
                </div>
                <hr />
                <h4 className='comm-head'>{apiData ? formatViews(apiData.statistics.commentCount) + ' Comments' : 'Comments Loading...'}</h4>
                {commentData.length > 0 ? commentData.map((data, index) => {
                    const comment = data.snippet.topLevelComment.snippet;
                    return (
                        <div key={index} className="comments">
                            <img src={comment.authorProfileImageUrl} alt="User Profile" />
                            <div>
                                <h3>{comment.authorDisplayName}</h3>
                                <span className='mmnnmm'> &bull;{moment(comment.publishedAt).fromNow()}</span>
                                <p>{comment.textDisplay}</p>
                                <div className="ttt">
                                    <span className='eeww'><img src={like} alt="Like" /> {comment.likeCount}</span>
                                    <span className='eeww'><img src={dislike} alt="Dislike" />{comment.dislikeCount}</span>
                                </div>
                            </div>
                        </div>
                    );
                }) : 'No Comments'}
            </div>
        </div>
    );
}

export default PlayVideo;
