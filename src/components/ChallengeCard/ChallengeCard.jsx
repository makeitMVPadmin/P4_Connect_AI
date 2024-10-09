import React from 'react';
import "./ChallengeCard.scss";
import ChallengeCardBanner from "../../assets/images/ChallengeCardBanner.png";
import Pen from "../../assets/images/Pen.png";
import Clock from "../../assets/images/Clock.png";
import Idea from "../../assets/images/Idea.png";


const ChallengeCard = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "300px", // Maximum width for larger screens
          background: "white",
          boxShadow: "0px 0px 12px 2px rgba(82, 82, 82, 0.16)",
          borderRadius: "12px",
          border: "1px #EFEFEF solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          margin: "0 auto", // Center the card
          position: "relative", // Make the parent relative for absolute positioning of the "Hard" button
        }}
      >
        {/* Image Container */}
        <div
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "4 / 3", // Maintain aspect ratio for responsiveness
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Set to relative for absolute positioning of the tag
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={ChallengeCardBanner}
            alt="Challenge Card Banner"
          />

          {/* Corrected Position for the "Hard" Button */}
          <div
            style={{
              backgroundColor: "#37AFFF",
              borderRadius: "40px",
              padding: "4px 12px",
              position: "absolute", // Position the tag absolutely
              top: "10px", // Adjust the position from the top of the image
              left: "10px", // Adjust the position from the left side of the image
              zIndex: 2, // Ensure the button is above the image
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "12px",
                fontFamily: "Corben",
                fontWeight: 700,
                letterSpacing: "0.36px",
              }}
            >
              Hard
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            width: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          {/* Design Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Pen Icon */}
            <img
              src={Pen}
              alt="Pen Icon"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <div
              style={{
                color: "#131313",
                fontSize: "18px",
                fontFamily: "Corben",
                fontWeight: 400,
              }}
            >
              Design
            </div>
          </div>

          {/* First Lorem Ipsum Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Clock Icon */}
            <img
              src={Clock}
              alt="Clock Icon"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <div
              style={{
                color: "#343434",
                fontSize: "14px",
                fontFamily: "Corben",
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet
            </div>
          </div>

          {/* Second Lorem Ipsum Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Idea Icon */}
            <img
              src={Idea}
              alt="Idea Icon"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <div
              style={{
                color: "#343434",
                fontSize: "14px",
                fontFamily: "Corben",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Erat habitant quis erat
            </div>
          </div>

          {/* Learn More Button */}
          <div
            style={{
              width: "100%",
              padding: "10px 0",
              backgroundColor: "#0099FF",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "16px",
                fontFamily: "Corben",
                fontWeight: 700,
              }}
            >
              Learn more
            </div>
          </div>
        </div>
      </div>

      {/* Media Queries for Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            width: 100%;
          }
          img {
            height: auto;
          }
          .card-content {
            font-size: 16px;
          }
        }
        @media (max-width: 480px) {
          div {
            width: 100%;
            max-width: 100%; // Full width for smaller devices
          }
          .card-content {
            font-size: 14px;
          }
          .learn-more-button {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default ChallengeCard;
