import React, { Component } from 'react'

class Feedback extends Component { 
  // static propTypes = {

  // }

  state = { 
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClick = ({ currentTarget: {name}}) => {
    this.setState(
      prevState => {
        return {
          [name]: prevState[name] + 1,
        }
      }
    )
   }

  countTotalFeedback = () => {
    const { good, bad, neutral} = this.state
    const total = good + bad + neutral;
    return total
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
 
    const positiveFeedbackPercentage = (this.state.good * 100) / total;
    const fixedcount = positiveFeedbackPercentage.toFixed(2);
    return positiveFeedbackPercentage ? fixedcount : 0
  };

  render() { 
    const { good, bad, neutral} = this.state


    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <li><button type='button' name='good' onClick={this.handleClick}>Good</button></li>
            <li><button type='button' name='neutral' onClick={this.handleClick}>Neutral</button></li>
            <li><button type='button' name='bad' onClick={this.handleClick}>Bad</button></li>
          </ul>
        </div>
        
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>Positiv feedback: {this.countPositiveFeedbackPercentage()} %</li>
          </ul>
        </div>
      </>
    )
  }
} 

export default Feedback;