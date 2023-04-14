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
      <div>
        all {props.good + props.nuetral + props.bad}
      </div>
    )
  } else if(props.text === 'average') {
    return (
      <div>
        average {(props.good + props.bad * -1) /3}
      </div>
    )
  } else if(props.text === 'positive') {
    if(props.allClick === 0) {
      return (
        <div>
          positive 0
        </div>
      )
    }
  
    return (
      <div>
        positive {props.good / props.allClick * 100} %
      </div>
    )
  } else {
    return (
      <div>
        {props.text} {props.value}
      </div>
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
    <div>
      <StatisticLine text='good' value={good}></StatisticLine>
      <StatisticLine text='nuetral' value={nuetral}></StatisticLine>
      <StatisticLine text='bad' value={bad}></StatisticLine>
      <StatisticLine text='all' good={good} bad={bad} nuetral={nuetral}></StatisticLine>
      <StatisticLine text='average' good={good} bad={bad}></StatisticLine>
      <StatisticLine text='positive' good={good} allClick={good+nuetral+bad}></StatisticLine>
    </div>
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
