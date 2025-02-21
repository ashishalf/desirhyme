import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite"; // Import Appwrite database instance
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";

function ObjectRendererMobile() {
  const [items, setItems] = useState([]);
  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(databaseId, collectionId);
        const documents = response.documents;

        // Shuffle and slice the documents
        const shuffledDocuments = documents.sort(() => Math.random() - 0.5);
        const subset = shuffledDocuments.slice(0, 10); // Adjust number as needed

        setItems(subset);
      } catch (error) {
        console.error("Error fetching data from Appwrite:", error);
      }
    };

    fetchData();
  }, [databaseId, collectionId]);

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "20px 10px",
            background: "black",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <div>
            <img
              style={{
                width: "100%",
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
              textAlign: "center",
              margin: "20px 0",
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
            <button style={{ borderRadius: "50px", padding: "12px 20px", background:'#1ED760' }}>
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

export default ObjectRendererMobile;
