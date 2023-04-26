import React from 'react'

function NewGameBtn(props) {
  return (
    <section className='playBtn-container'>
      <div className='playBtn' onClick={props.handleClick} >{props.text}</div>
    </section>
  )
}

export default NewGameBtn