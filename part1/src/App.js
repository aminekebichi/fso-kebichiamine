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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      {/* <Total exercises = {10} /> */}
    </div>
  )
}

export default App