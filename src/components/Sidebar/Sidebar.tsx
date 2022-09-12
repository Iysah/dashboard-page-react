import React, { useEffect, useState } from 'react';

import { FaUserTie, FaBook, FaTicketAlt, FaChartPie, FaTags, FaLightbulb } from 'react-icons/fa';
import { RiHomeSmileFill, RiSettings3Fill, RiTeamFill } from 'react-icons/ri';

import { Wrapper } from './style';



const Sidebar = () => {
  const [currentLink, setCurrentLink ] = useState(1);

  return (
    <>
      <Wrapper>
        <div className='top'>
          {/* <div className='brand'>
            <RiHomeSmileFill />
            <span>MY PROFILE</span>
          </div> */}

          <div className='toggle'></div>
          <div className='links'>
            <ul>
              <li onClick={() => setCurrentLink(1)} className={ currentLink === 1 ? "active" : ""}>
                <a href='#'>
                  <FaChartPie />
                  <span>Overview</span>
                </a>
              </li>
              <li onClick={() => setCurrentLink(2)} className={ currentLink === 2 ? "active" : ""}>
                <a href='#'>
                  <FaTicketAlt />
                  <span>Ticket</span>
                </a>
              </li>
              <li onClick={() => setCurrentLink(3)} className={ currentLink === 3 ? "active" : ""}>
                <a href='#'>
                  <FaLightbulb />
                  <span>Ideas</span>
                </a>
              </li>
              <li onClick={() => setCurrentLink(4)} className={ currentLink === 4 ? "active" : ""}>
                <a href='#'>
                  <RiTeamFill />
                  <span>Contact</span>
                </a>
              </li>
              <li onClick={() => setCurrentLink(5)} className={ currentLink === 5 ? "active" : ""}>
                <a href='#'>
                  <FaUserTie />
                  <span>Agent</span>
                </a>
              </li>
              <li onClick={() => setCurrentLink(6)} className={ currentLink === 6 ? "active" : ""}>
                <a href='#'>
                  <FaBook />
                  <span>Article</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='bottom'>
          <ul>
            <li onClick={() => setCurrentLink(7)} className={ currentLink === 7 ? "active" : ""}>
              <a href='#'>
                <RiSettings3Fill />
                <span>Settings</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(8)} className={ currentLink === 8 ? "active" : ""}>
              <a href='#'>
                <FaTags />
                <span>
                  subcription
                </span>
              </a>
            </li>
          </ul>

        </div>
      </Wrapper>
    </>
  )
}

export default Sidebar