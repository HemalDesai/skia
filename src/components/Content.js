import React, { useState } from "react";
import Image from "next/image";
import Popup from "./Popup";
import { content, rupee, people, label, location, Date } from "../assets";

const Content = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddNewClick = () => {
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
  };
  return (
    <div className="container">
      <div className="headings">
        <span className="events">Events</span>
        <input className="input" type="text" placeholder="Search" />
        <button className="button" onClick={handleAddNewClick}>Add new</button>
      </div>
      <div className="content">
        <Image
          className="content-image"
          src={content}
          width={140}
          height={140}
        />
        <div className="info">
          <span className="info-span">Stuck in the Sound</span>
          <div className="details">
            <span className="details-span">Synolo</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px",
                marginBottom: "10px",
                marginTop: "25px",
              }}
            >
              <Image src={rupee} width={24} height={24} />
              <span className="span-prize">30,000 in prizes</span>
            </div>
            <button className="details-button">Ongoing</button>
            <div
              style={{ display: "flex", alignItems: "center", margin: "5px" }}
            >
              <Image src={people} width={24} height={24} />
              <span className="span-prize">256 registered</span>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="location-info">
            <Image src={label} width={24} height={24} />
            <span className="location-span">Hackathon</span>
          </div>
          <div className="location-info" style={{ marginRight: "25px" }}>
            <Image src={location} width={24} height={24} />
            <span className="location-span" style={{ marginLeft: "10px" }}>
              Location
            </span>
          </div>
          <div className="location-info">
            <Image src={Date} width={24} height={24} />
            <span className="location-span">04-12-2022</span>
          </div>
        </div>
        {isPopupOpen && <Popup onClose={handleClose} />}
      </div>
      <style jsx>{`
      
        .container {
          background-color: #fcfcfccf;
          width: 100%;
          margin: 4px;
        }
        .headings {
          display: flex;
        }
        .events {
          color: #000;
          font-size: 28px;
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-left: 60px;
          margin-top: 5px;
          flex-basis: 50%;
        }
        .input {
          flex-basis: 30%;
          margin-top: 5px;
        }
        .button {
          margin-left: 30px;
          margin-right: 30px;
          margin-top: 5px;
          width: 123px;
          height: 35px;
          border-radius: 50px;
          background: #2b81f8;
          color: #fff;
          font-size: 16px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        .content {
          display: flex;
          margin-top: 20px;
          padding: 20px;
          margin-left: 30px;
          margin-right: 30px;
          border-radius: 6px;
          border: 0.5px solid #000;
          background: #fcfcfc;
        }
        .content-image {
          flex-basis: 25%;
        }
        .details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-right: 2px solid #bbb;
          padding: 10px;
          background-color: #fff;
        }
        .info {
          margin-left: 20px;
          flex-basis: 60%;
        }
        .info-span {
          color: #000;
          font-size: 24px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 20px;
          margin-top: 30px;
        }
        .span-prize {
          color: #000;
          font-size: 16px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 7px;
        }
        .details-span {
          color: #000;
          font-size: 20px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 5px;
          margin-bottom: 10px;
          margin-top: 25px;
        }

        .details-button {
          width: 106px;
          height: 31px;
          border-radius: 4px;
          border: 0.6px solid rgba(116, 191, 255, 0.3);
          background: rgba(116, 191, 255, 0.3);
          color: #0089ff;
          font-size: 16px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 275;
          line-height: normal;
          margin: 5px;
        }
        .location {
          flex-basis: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .location-info {
          display: flex;
          align-items: center;
          margin: 10px;
        }
        .location-span {
          color: #000;
          font-size: 16px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 7px;
        }
      `}</style>
    </div>
  );
};

export default Content;
