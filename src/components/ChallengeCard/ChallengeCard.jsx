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
          maxWidth: "350px", // Use maxWidth for larger screens, but flexible on smaller ones
          background: "white",
          boxShadow: "0px 0px 12px 2px rgba(82, 82, 82, 0.16)",
          borderRadius: "12px",
          border: "1px #EFEFEF solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          margin: "0 auto", // Center the card
        }}
      >
        {/* Image Container */}
        <div
          style={{
            width: "100%",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={ChallengeCardBanner}
            alt="Challenge Card Banner"
          />

          {/* "Hard" Button */}
          <div
            style={{
              backgroundColor: "#37AFFF",
              borderRadius: "40px",
              padding: "4px 12px",
              position: "absolute", // Position absolutely over the image
              top: "10px",
              left: "10px",
              zIndex: 2,
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
            max-width: 100%;
          }
          .card-content {
            font-size: 16px;
          }
        }
        @media (max-width: 480px) {
          div {
            width: 100%;
            max-width: 100%;
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
