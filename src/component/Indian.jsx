// src/components/Indian.jsx
import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite"; // Import Appwrite database instance
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";
import { Query } from 'appwrite'; // Import Query

function Indian() {
  const [artists, setArtists] = useState([]);
  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  useEffect(() => {
    // Fetch data from Appwrite
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId, [
          // Add any filters or queries here if needed
          Query.equal('country', 'indian') // Adjust the query as needed
        ]);
        const sortedDocuments = response.documents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setArtists(sortedDocuments);
      } catch (error) {
        console.error("Error fetching data from Appwrite:", error);
      }
    };

    fetchData();
  }, [databaseId, collectionId]);

  return (
    <>
      {artists.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "50px 100px",
            background: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%", // Adjust the width as needed
            }}
          >
            <img
              style={{
                width: "60%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              className="image"
              src={item.imageUrl}
              alt={`Image for ${item.title}`}
            />
          </div>
          <div
            style={{ flex: "1", textAlign: "justify", margin: "0 80px 0 0" }}
          >
            <h1 className="title" style={{ fontSize: "36px", color: "white" }}>
              {item.title}
            </h1>
            <p
              className="details"
              style={{
                fontSize: "24px",
                color: "white",
                margin: "30px 0",
                fontFamily: "Montserrat",
              }}
            >
              {item.details}
            </p>
            <button
              style={{
                borderRadius: "50px",
                padding: "16px 30px",
                marginBottom: "20px",
                background: '#1ED760',
              }}
            >
              <Link className="link" to={item.link}>
                <img style={{ width: "120px" }} src={spotify} alt="Spotify" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Indian;
