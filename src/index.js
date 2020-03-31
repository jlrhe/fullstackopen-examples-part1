import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ description, name, age }) => { //made sure the order doesn't matter when destructuring

  console.log(name)
  console.log(description)
  console.log(age)

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

const CounterSeconds = (props) => {
  const [counter, incrementCounter] = useState(0)
  const [counterOn, toggleCounterOn] = useState(true)

  if(counterOn) {
    setTimeout( () => incrementCounter(counter + 1), 1000)
  }
  
  const stopStartCounter = () => {
    toggleCounterOn(!counterOn)
  }

  return (
  <>
  <div>You have been on this page {counter} seconds.</div>
  <button onClick={stopStartCounter}>Start/Stop counter</button>
  </>
  )
}

const App = () => {
  const now = new Date()
  const wife = "beautiful"
  
  return (
    <div>
      <Hello name="Janne" description="a genius" age={38} />
      <Hello name="Sampo" description="the best" age={3} />
      <Hello name="Minna" description={wife.toUpperCase()} age="secret" />
      <p>It's {now.toDateString()}</p>
      <CounterSeconds />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))