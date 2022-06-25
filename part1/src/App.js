import { useState } from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(Math.max(0, counter - 1))
  const setToZero = () => setCounter(0)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name="Amine" age={24} />

      {counter}<br/><br/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={decreaseByOne}>
        minus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}


export default App