import { useState } from 'react'
import './App.css'
import Display from './Components/Display'
import ChooseBtns from './Components/ChooseBtns'
import NewGameBtn from './Components/NewGameBtn'

function App() {

  const [displayText, setDisplayText] = useState('choose to start playing');
  const [displayRock, setDisplayRock] = useState(true);
  const [displayPaper, setDisplayPaper] = useState(true);
  const [displayScissors, setDisplayScissors] = useState(true)
  const [displayComputerRock, setDisplayComputerRock] = useState(true)
  const [displayComputerPaper, setDisplayComputerPaper] = useState(true)
  const [displayComputerScissors, setDisplayComputerScissors] = useState(true)
  

  function handleClick(e) {
    
    let playerChoose = e.target.id
    console.log(playerChoose)

    if (playerChoose == 'rock') {
      console.log('test del rock')
      setDisplayRock(true)
      setDisplayPaper(false)
      setDisplayScissors(false)
    }

    if (playerChoose == 'paper') {
      console.log('test del paper')
      setDisplayRock(false)
      setDisplayPaper(true)
      setDisplayScissors(false)
    }

    if (playerChoose == 'scissors') {
      console.log('test del scissros')
      setDisplayRock(false)
      setDisplayPaper(false)
      setDisplayScissors(true)
    }

    let randomNum = Math.floor(Math.random() * 3)
    console.log(randomNum)

    let computerChoose = (num) => {
      if (num == 0) {
        console.log('pc choose rock')
        setDisplayComputerRock(true)
        setDisplayComputerPaper(false)
        setDisplayComputerScissors(false)
      }
      if (num == 1) {
        console.log('pc choose paper')
        setDisplayComputerRock(false)
        setDisplayComputerPaper(true)
        setDisplayComputerScissors(false)
      }
      if(num == 2) {
        console.log('pc choose scissors')
        setDisplayComputerRock(false)
        setDisplayComputerPaper(false)
        setDisplayComputerScissors(true)
      }
    }
    setTimeout(() => {
      computerChoose(randomNum)
    }, 500);

    let startPlay = (player, computer) => {

      if(player == 'rock' && computer == 1) {
        setDisplayText('Player Loose')
        console.log('Player Loose')
      }
      if(player == 'rock' && computer == 2) {
        setDisplayText('Player Win')
        console.log('Player Win')
      }
      if(player == 'rock' && computer == 0) {
        setDisplayText("I'ts a Tie")
      }
      

      if(player == 'paper' && computer == 0) {
        setDisplayText('Player Win')
        console.log('Player Win')
      }
      if(player == 'paper' && computer == 2) {
        setDisplayText('Player Loose')
        console.log('Player Loose')
      }
      if(player == 'paper' && computer == 1) {
        setDisplayText("I'ts a Tie")
      }


      if(player == 'scissors' && computer == 1) {
        setDisplayText('Player Win')
        console.log('Player Win')
      }
      if(player == 'scissors' && computer == 0) {
        setDisplayText('Player Loose')
        console.log('palyer loose')
      }
      if(player == 'scissors' && computer == 2) {
        setDisplayText("It's a Tie")
      }
    }
    startPlay(playerChoose, randomNum)
  }
  
  let newGame = () => {
    setDisplayRock(true)
    setDisplayPaper(true)
    setDisplayScissors(true)

    setDisplayComputerRock(true)
    setDisplayComputerPaper(true)
    setDisplayComputerScissors(true)

    setDisplayText('choose to start playing')
  }

  return (
    <div className="App">
      <div className='main-container'>
        <h1>Rock Paper Scissors Game</h1>
        <Display text={displayText} />
        <ChooseBtns 
        handleClick={handleClick} 
        classRock={displayRock ? undefined : 'hidde'}
        classPaper={displayPaper ? undefined : 'hidde'}
        classScissors={displayScissors ? undefined : 'hidde'}
        computerClassRock={displayComputerRock ? undefined : 'hidde'}
        computerClassPaper={displayComputerPaper ? undefined : 'hidde'}
        computerClassScissors={displayComputerScissors ? undefined : 'hidde'}
        />
        <NewGameBtn 
          text='New Game' 
          handleClick={newGame}
        />
        <footer>
          <p>Made by <a href='https://github.com/jeesco/'>Jeesco</a> with React JS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
