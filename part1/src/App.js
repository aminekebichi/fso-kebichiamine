import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return(
    <tbody>
      <tr>
        <td>{text}:</td> 
        <td>&nbsp;&nbsp;&nbsp;{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({reviews}) => {
  const total = reviews.good + reviews.neutral + reviews.bad
  const avg = (1*reviews.good + (-1)*reviews.bad)/total
  const posPerc = ((reviews.good)/total)*100

  if (total > 0){
    return(
      <div>
        <h4>STATISTICS</h4>
        <table>
          <StatisticLine text="Total # of Reviews" value={total}/>
          <StatisticLine text="Avg Review Score (good: 1, neutral: 0, bad: -1)" value={avg} />
          <StatisticLine text="Percentage Positive" value={posPerc+'%'}/>
        </table>
      </div>
    )
  }

  return (
    <div>
      <h4>STATISTICS</h4>
      <p>No feedback provided</p>
    </div>
  )
}

const DisplayAnecdote = ({anecdote, value}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {value} votes</p>
    </div>
  )
}

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)
  const [maxVoteAnecdote, setMaxVoteAnecdote] = useState(0) 

  const handleGoodClick = () => {
    const newReviews = {
      good: reviews.good + 1,
      neutral: reviews.neutral,
      bad: reviews.bad
    }
    setReviews(newReviews)
  }

  const handleNeutralClick = () => {
    const newReviews = {
      good: reviews.good,
      neutral: reviews.neutral + 1,
      bad: reviews.bad
    }
    setReviews(newReviews)
  }

  const handleBadClick = () => {
    const newReviews = {
      good: reviews.good,
      neutral: reviews.neutral,
      bad: reviews.bad + 1
    }
    setReviews(newReviews)
  }

  const getNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

  return (
    <div>
      <h2>Feedback Form</h2>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/><br/><br/>
      <table>
        <tbody>
          <tr>
            <td>Good: </td>
            <td>&nbsp;&nbsp;&nbsp;{reviews.good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td>&nbsp;&nbsp;&nbsp;{reviews.neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td>&nbsp;&nbsp;&nbsp;{reviews.bad}</td>
          </tr>
        </tbody>

      </table>

      <Statistics reviews = {reviews} />

      <h2>ANECDOTES</h2>
      <div>
        <h4>Anecdote of the day</h4>
        <DisplayAnecdote anecdote={anecdotes[selected]} value={votes[selected]}/>
        <Button handleClick={getNextAnecdote} text="Next Anecdote"/>
        <Button handleClick={voteForAnecdote} text="Vote"/>
        
        <h4>Anecdote with most votes</h4>
        <p>{winningAnecdote}</p>
      </div>
    </div>
  )
}

export default App