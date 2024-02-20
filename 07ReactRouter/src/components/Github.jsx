import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // // const [data, setData] = useState([])
    // // useEffect(() => {
    // //     fetch('https://api.github.com/users/prathamch04')
    // //     .then(response => response.json())
    // //     .then(data => {
    // //         console.log(data);
    // //         setData(data)
    // //     }) 
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">Github followers: {data.followers} 
        <img className="h-40" src={data.avatar_url} alt=""  />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/prathamch04')
    return response.json()
}