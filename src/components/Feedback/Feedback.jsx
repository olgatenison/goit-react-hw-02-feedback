import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = event => {
    const buttonName = event.target.name;
    this.setState(prev => ({ [buttonName]: prev[buttonName] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h2 className={css.title}>Please leave feedback!</h2>

        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default Feedback;
