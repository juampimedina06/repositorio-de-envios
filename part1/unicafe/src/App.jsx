import {React, useState} from "react";

const Button = ({text, handleclick}) => {
  return (
    <button onClick={handleclick}>
      {text}
    </button>
  )
}

const Promedio = (good, neutral, bad) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return 0;
  }
  return (good - bad) / total;
}

const Positive = (good, neutral, bad) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return 0;
  }
  return (good / total) * 100 + "%";
}

const Statistics = ({text, value}) => {
  return(
    <p>{text}: {value} </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  if(good + neutral + bad === 0) {
    return (
      <>
        <h1>give feedback</h1>
        <Button text="good" handleclick={() => setGood(good + 1)} />
        <Button text="neutral" handleclick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleclick={() => setBad(bad + 1)} />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleclick={() => setGood(good + 1)} />
      <Button text="neutral" handleclick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleclick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good + neutral + bad} />
      <Statistics text="average" value={Promedio(good, neutral, bad)} />
      <Statistics text="positive" value={Positive(good, neutral, bad)} />
    </>
  )
}

export default App