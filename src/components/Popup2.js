import React, { useState } from "react";
import Image from "next/image";
import { single, people2, hammer, heart } from "../assets";
import { Switch } from "@nextui-org/react";

const Popup2 = ({ onClose }) => {
  const [group, setGroup] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
  };
  const handleClickGroup = () => {
    setGroup(true);
  };
  const handleClickSingle = () => {
    setGroup(false);
  };
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div
          className="event-mode"
          style={{
            display: "flex",
            alignItems: "center",marginBottom: "20px",
          }}
        >
          <span className="upload-mode">Participation type</span>
          <button className="offline" onClick={handleClickSingle}>
            <Image src={single} width={15} height={15} />
            <span className="online-span">Individual</span>
          </button>
          <button className="offline" onClick={handleClickGroup}>
            <Image src={people2} width={15} height={15} />
            <span className="online-span">Group</span>
          </button>
        </div>
        {group && (
          <div
            className="event-mode"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span className="upload-mode">Members </span>
            <input type="number" placeholder="Min" className="input-members" />
            <input type="number" placeholder="Max" className="input-members" />
          </div>
        )}
        <div className="date" style={{ display: "flex", alignItems: "center",marginBottom: "20px" }}>
          <span className="upload-mode">Start Date and Time </span>
          <input
            type="datetime-local"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            className="date-input"
          />
        </div>
        <div className="date" style={{ display: "flex", alignItems: "center",marginBottom: "20px" }}>
          <span className="upload-mode">End Date and Time </span>
          <input
            type="datetime-local"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            className="date-input"
          />
        </div>
        <div
          className="event-mode"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span className="upload-mode">Judging Mode</span>
          <button className="offline" onClick={handleClickSingle}>
            <Image src={heart} width={15} height={15} />
            <span className="online-span">Likes</span>
          </button>
          <button className="offline" onClick={handleClickGroup}>
            <Image src={hammer} width={15} height={15} />
            <span className="online-span">Judging</span>
          </button>
          <button className="offline" onClick={handleClickGroup}>
            <Image src={single} width={15} height={15} />
            <span className="online-span">Hybrid</span>
          </button>
        </div>
        <div className="date" style={{ display: "flex", alignItems: "center",marginBottom: "20px" }}>
          <span className="upload-mode">Location </span>
          <input
            type="text"
            className="date-input"
            placeholder="Enter event location"
          />
        </div>
        <div className="date" style={{ display: "flex", alignItems: "center",marginBottom: "20px" }}>
          <span className="upload-mode">Private </span>
          <Switch initialChecked />
        </div>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={onClose}>
            Back
          </button>
          <button className="next-button">Proceed</button>
        </div>
      </div>

      <style jsx>{`
      .popup-buttons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
        .cancel-button {
          width: 106px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid #85c2f6;
          background: #fcfcfc;
          cursor: pointer;
          color: #000;
          font-size: 9px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .next-button {
          width: 106px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid #85c2f6;
          background: #2b81f8;
          cursor: pointer;
          color: #fff;
          font-size: 9px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 20px;
        }
        .date-input {
          width: 70%;
          border-radius: 4px;
          border: 0.2px solid #838383;
          background: #fcfcfc;
          height: 32px;
          margin-left: 35px;
        }
        .input-members {
          flex-basis: 33%;
          height: 32px;
          border-radius: 4px;
          border: 0.2px solid #000;
          background: #fcfcfc;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
        }
        .upload-mode {
          flex-basis: 33%;
          color: #282727;
          font-size: 14px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .offline {
          flex-basis: 33%;
          height: 32px;
          border-radius: 4px;
          border: 0.2px solid #2670af;
          background: #fcfcfc;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
        }
        .online-span {
          color: #a2a2a2;
          font-size: 10px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 5px;
        }
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999; /* Adjust the z-index value as needed */
          background-color: rgba(
            0,
            0,
            0,
            0.5
          ); /* Semi-transparent background */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popup-content {
          background-color: #fff;
          width: 446px;
          height: 529px;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          /* Additional styling for the popup content */
        }
      `}</style>
    </div>
  );
};

export default Popup2;
