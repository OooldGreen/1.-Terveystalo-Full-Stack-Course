import { useState } from "react";

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  if(props.text === 'all') {
    return (
      <tr>
        <td>all</td>
        <td>{props.good + props.nuetral + props.bad}</td>
      </tr>
    )
  } else if(props.text === 'average') {
    return (
      <tr>
        <td>average</td>
        <td>{(props.good + props.bad * -1) /3}</td>
      </tr>
    )
  } else if(props.text === 'positive') {
    if(props.allClick === 0) {
      return (
        <tr>
          <td>positive</td>
          <td>0</td>
        </tr>
      )
    }
  
    return (
      <tr>
        <td>positive</td> 
        <td>{props.good / props.allClick * 100} %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }
}

const Statistics = ({good, nuetral, bad}) => {
  if(good === 0 && nuetral === 0 && bad === 0) {
    return(
      <p>
        No feedback given
      </p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good}></StatisticLine>
        <StatisticLine text='nuetral' value={nuetral}></StatisticLine>
        <StatisticLine text='bad' value={bad}></StatisticLine>
        <StatisticLine text='all' good={good} bad={bad} nuetral={nuetral}></StatisticLine>
        <StatisticLine text='average' good={good} bad={bad}></StatisticLine>
        <StatisticLine text='positive' good={good} allClick={good+nuetral+bad}></StatisticLine>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [nuetral, setNuetral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNuetralClick = () => setNuetral(nuetral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onClick={handleGoodClick}></Button>
      <Button text='nuetral' onClick={handleNuetralClick}></Button>
      <Button text='bad' onClick={handleBadClick}></Button>      

      <h1>statistics</h1>
      <Statistics good={good} nuetral={nuetral} bad={bad}></Statistics>
    </div>
  )
}

export default App;
