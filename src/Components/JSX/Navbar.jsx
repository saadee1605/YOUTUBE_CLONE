import React from 'react'
import '../CSS/Navbar.css'
import menu from '../../Assets/menu.png'
import youtube_logo from '../../Assets/youtubie_logo.jpg'
import search_icon from '../../Assets/search.png'
import upload_icon from '../../Assets/upload.png'
import more_icon from '../../Assets/more.png'
import notification from '../../Assets/notification.png'
import profile_icon from '../../Assets/jack.png'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
   
    return (
        <div className='navbar'>
            <div className="navbar-right">
                <img onClick={props.setNav} className='navbar-right-menu' src={menu} alt="" />
               <Link to='/'><img className='navbar-right-logo' src={youtube_logo} alt="" /></Link>
            </div>
            <div className="navbar-center">
                <div className="inner-center">
                <input className='navbar-center-text' type="text" placeholder='Search' />
                <img className='navbar-search' src={search_icon} alt="" />
                </div>
            </div>
            <div className="navbar-left">
                <img  className='same-note' style={{cursor:'pointer'}} src={upload_icon} alt="" />
                <img  className='same-note' style={{cursor:'pointer'}} src={more_icon} alt="" />
                <img  className='same-note'  style={{cursor:'pointer'}} src={notification} alt="" />
                <img className='left-profile' src={profile_icon} alt="" />

            </div>

        </div>
    )
}

export default Navbar
