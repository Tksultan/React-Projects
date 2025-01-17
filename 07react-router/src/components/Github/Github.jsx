import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()
  /*const [data, setdata] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Tksultan').then(response => response.json()).then(data => {
       setdata(data)
    })
  },[])*/
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl mb-5' >Github Followers: {data.followers}
    <img className="rounded-full h-64"src={data.avatar_url} alt="Git Picture" /></div>
  )
}

export default Github

export const GithubLoader = async() =>{
  const responce = await fetch('https://api.github.com/users/Tksultan')
  return responce.json()
}