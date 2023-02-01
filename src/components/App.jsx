import { Component } from "react"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback(){
    const total = Object.values(this.state).reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
    return total
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positiveFeedbackPercentage)
  }
 
  countLeaveFeedback = (event) => {
    const feedbackType = event.target.name
    this.setState(prevstate => prevstate[feedbackType] += 1)
  }

  render () {
    const {good, neutral, bad} = this.state;
    const optionsTypes = Object.keys(this.state)

    return <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={optionsTypes} onLeaveFeedback={this.countLeaveFeedback}/>
      </Section> 
      <Section title="Statistics">
        {this.countTotalFeedback() ? 
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> :
        <Notification message="There is no feedback"/>}
      </Section> 
    </>
    }
};
