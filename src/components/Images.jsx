import React, { useState } from 'react';
import { useGlobalContext } from '../context/ContextApi';
import Tooltip from '@mui/material/Tooltip';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Images = () => {
  const { data , isNull} = useGlobalContext();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data) {
    return null; // or display a loading indicator
  }

  const handleDoubleClick = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = "_blank"
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <>

    <div id="search-result">
      {data.map((item, index) => {
        console.log(item.urls)
        return (
          <Tooltip key={index} title="Click to download" style={{position: 'relative'}} arrow>
            <img
              src={item.urls.small}
              alt="images"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
              style={{
                filter: hoveredIndex === index ? 'contrast(140%) brightness(70%)' : 'contrast(100%) brightness(100%)',
                // filter: hoveredIndex === index ? 'brightness(100%)' : 'brightness(100%)',
                transform: `scale(${hoveredIndex === index ? 1.1 : 1})`,
                transition: 'all 0.3s ease-in-out', // Optional: Add a transition effect
              }}
            />
            <DownloadForOfflineIcon 
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
              onClick={() => { handleDoubleClick(item.urls.full) }}
            style={{
              position: 'absolute', 
              top: '50%', 
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              fontSize: '35px',
              cursor: 'pointer',
              display: `${hoveredIndex === index ? 'block' : 'none'}`
            }} />
          </Tooltip>
        );
      })}
    </div>
    {isNull ? <h1 className="error-msg">Sorry! Result not found...😥😥</h1>: null}
    </>

  );
};

export default Images;
