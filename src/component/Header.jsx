import React from 'react';

function Header() {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: isMobile ? '20px 20px' : '30px 60px' }}>
        <div>
          <h2 style={{ fontFamily: 'Montserrat Subrayada', fontSize: isMobile ? '15px' : 'inherit' }}>
            DesiRhyme <br /> <span style={{ fontSize: isMobile ? '10px' : '15px' }}>BY @ASHISHALF</span>
          </h2>
        </div>
        <a href="https://github.com/ashishalf/hiphop/blob/main/README.md">
          <img
            width={isMobile ? 40 : 58}
            height={isMobile ? 40 : 58}
            src="https://img.icons8.com/3d-fluency/94/github.png"
            alt="github"
          />
        </a>
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
          Exploring the Dynamic World of Indian and Pakistani Rappers.
        </p>
      </div>
    </>
  );
}

export default Header;
