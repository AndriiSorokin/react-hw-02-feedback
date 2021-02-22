import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedBackOptions from '../FeedBackOptions/FeedBackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateValue = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  positiveFeedBack = () => {
    return (this.state.good / this.getTotal()) * 100;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <>
          <Section title={'Please leave feedback'}>
            <FeedBackOptions
              options={this.state}
              updateValue={this.updateValue}
            />
          </Section>

          <Section>
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message={'No feedback given'} />
            )}
          </Section>
        </>
      </div>
    );
  }
}

FeedBack.propTypes = {};

export default FeedBack;
