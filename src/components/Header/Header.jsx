import React from 'react'
import "../Header/Header.scss"
const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                Movie App
            </div>
            <div>
                <img src="/images/user.svg" alt="" />
            </div>
        </div>
    )
}

export default Header