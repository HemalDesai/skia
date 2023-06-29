import React, { useState } from "react";
import { location, worldwide } from "../assets";
import Image from "next/image";
import { Dropdown } from "@nextui-org/react";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";

const Popup = ({ onClose }) => {
  const [showPopup2, setShowPopup2] = useState(false);
  const [uploadpop, setUploadpop] = useState(false);
  const openuploadpop = () => {
    setUploadpop(true);
  };
  const closeuploadpop = () => {
    setUploadpop(false);
  };

  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const closePopup = () => {
    setShowPopup2(false);
  };

  return (
    <div className="popup-container">
      {/* Content of the popup */}
      <div className="popup-content">
        <span className="event-title-span">Event Title</span>
        <input
          type="text"
          className="event-title"
          style={{ marginBottom: "5px" }}
        />
        <span className="event-title-span">Event Description</span>
        <input
          type="text"
          className="event-description"
          style={{ marginBottom: "20px" }}
        />
        <div
          className="upload"
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <span className="upload-span">Upload Image</span>
          <button className="upload-button" onClick={openuploadpop}>Upload Files</button>
        </div>
        <div
          className="upload"
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <span className="upload-span">Upload Banner Image</span>
          <button className="upload-button" onClick={openuploadpop}>Upload Files</button>
        </div>
        <div
          className="event-mode"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span className="upload-mode">Event Mode</span>
          <div className="offline">
            <Image src={location} width={15} height={15} />
            <span className="online-span">Offline</span>
          </div>
          <div className="offline">
            <Image src={worldwide} width={15} height={15} />
            <span className="online-span">Online</span>
          </div>
        </div>
        <div
          className="event-type"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span className="event-type-span">Event Type</span>
          <Dropdown>
            <Dropdown.Button flat color="red">
              Select event type
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">option1</Dropdown.Item>
              <Dropdown.Item key="copy">option2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="next-button" onClick={openPopup2}>
            Next
          </button>
        </div>
      </div>
      <>      {showPopup2 && <Popup2 onClose={closePopup} />}
      {uploadpop && <Popup3 onClose={closeuploadpop} />}
      </>

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
        .event-type-span {
          flex-basis: 33%;
          color: #282727;
          font-size: 14px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
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
        .event-title-span {
          color: #282727;
          font-size: 14px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-top: 15px;
        }
        .event-title {
          width: 100%;
          height: 42px;
          border-radius: 6px;
          border: 0.2px solid #000;
          background: #fcfcfc;
        }
        .event-description {
          width: 100%;
          height: 115px;
          border-radius: 6px;
          border: 0.2px solid #000;
          background: #fcfcfc;
        }
        .upload-span {
          flex-basis: 70%;
          color: #282727;
          font-size: 14px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .upload-button {
          flex-basis: 40%;
          width: 180px;
          height: 32px;
          border-radius: 4px;
          border: 0.3px solid #000;
          background: #fcfcfc;
          color: #a2a2a2;
          font-size: 10px;
          font-family: Inter;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
        }

        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9998; /* Adjust the z-index value as needed */
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

export default Popup;
