import React from 'react'

export const GifItem = ( { title, url, id } ) => {
  return (
    <div className='cards'>
        <img src={ url } alt={ title }  />
        <p>{ title }</p>
    </div>
  )
}
