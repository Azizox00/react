import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
export default function Notefound() {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href="/"
        },1000)
    },[])
  return (
    <div>Not found</div>
  )
}
