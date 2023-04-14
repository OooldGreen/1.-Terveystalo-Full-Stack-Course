import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  // 生成全零数组 generate an array which all elements are 0
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  // console.log(vote)
  const [mostVotes, setMostVotes] = useState(anecdotes[0])

  // 生成随机数 generate random number range 0 ~ 7
  const nextAnecdote = () => {
    const max = anecdotes.length;
    setSelected(Math.round(Math.random() * max))
    // console.log(selected)
  }

  // 投篇计数 after vote
  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
    // console.log(vote)

    const max = Math.max(...newVote)
    let maxIndex = newVote.findIndex((item, index) => {
      return item === max
    })
    setMostVotes(anecdotes[maxIndex])
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button text='vote' onClick={handleVote}></Button>
      <Button text='next anecdote' onClick={nextAnecdote}></Button>

      <h1>Anecdote with most votes</h1>
      <p>{mostVotes}</p>
    </div>
  )
}

export default App
