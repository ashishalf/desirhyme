import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite"; 
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";
import { Query } from "appwrite";

function Pakistani() {
  const [artists, setArtists] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 30; // Adjust limit as needed

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  const fetchData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("country", "pakistani"),
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$createdAt"),
      ]);

      setArtists((prevArtists) => [...prevArtists, ...response.documents]);

      if (response.documents.length < limit) {
        setHasMore(false);
      }

      setOffset((prevOffset) => prevOffset + limit);
    } catch (error) {
      console.error("Error fetching data from Appwrite:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch only on mount

  return (
    <>
      {artists.map((item) => (
        <div
          key={item.$id} // Unique key
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
              width: "50%",
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
                background: "#1ED760",
              }}
            >
              <Link className="link" to={item.link}>
                <img style={{ width: "120px" }} src={spotify} alt="Spotify" />
              </Link>
            </button>
          </div>
        </div>
      ))}
      {loading && <p style={{ color: "white", textAlign: "center" }}>Loading...</p>}
    </>
  );
}

export default Pakistani;
