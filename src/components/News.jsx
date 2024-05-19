import React, { useEffect, useState } from 'react'
import './News.css'
function News() {
  let [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3c52c84d7dc14a2fa76896347df75996`, { signal })
      .then(response => response.json())
      .then(data => {
        console.log("fetch data", data);
        if (data.articles) {
          setData(data.articles);
        }
        setIsLoading(false);
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error("Fetch error:", error);
          setIsLoading(false);
        }
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);
  return (
    <>
     {isLoading && <div>Loading...</div>}
      {!isLoading && data.map((d, index) => (
       <div key={index} className='card' style={{ border: "1px solid rgb(213, 217, 223", width: "auto", height: "auto", borderRadius: "10px", padding: "10px", margin: "20px 45px", display: "flex", flexDirection: "row" }}>
       <div style={ { paddingRight:" 50px"}}>
          <div style={ { fontWeight:"bold"}}>{d.title}</div>
          <div style={{paddingBottom: "50px"}}>{d.content}</div>
           <div>Publish Date: {d.publishedAt}</div>
       </div>
       <div>
          
           <img src={d.urlToImage} alt="Article" style={{ width: "100%" }} />
       </div>
  
      </div>))}
    </>
  )
}

export default News