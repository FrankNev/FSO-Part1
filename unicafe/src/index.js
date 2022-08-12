import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    const total = good + neutral + bad;

    return (
      <table>
        <tbody>
          <Statistic
            text="Good"
            value={good}
          />
          <Statistic
            text="Neutral"
            value={neutral}
          />
          <Statistic
            text="Bad"
            value={bad}
          />
          <Statistic
            text="All"
            value={total}
          />
          <Statistic
            text="Average"
            value={parseFloat((good - bad) / total) * 100 + "%"}
          />
          <Statistic
            text="Positive"
            value={parseFloat((good / total) * 100) + "%"}
          />
        </tbody>
      </table>
    )
  }
}

const Button = ({clickHandler, text}) => {
    return (
      <button onClick={()=> {clickHandler(text)}}>
        {text}
      </button>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    if (e === "Good") {setGood(good + 1)} 
    if (e === "Neutral") {setNeutral(neutral + 1)} 
    if (e === "Bad") {setBad(bad + 1)}
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text={"Good"}  clickHandler={handleClick} />
      <Button text={"Neutral"}  clickHandler={handleClick} />
      <Button text={"Bad"}  clickHandler={handleClick} />
      <h1>Statistics:</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
