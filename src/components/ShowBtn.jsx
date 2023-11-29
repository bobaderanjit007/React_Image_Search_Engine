import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const ShowBtn = () => {

  const {showMore, setPages, pages, isNull} = useGlobalContext()
  const showImages = () =>{
    setPages(pages + 1)
    showMore()
  }
  return (<>
    {!isNull ? <button id="show-more-btn" onClick={showImages} >show more</button> : <></>}
  </>
  )
}

export default ShowBtn
