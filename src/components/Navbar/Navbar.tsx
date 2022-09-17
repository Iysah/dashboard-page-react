import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { CgMenuGridR } from 'react-icons/cg';
import { BsEnvelopeFill, BsFillBellFill, BsFillCaretDownFill } from 'react-icons/bs';


import profile from '../../assets/profile.jpg';

import { AuthLink, NavLinks, Wrapper, Profile } from './style'

const Navbar = () => {
  
  return (
    <Wrapper>
        <NavLinks>
            <div className='search'>
                <BiSearch />
                <input type="search" placeholder='Search' />
            </div>
        </NavLinks>
        <AuthLink>
            <button className='add-prop'>Add a property</button>
            <ul>
                <li>
                    <a href='#'>
                        <CgMenuGridR />
                    </a>
                </li>
                <li className='message'>
                    <a href='#'>
                        <BsEnvelopeFill />
                        <span className='envy-bage '></span>
                    </a>
                </li>
                <li className='notification'>
                    <a href='#'>
                        <BsFillBellFill />
                        <span></span>
                    </a> 
                </li>
            </ul>
            <Profile>
                <img src={profile} alt='Profile pic' />
                <p>Iysah Yusuf</p>
                <BsFillCaretDownFill/>
            </Profile>
        </AuthLink>
    </Wrapper>
  )
}

export default Navbar