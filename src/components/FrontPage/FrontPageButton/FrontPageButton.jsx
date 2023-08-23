import React from 'react'
import "./../../../assets/styles/components/FrontPage/FrontPageButton.css"

function FrontPageButton({buttonFrontPage, style}) {
  return (
    <div>
        <button type='submit' style={style}>{buttonFrontPage} </button>
    </div>
  )
}

export default FrontPageButton