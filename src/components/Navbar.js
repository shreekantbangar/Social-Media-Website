import React from 'react'
import {FaFacebook, FaSistrix, FaHome, FaFontAwesomeFlag, FaVideo, FaGamepad, FaUsers, FaPlus, FaFacebookMessenger, FaBell, FaCaretDown} from "react-icons/fa"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar__first">
     <div className="navbar__first-logo">
     <FaFacebook className='navbar-logo'/>
     </div> 
     <div className="navbar_first-search">
        <input type="text"  className='navbar__first-searchbar' placeholder='Facebook Search' />
        <FaSistrix className='navbar__searchIcon' />
     </div>
    </div>
    <div className="navbar__middle">
     <span className="middleIcon">
      <FaHome className='navbar__middle-icon'/>
     </span>
     <span className="middleIcon">
      <FaFontAwesomeFlag className='navbar__middle-icon'/>
      <span className="navbar__notify">
        3
      </span>
     </span>
     <span className="middleIcon">
      <FaVideo className='navbar__middle-icon'/>
      <span className="navbar__notify">
        10
      </span>
     </span>
     <span className="middleIcon">
      <FaUsers className='navbar__middle-icon'/>
      <span className="navbar__notify">
        22
      </span>
     </span>
     <span className="middleIcon">
      <FaGamepad className='navbar__middle-icon'/>
     </span>
    </div>
    <div className="navbar__last">
      <span className="navbar__last-section">
        <FaPlus/>
      </span>
      <span className="navbar__last-section">
        <FaFacebookMessenger/>
      </span>
      <span className="navbar__last-section">
        <FaBell/>
      </span>
      <span className="navbar__last-section">
        <FaCaretDown/>
      </span>
    </div>
    </div>
  )
}

export default Navbar