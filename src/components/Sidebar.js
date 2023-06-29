// import '../assets/Home_dark.png';
// import Home_dark.png
// import React from "react";
// import "./Home_dark.png";
import React, { useState } from "react";
import {
  Analytics_light,
  Analytics_dark,
  Clubs_light,
  Clubs_dark,
  Events_light,
  Events_dark,
  Help_light,
  Help_dark,
  Home_light,
  Home_dark,
  Logout_light,
  Logout_dark,
  shopify,
} from "../assets";

import Image from "next/image";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="container">
    
    <div className="sidebar">
      <ul >
        <li className="list" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Home_dark : Home_light} width={28} height={28} />
          <span>Home</span>
        </li>
        <li className="list" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Clubs_dark : Clubs_light} width={28} height={28} />
          <span>Club</span>
        </li>
        <li className="list" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Events_dark : Events_light} width={28} height={28} />
          <span>Event</span>
        </li>
        <li className="list" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Analytics_dark : Analytics_light} width={28} height={28} />
          <span>Analytics</span>
        </li>
        </ul>
        <ul>
        <li className="list2" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Help_dark : Help_light} width={18} height={18} />
          <span className="span2">Help & Information</span>
        </li>
        <li className="list" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <Image src={isHovered ? Logout_dark : Logout_light} width={18} height={18} />
          <span className="span2">Logout</span>
        </li>
        </ul>
      
      <style jsx>{`
      @import url=('https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Poppins:wght@100&display=swap')
      .container{
        position: relative;

        
      }
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        ul:hover span {
          color: #000; /* Change the text color to #000 on hover */
          cursor: pointer;
        }
        span {
          color: rgba(0, 0, 0, 0.5);
          font-size: 20px;
          // font-family: Inter;
          font-weight: 500;
          margin-left: 5px;
        }
        .span2 {
          color: rgba(0, 0, 0, 0.6);
          font-size: 11px;
          // font-family: Inter;
          font-weight: 500;
        }
        .list {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          margin-right: 60px;
        }
        .list2 {
          margin-top: auto;
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          margin-right: 47px;
        }
        h1 {
          color: #000;
          font-size: 28px;
          font-family: Poppins;
          font-weight: 500;
        }
        .sidebar {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 200px;
          background-color: #F2F9FF;
          align-items: center;
          height: 90vh;
          border-right: 2px solid rgba(0, 0, 0, 0.10);
          z-index: 2npm run dev
          ;
          
        }
        .header{
          position: absolute;
          z-index: 1;
          
        }
      `}</style>
    </div>
    </div>
  );
};

export default Sidebar;
