import React from 'react';
import  {Link} from "react-router-dom";


function Header() {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: isMobile ? '20px 20px' : '30px 60px' }}>
        <div>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: isMobile ? '15px' : 'inherit' }}>
            desiRhyme <br /> <span style={{ fontSize: isMobile ? '10px' : '15px' }}>by @ashishalf</span>
          </h2>
        </div>
        <Link to="https://open.spotify.com/playlist/24QyAedxzc1U0bxV6eFoSX?si=ced57226d9f145c6">
          <img
            width={isMobile ? 40 : 58}
            height={isMobile ? 40 : 58}
            src="https://img.icons8.com/3d-fluency/94/spotify.png"
            alt="spotify"
          />
        </Link>
      </div>
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: isMobile ? '40px' : '96px',
            textDecoration: 'underline',
            marginBottom: '-10px',
            fontFamily: 'Lobster',
          }}
        >
          No Limits, Just Lyrics
        </h1>
        <p style={{ textAlign: 'center', fontSize: isMobile ? '15px' : '36px', fontFamily: 'Montserrat', marginBottom:'50px'}}>
          Exploring the Dynamic World of Indian and International Rappers.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'20px', paddingBottom:isMobile ? '20px' : '20px'}}>
  <Link to="/indian" style={{color:'white', textDecoration:"none"}}>Indian</Link>
  <Link to="/international" style={{color:'white', textDecoration:"none"}}>International</Link>
</div>

    </>
  );
}

export default Header;
