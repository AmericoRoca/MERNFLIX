import React from 'react'

export const Video = () => {
  return (
    <>
        <video src="https://www.youtube.com/watch?v=T2ZRSYjkA-I" className="object-fit-contain" autoPlay></video>
        <img src="" alt="logo-pelicula" />
        <button className='btn btn-primary'>Reproducir</button>
        <button className='btn btn-primary'>Mas informacion</button>
    </>
  )
}
