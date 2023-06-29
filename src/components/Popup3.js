import React, { useState } from "react";

const Popup3 = ({ onClose }) => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    uploadImages(files);
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    uploadImages(files);
  };

  const uploadImages = (files) => {
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);
      newImages.push({ name: file.name, url: imageUrl });
    }
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleImageRemove = (imageName) => {
    const updatedImages = uploadedImages.filter(
      (image) => image.name !== imageName
    );
    setUploadedImages(updatedImages);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="heading">Upload Image</span>
        <div
          className="drag-drop-container"
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
          <div className="upload-area">
            Drag and drop files here or click to browse.
          </div>
          <div className="uploaded-images">
            {uploadedImages.map((image, index) => (
              <div key={index} className="image-wrapper">
                <div className="image-name">
                  {image.name}
                  <button
                    className="remove-button"
                    onClick={() => handleImageRemove(image.name)}
                  >
                    &#x2715;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="cancel-button" onClick={onClose}>
            Back
          </button>
      </div>
      <style>{`
      .cancel-button{
        width: 106px;
height: 30px;
border-radius: 8px;
border: 1px solid #85C2F6;
background: #FCFCFC;
color: #000;
font-size: 16px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:150px;
margin-left: 175px;
cursor : pointer;
      }
      .image-name{
        margin-top:10px;
      }
      .remove-button{
        float:right;
        margin-right:10px;
        border-radius: 3px;
background: #FED6D6;
color:#F65D5D;
border:none;
      }
      .image-wrapper{
        width: 344px;
height: 44px;
border-radius: 4px;
border: 0.2px solid #000;
background: #FFF;
      }
      .heading{
        
        color: #282727;
        
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 20px;
      }
      .uploaded-images{
        margin-top: 170px;
      }
      .drag-drop-container{
        width: 311px;
        height: 217px;
        margin-left:65px;
        border-style: dashed;
      }
      .upload-area{
       
        color: #838383;
font-size: 18px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
padding:30px;
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

export default Popup3;
