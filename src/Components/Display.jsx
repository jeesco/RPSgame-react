import React from 'react'

function Display(props) {
  return (
    <section className='display-container'>
      <p className='display-text'>{props.text}</p>
    </section>
  )
}

export default Display