import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {

    return (
    <nav className='nav-navbar'>
        <Link className='link-navbar'
            to='/'
            onClick={() => {
                setActive("");
                window.scrollTo(0,0);
            }}
        >
            <a className='title-navbar'>STOICA</a>
        </Link>
        <ul className='ul-navbar'>
          {navLinks.map((link) => (
            <li
                key={link.id}
                onClick={() => setActive(link.title)}
            >
                <a
                    className='a-navbar'
                    href={`#${link.id}`}
                >{link.title}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar