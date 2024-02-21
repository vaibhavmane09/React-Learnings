import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vaibhavmane09')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center text-white bg-gray-600 text-3xl rounded-lg m-4 p-4 '>
        GitHub Follower: {data.followers} 
        <img src={data.avatar_url} alt="Git Profile Image" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/vaibhavmane09')
    return response.json()
}