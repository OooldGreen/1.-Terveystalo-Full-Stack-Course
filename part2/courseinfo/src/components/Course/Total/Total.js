import React from 'react'

const Total = ({parts}) => {
    return (
        <b>
            total of {parts.reduce((sum, item) => sum + item.exercises,0)} exercises
        </b>
    )
}

export default Total