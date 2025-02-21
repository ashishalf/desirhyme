import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite"; // Import Appwrite database instance
import spotify from "../assets/spotify.png";
import { Link } from "react-router-dom";
import { Query } from 'appwrite'; // Import Query

function IndianMobile() {
  const [artists, setArtists] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Flag to determine if more data is available
  const [loading, setLoading] = useState(false); // Flag to show loading state
  const [offset, setOffset] = useState(0); // Offset for pagination
  const limit = 30; // Number of documents to fetch per request

  const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;

      setLoading(true);
      try {
        const response = await databases.listDocuments(databaseId, collectionId, [
          Query.equal('country', 'indian'), // Adjust the query as needed
          Query.limit(limit), // Limit the number of documents per request
          Query.offset(offset),
          Query.orderDesc("createdAt")// Offset for pagination
        ]);

        if (response.documents.length < limit) {
          setHasMore(false); // No more data to fetch
        }

        setArtists(prevArtists => [...prevArtists, ...response.documents]);
        setOffset(prevOffset => prevOffset + limit); // Update offset for the next request
      } catch (error) {
        console.error("Error fetching data from Appwrite:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [databaseId, collectionId, offset, loading]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore) {
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {artists.map((item, index) => (
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
            <button
              style={{
                borderRadius: "50px",
                padding: "12px 20px",
                background: '#1ED760',
              }}
            >
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
