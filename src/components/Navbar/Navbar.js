import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isMobile, setIsMobile] = useState(true);
    const [navbar, setNavbar] = useState(true);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? 'navbar acticve' : 'navbar'}>
            <Link to='/mainpage' 
            className="navbar-logo">
                <i class="fas fa-laugh-wink"></i> 
            </Link>
            
            <ul className = {isMobile ?'navbar-links-mobile' : "navbar-links"}
            onClick={() => setIsMobile(false)}
            >

            <Link to='/mainpage' className='navbar-mainpage-button'>
                <li>감정기록</li>
            </Link>

            <Link to='/list' className='navbar-list-button'>
                <li>감정 리스트</li>
            </Link>

            <Link to='/modified' className='navbar-modified-button'>
                <li>회원 정보 수정</li>
            </Link>

            <Link to='/landingpage' className='navbar-login-button'>
                <li>로그인</li>
            </Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                <i className='fas fa-times'></i> 
                ) : ( 
                <i className='fas fa-bars'> </i>)}
            </button>
        </nav>
    )
}
export default Navbar;