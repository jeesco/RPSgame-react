import React from 'react'

import rock from '../assets/Rock.png'
import paper from '../assets/Paper.png'
import scissors from '../assets/Scissors.png'

function ChooseBtns(props) {
  return (
    <div className='choose-container'>
      <p className='choose-text'>You</p>
      <section className='choose-section'>
        <div onClick={props.handleClick}><img className={`choose-img ${props.classRock}`} id='rock' src={rock} /></div>
        <div onClick={props.handleClick}><img className={`choose-img ${props.classPaper}`} id='paper' src={paper} /></div>
        <div onClick={props.handleClick}><img className={`choose-img ${props.classScissors}`} id='scissors' src={scissors} /></div>

      </section>
      <p className='choose-text'>VS</p>
      <section className='choose-section'>
        <div onClick={props.handleClick}><img className={`choose-img ${props.computerClassRock}`} id='rock' src={rock}/></div>
        <div onClick={props.handleClick}><img className={`choose-img ${props.computerClassPaper}`} id='paper' src={paper} /></div>
        <div onClick={props.handleClick}><img className={`choose-img ${props.computerClassScissors}`} id='scissors' src={scissors} /></div>
      </section>
      <p className='choose-text'>Computer</p>
    </div>
  )
}

export default ChooseBtns