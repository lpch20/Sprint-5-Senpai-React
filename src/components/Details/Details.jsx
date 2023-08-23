import React from 'react'
import ImageDetails from './ImageDetails/ImageDetails'
import DescriptionDetails from './DescriptionDetails/DescriptionDetails'
import '../../assets/styles/components/Details/Details.css'

function Details() {
  return (
    <div className='details'>
        <div>
            <ImageDetails></ImageDetails>
        </div>
        <div>
            <DescriptionDetails></DescriptionDetails>
        </div>
    </div>
  )
}

export default Details