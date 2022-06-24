const Part = ({partName, partContent, partTotal}) => {
  return(
    <div>
      <h3>{partName}</h3>
      <p>{partContent}</p>
      <p>{partTotal}</p>
    </div>
  )
}

const Header = ({course}) => {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {/* <h1>{content}</h1> */}
      <Part partName={parts[0].name} partTotal={parts[0].exercises}/>
      <Part partName={parts[1].name} partTotal={parts[1].exercises}/>
      <Part partName={parts[2].name} partTotal={parts[2].exercises}/>
    </div>
  )
}

const Total = ({exercises}) => {
  return(
    <p>{exercises}</p>
  )
}

const App = () => {
  const courseTitle = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={courseTitle} />
      <Content parts = {[part1, part2, part3]}/>
      {/* <Total exercises = {10} /> */}
    </div>
  )
}

export default App