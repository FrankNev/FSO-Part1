import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = ({anecdotes}) => {
  const x = Math.floor((Math.random() * anecdotes.length - 1) + 1);
  const [selected, setSelected] = useState(x)
  const [vote, setVote] = useState(anecdotes)
  const [highest, setHighest] = useState(0)
  const [mostVoted, setMostVoted] = useState(x)

  const handleNext = () => {
    const x = Math.floor((Math.random() * anecdotes.length - 1) + 1);
    setSelected(x)
  }

  const handleVotes = () => {
    const copy = {...anecdotes}
    
    copy[selected].votes += 1

    if (copy[selected].votes > highest) {
      setMostVoted(selected)
      setHighest(copy[selected].votes)
    }

    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].anecdote}</p>
      <button onClick={handleNext}>
        Next anecdote
      </button>
      <button onClick={handleVotes}>
        Vote
      </button>
      <br/>
      <p>This anecdote has <b>{anecdotes[selected].votes}</b> votes.</p>
      <h1>Anecdote with most votes:</h1>
      <p>{anecdotes[mostVoted].anecdote}</p>
      <p>This anecdote has <b>{anecdotes[mostVoted].votes}</b> votes.</p>
    </div>
  )
}

const anecdotes = [
  {
    "anecdote": "If it hurts, do it more often",
    "votes": 0
  },
  {
    "anecdote": "Adding manpower to a late software project makes it later!",
    "votes": 0
  },
  {
    "anecdote": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "votes": 0
  },
  {
    "anecdote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "votes": 0
  },
  {
    "anecdote": "Premature optimization is the root of all evil.",
    "votes": 0
  },
  {
    "anecdote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "votes": 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById("root")
)