import React from 'react';
import  {Link} from "react-router-dom";


function Footer() {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
    <hr />
    <p style={{textAlign: 'center', fontSize: isMobile ? '10px' : '15px'}}>Follow Playlist on <Link to="https://open.spotify.com/playlist/24QyAedxzc1U0bxV6eFoSX?si=ced57226d9f145c6">Spotify</Link></p>

    <p style={{textAlign: 'center', fontSize: isMobile ? '10px' : '15px'}}>© desiRhyme 2025 | All Rights Reserved. <Link to="https://github.com/ashishalf/desirhyme/blob/main/README.md">Github</Link></p>
    </>
  )
}

export default Footer
