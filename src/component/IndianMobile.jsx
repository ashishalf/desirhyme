import React, { useEffect, useState, useCallback } from "react";
import { databases } from "../appwrite/appwrite";
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";
import { Query } from "appwrite";

function IndianMobile() {
  const [artists, setArtists] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 30;

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  const fetchData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("country", "indian"),
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$createdAt"), // Corrected ordering field
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

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      fetchData();
    }
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {artists.map((item) => (
        <div
          key={item.$id} // Use unique document ID
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
            <button
              style={{
                borderRadius: "50px",
                padding: "12px 20px",
                background: "#1ED760",
              }}
            >
              <Link className="link" to={item.link}>
                <img style={{ width: "80px" }} src={spotify} alt="Spotify" />
              </Link>
            </button>
          </div>
        </div>
      ))}
      {loading && <p style={{ color: "white", textAlign: "center" }}>Loading...</p>}
    </>
  );
}

export default IndianMobile;
