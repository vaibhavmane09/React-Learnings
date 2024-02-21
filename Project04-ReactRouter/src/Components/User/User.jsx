// creating a router

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div>
        <h1 className='text-4xl text-red-800  bg-slate-400 p-4  rounded-lg'>User: This is a Router at {id}</h1>
    </div>
  )
}

export default User
