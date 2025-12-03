import { useState } from 'react'

const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>
}

const StatisticLine = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props

    if (good + neutral + bad === 0) {
        return <div>
            <h1>Statistics</h1>
            <p>No feedback given</p>
        </div>
    }
    const average = (good - bad) / (good + neutral + bad)
    const positive = good / (good + neutral + bad) * 100

    return (
        <div>
            <div><h1>Statistics</h1></div>
            <div>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={good + neutral + bad} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive + " %"} />
            </div>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const Increment = (value, setValue) => () => {
        return setValue(value + 1)
    }

    return (
        <div>
            <div><h1>Give feedback</h1></div>
            <div>
                <Button onClick={Increment(good, setGood)} text="good"/>
                <Button onClick={Increment(neutral, setNeutral)} text="neutral"/>
                <Button onClick={Increment(bad, setBad)} text="bad"/>
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App