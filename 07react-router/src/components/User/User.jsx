import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {userid} = useParams()
  return (
    <div className='flex flex-row bg-gray-500 justify-center text-white text-2xl p-4'>User:{userid}</div>
  )
}

export default User

