import React from 'react'

const JokeCard = ({ title, content }) => {
  return (
    <>
      <h3>{title}</h3>
      console.log({title})<p>{content}</p>
      console.log({content})
    </>
  )
}

export default JokeCard
