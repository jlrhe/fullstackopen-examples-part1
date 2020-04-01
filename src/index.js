import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ description, name, age }) => { //made sure the order doesn't matter when destructuring

  console.log("rendered hello")

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    if(typeof age == "number") {
      return yearNow - age
    }
    return '"redacted"'
  }
  
  return (
    <div>
      <p>Hello {name}. You are {description}. I think you may have been born in {bornYear()}</p>
    </div>
  )
}

const Timer = () => {

  console.log("rendered timer")

  const [counterOn, toggleCounterState] = useState(true)
  const toggleCounter = () => toggleCounterState(!counterOn)

  return (
    <>
    <DisplayCounter counterOn={counterOn} />
    <Button handleClick={toggleCounter} text="Stop/Start counter" />
    </>
  )
}

const DisplayCounter = ({counterOn}) => {

  console.log("rendered Counter")
  
  const [counter, incrementCounter] = useState(0)
  const incrementCounterByOne = () => incrementCounter(counter + 1)

  if(counterOn) {
    setTimeout(incrementCounterByOne, 1000)
  }

  return (
    <div>You have been on this page {counter} seconds.</div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const DateString = () => <div>{new Date().toDateString()}</div>
  
const App = () => {

  console.log("rendered App")
  
  return (
    <div>
      <Hello name="Janne" description="a genius" age={38} />
      <Hello name="Sampo" description="the best" age={3} />
      <Hello name="Minna" description={"beautiful".toUpperCase()} age="secret" />
      <DateString />
      <Timer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))