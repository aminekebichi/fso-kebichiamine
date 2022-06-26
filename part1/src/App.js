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
  const [votes, setVotes] = useState({
    a1votes: 0, a2votes: 0, a3votes: 0, a4votes: 0, a5votes: 0, a6votes: 0, a7votes: 0
  })
  const anecdotes = [
    ['If it hurts, do it more often.', votes.a1votes],
    ['Adding manpower to a late software project makes it later!', votes.a2votes],
    ['The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes.a3votes],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes.a4votes],
    ['Premature optimization is the root of all evil.', votes.a5votes],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes.a6votes],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes.a7votes]
  ]
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

  const getNextAnecdote = () => setSelected(Math.floor(Math.random()*7))

  const voteForAnecdote = () => {
    console.log('hello ' + selected)

    switch (selected){
      case 0: {
        const newVotes = {
          ...votes,
          a1votes: votes.a1votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
      case 1: {
        const newVotes = {
          ...votes,
          a2votes: votes.a2votes + 1
        }
        setVotes(newVotes)
      } break;
      case 2: {
        const newVotes = {
          ...votes,
          a3votes: votes.a3votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
      case 3: {
        const newVotes = {
          ...votes,
          a4votes: votes.a4votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
      case 4: {
        const newVotes = {
          ...votes,
          a5votes: votes.a5votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
      case 5: {
        const newVotes = {
          ...votes,
          a6votes: votes.a6votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
      case 6: {
        const newVotes = {
          ...votes,
          a7votes: votes.a7votes + 1
        }
        setVotes(newVotes)
        setMaxVoteAnecdote(getMaxVoteAnecdote)
      } break;
    }

    // setMaxVoteAnecdote(getMaxVoteAnecdote)

    console.log(votes)
    console.log(maxVoteAnecdote)
  }

  const getMaxVoteAnecdote = () => {
    let max_i = 0;
    let max_votes = -1;
    for (let i = 0; i < anecdotes.length; i++){
      if (anecdotes[i][1] > max_votes){
        max_votes = anecdotes[i][1]
        max_i = i
      }
    }
    return max_i
  }

  // setInterval(() => {
  //   setMaxVoteAnecdote(getAnecdoteWithMostVotes)
  // }, 100)

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
        <DisplayAnecdote anecdote={anecdotes[selected][0]} value={anecdotes[selected][1]}/>
        <Button handleClick={getNextAnecdote} text="Next Anecdote"/>
        <Button handleClick={voteForAnecdote} text="Vote"/>
        
        <h4>Anecdote with most votes</h4>
        <p>{anecdotes[maxVoteAnecdote][0]}</p>
      </div>
    </div>
  )
}

export default App