import React from 'react'

function Footer() {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
    <hr />
    <p style={{textAlign: 'center', fontSize: isMobile ? '10px' : '15px'}}>© desirhyme 2023 | All Rights Reserved.</p>
    </>
  )
}

export default Footer
