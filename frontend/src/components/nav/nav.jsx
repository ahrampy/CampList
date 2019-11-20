import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const { logout, loggedIn, openModal } = props;

    let buttons = loggedIn ? (
        <>
            <button className='btn' onClick={logout}>Log Out</button>
            <button className='btn' ><Link to={`/users/${props.userId}`} style={{ textDecoration: 'none' }, { outline: 'none' }}>
                Account
                </Link>
            </button>
        </>
    ) : (
        <>
            <button className='btn' onClick={() => openModal('login')}>
                Log In
            </button>
            <button className='btn' onClick={() => openModal('signup')}>
                Sign Up
            </button>
        </>
        );
    return (
        <header className='nav-bar-container'>
            <div className='nav-bar'>
                <div className='nav-logo-container'>
                    <Link to='/' style={{ textDecoration: 'none' }, { outline: 'none' }}>
                        <div className='nav-logos'>
                            {/* <img className='nav-logo-name' src='/logo.png'> */}
                            {/* </img> */}
                        </div>
                    </Link>
                </div>
                <div className='nav-buttons'>
                    {buttons}
                </div>
            </div>
        </header>
    )
}


export default Nav;