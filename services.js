export const  newsData = async (country)=>{
    return  await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=3c52c84d7dc14a2fa76896347df75996`)
    .then((data) => {
        return data.json()
    })
    .then(data => {
        console.log("fetch data", data)
        return data;
    }).catch((error) => {
     console.log(`error occure ${error}`);
    })
}