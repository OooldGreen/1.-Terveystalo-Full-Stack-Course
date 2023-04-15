import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Total from './Total/Total'

const Course = ({course}) => {
    const name = course.name
    const parts = course.parts

    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </div>
    )
}

export default Course