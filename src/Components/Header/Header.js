import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

/**
 * Header component for the application.
 * @param {Object} props - The props object.
 * @param {boolean} props.loggedIn - Indicates whether the user is logged in or not.
 * @returns {JSX.Element} - The rendered header component.
 */
const Header = ({ loggedIn }) => {
    return (
        <header className='header'>
            <div className='header__title'>
                <h1>Agriculture Portal</h1>
                <img
                    src='https://s.tmimgcdn.com/scr/1200x750/180200/tractor-farm-logo-template_180278-original.png'
                    alt='Farm Connect Logo'
                    className='header__logo'
                />
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <Link to='/home' className='header__nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to='/crops' className='header__nav-link'>
                            Crops
                        </Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to='/soil' className='header__nav-link'>
                            Soil
                        </Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to='/crop-soil' className='header__nav-link'>
                            Crop & Soil Mapping
                        </Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to='/weather' className='header__nav-link'>
                            Weather
                        </Link>
                    </li>
                    {/* <li className='header__nav-item'>
                        <Link to='/policies' className='header__nav-link'>
                            News
                        </Link>
                    </li> */}
                    <li className='header__nav-item'>
                        <Link to='/dashboard' className='header__nav-link'>
                            Dashboard
                        </Link>
                        {/* {loggedIn ? (
                            <Link to='/dashboard' className='header__nav-link'>
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link to='/login' className='header__nav-link'>
                                    Login
                                </Link>
                                <Link to='/register' className='header__nav-link'>
                                    Signup
                                </Link>
                            </>
                        )} */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
