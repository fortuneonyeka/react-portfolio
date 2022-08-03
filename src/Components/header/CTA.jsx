import React from 'react'
import Resume from "../../Assets/Ihedoro Fortunatus Resume 1page (1).pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">Download My Resume</a>
      <a href="#contact" className="btn btn-primary">Let’s Chat</a>
    </div>
  )
}

export default CTA