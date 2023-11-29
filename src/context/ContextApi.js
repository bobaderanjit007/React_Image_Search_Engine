import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [input , setInput] = useState('dog')
    const [data , setData] = useState()
    const [loader, setLoader] = useState(false)
    const [pages, setPages] = useState(1)
    const [isNull, setIsNull] = useState(false)

    const accessKey = 'IH0d1QLAS8W0H2KcoAnYrw0c7-ToQvnxZrw-v6Kk6RE';
    const url = `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${accessKey}`
    
    async function getImages(e){
        setLoader(true)
        e.preventDefault()
        const res = await axios.get(url)
        const imgData = res.data.results.slice(0, -1);
        setData(imgData)
        if(res.data.results.length === 0){
            setIsNull(true)
        }
        else{
            setIsNull(false)
        }
        setLoader(false)
    }

    async function showMore(){
        setLoader(true)
        const res = await axios.get(`https://api.unsplash.com/search/photos?page=${pages}&query=${input}&client_id=${accessKey}`)
        const imgData = [...data,...res.data.results].slice(0,-1)
        setData(imgData)
        setLoader(false)
    }

    useEffect(()=>{
        async function getImages(){
            const res = await axios.get(`https://api.unsplash.com/search/photos?&query=dog&client_id=${accessKey}`)
            const imgData = res.data.results.slice(0, -1);
            setData(imgData)
        }
        setPages(pages+1)
        getImages()
        // eslint-disable-next-line
    },[])

    return (
        <AppContext.Provider value={{setInput, data, setData, getImages, input, loader, showMore, setPages,pages, isNull}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider , AppContext}