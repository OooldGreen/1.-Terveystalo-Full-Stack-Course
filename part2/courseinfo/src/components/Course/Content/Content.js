import React from 'react'
import Part from './Part/Part'

const Content = ({ parts }) => {
    console.log(parts)
    return (
      <>
        {parts.map(part => 
            <Part key={part.id} part={part}></Part>
        )}
      </>
    )
}


export default Content