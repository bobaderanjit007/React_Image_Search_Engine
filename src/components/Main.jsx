import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const Main = () => {

    const { input, setInput, getImages } = useGlobalContext()

    
    return (
        <>
            <h1>Image Search Engine</h1>
            <form id='search-form' onSubmit={getImages}>
                <input type="text" id='search-box' value={input} onChange={(e) => {
                    setInput(e.target.value)
                }} placeholder="Search anything here..." />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Main
