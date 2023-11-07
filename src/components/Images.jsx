import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const Images = () => {

  const { data } = useGlobalContext()
 
  if (!data) {
    return null; // or display a loading indicator
  }


  return (
    <div id="search-result">
      {data.map((item, index) => {
        return (
            <img key={index} src={item.urls.full} alt="images" />
            /* <img key={index} src={item.urls.small} alt="images" /> */
            /* <img key={index} src={item.urls.small_s3} alt="images" /> */
        )
      })}
    </div>
  )
}

export default Images
