import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    console.log('HANDLING GOOD CLICK')
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
      <Button handleClick={handleBadClick} text="bad"/>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
    </div>
  )
}

export default App