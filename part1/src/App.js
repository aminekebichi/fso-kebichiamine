import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}:</td> 
      <td>&nbsp;&nbsp;&nbsp;{value}</td>
    </tr>
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

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

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

  return (
    <div>
      <h2>Feedback Form</h2>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/><br/><br/>
      <table>
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
      </table>
      <Statistics reviews = {reviews} />
    </div>
  )
}

export default App