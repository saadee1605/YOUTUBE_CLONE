import React from 'react';
import '../CSS/SideBar.css';
import home from '../../Assets/home.png';
import game_icon from '../../Assets/game_icon.png';
import automobile from '../../Assets/automobiles.png';
import sports from '../../Assets/sports.png';
import entertainmet from '../../Assets/entertainment.png';
import tech from '../../Assets/tech.png';
import music from '../../Assets/music.png';
import blog from '../../Assets/blogs.png';
import news from '../../Assets/news.png';
import jack from '../../Assets/jack.png';
import simon from '../../Assets/simon.png';
import tom from '../../Assets/tom.png';
import megan from '../../Assets/megan.png';
import cameron from '../../Assets/cameron.png';

const SideBar = (props) => {

    return (
        <div className={`sidebar ${props.setSide ? '' : 'dontshow'}`}>
            <div className="sidebar-top">
                <div 
                    className={`sidebar-content ${props.cat === 0 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(0)}
                >
                    <img className='sid-con-img' src={home} alt="Home" />
                    <span>Home</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 20 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(20)}
                >
                    <img className='sid-con-img' src={game_icon} alt="Gaming" />
                    <span>Gaming</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 2 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(2)}
                >
                    <img className='sid-con-img' src={automobile} alt="Automobiles" />
                    <span>Automobiles</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 17 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(17)}
                >
                    <img className='sid-con-img' src={sports} alt="Sports" />
                    <span>Sports</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 24 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(24)}
                >
                    <img className='sid-con-img' src={entertainmet} alt="Entertainment" />
                    <span>Entertainment</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 28 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(28)}
                >
                    <img className='sid-con-img' src={tech} alt="Technology" />
                    <span>Technology</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 10 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(10)}
                >
                    <img className='sid-con-img' src={music} alt="Music" />
                    <span>Music</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 22 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(22)}
                >
                    <img className='sid-con-img' src={blog} alt="Blogs" />
                    <span>Blogs</span>
                </div>
                <div 
                    className={`sidebar-content ${props.cat === 25 ? 'sidebar-active' : ''}`}
                    onClick={() => props.setCat(25)}
                >
                    <img className='sid-con-img' src={news} alt="News" />
                    <span>News</span>
                </div>
            </div>
            <hr className='sidebar-hr' />
            <div className="sidebar-bottom">
                <h3 className='bottom-h3'>Subscribed</h3>
                <div className="sidebar-content">
                    <img style={{ borderRadius: '20px' }} className='sid-con-img' src={jack} alt="PewDiePie" />
                    <span>PewDiePie</span>
                </div>
                <div className="sidebar-content">
                    <img style={{ borderRadius: '20px' }} className='sid-con-img' src={simon} alt="MrBeast" />
                    <span>MrBeast</span>
                </div>
                <div className="sidebar-content">
                    <img style={{ borderRadius: '20px' }} className='sid-con-img' src={tom} alt="JustinBieber" />
                    <span>JustinBieber</span>
                </div>
                <div className="sidebar-content">
                    <img style={{ borderRadius: '20px' }} className='sid-con-img' src={megan} alt="5-MinutesCraft" />
                    <span>5-MinutesCraft</span>
                </div>
                <div className="sidebar-content">
                    <img style={{ borderRadius: '20px' }} className='sid-con-img' src={cameron} alt="Nas Daily" />
                    <span>Nas Daily</span>
                </div>
                
            </div>
        </div>
    );
}

export default SideBar;
