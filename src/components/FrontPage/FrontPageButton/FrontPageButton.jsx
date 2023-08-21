import React from 'react'
import "./../../../assets/styles/components/FrontPage/FrontPageButton.css"

function FrontPageButton(props) {
  return (
    <div>
        <button>{props.buttonFrontPage}</button>
    </div>
  )
}

export default FrontPageButton