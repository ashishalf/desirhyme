import React from "react";
import data from "../data";
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";

function IndianMobile() {
  const IndianArtists = data.filter(artist => artist.country === "indian")

  return (
    <>
      {IndianArtists.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "20px 10px", // Adjust margins for mobile
            background: "black",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column", // Stack items vertically on mobile
            padding: "20px",
          }}
        >
          <div>
            <img
              style={{
                width: "100%", // Adjust the width for mobile
                borderRadius: "10px",
                objectFit: "cover",
              }}
              className="image"
              src={item.imageUrl}
              alt={`Image for ${item.title}`}
            />
          </div>
          <div
            style={{
              textAlign: "center", // Center text on mobile
              margin: "20px 0", // Adjust margin for mobile
            }}
          >
            <h1 className="title" style={{ fontSize: "24px", color: "white" }}>
              {item.title}
            </h1>
            <p
              className="details"
              style={{
                fontSize: "16px",
                color: "white",
                fontFamily: "Montserrat",
              }}
            >
              {item.details}
            </p>
            <button style={{ borderRadius: "50px", padding: "12px 20px", background:'#1ED760', }}>
              <Link className="link" to={item.link}>
                <img style={{ width: "80px" }} src={spotify} alt="Spotify" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default IndianMobile;
