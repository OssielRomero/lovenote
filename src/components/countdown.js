import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './countdown.css';

/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			min: 0,
			sec: 0,
		}
	}

	componentDidMount() {
		// update every second
		this.interval = setInterval(() => {
			const date = this.calculateCountdown(this.props.date);
			date ? this.setState(date) : this.stop();
		}, 1000);
	}

	componentWillUnmount() {
		this.stop();
	}

	calculateCountdown(endDate) {
		let diff = (Date.parse(new Date()) - Date.parse(new Date(endDate))) / 1000;

		// clear countdown when date is reached
		// if (diff <= 0)
		// 	return false;

		const timeLeft = {
			years: 0,
			days: 0,
			hours: 0,
			min: 0,
			sec: 0
		};

		// calculate time difference between now and expected date
		if (diff >= (36500 * 86400)) { // 365.25 * 24 * 60 * 60
			timeLeft.years = Math.floor(diff / (36500 * 86400));
			diff -= timeLeft.years * 36500 * 86400;
		}
		if (diff >= 86400) { // 24 * 60 * 60
			timeLeft.days = Math.floor(diff / 86400);
			diff -= timeLeft.days * 86400;
		}
		if (diff >= 3600) { // 60 * 60
			timeLeft.hours = Math.floor(diff / 3600);
			diff -= timeLeft.hours * 3600;
		}
		if (diff >= 60) {
			timeLeft.min = Math.floor(diff / 60);
			diff -= timeLeft.min * 60;
		}
		timeLeft.sec = diff;

		return timeLeft;
	}

	stop() {
		clearInterval(this.interval);
	}

	addLeadingZeros(value) {
		value = String(value);
		while (value.length < 2) {
			value = '0' + value;
		}
		return value;
	}

	render() {
		const countDown = this.state;

		return (
			<div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span>{countDown.days === 1 ? 'Days' : 'Days'}</span>
          </span>
        </span>

				<span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
						<span>
							{(function() {
								switch(countDown.hours) {
									case 1:
										return 'Hours';
									case 2:
									case 3:
									case 4:
										return 'Hours';
									default:
										return 'Hours';
								}
							})()}
						</span>
          </span>
        </span>


				<span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
						<span>
							{(function() {
								switch(countDown.min) {
									case 1:
										return 'Minutes';
									case 2:
									case 3:
									case 4:
										return 'Minutes';
									default:
										return 'Minutes';
								}
							})()}
						</span>
          </span>
        </span>

				<span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            						<span>
							{(function() {
								switch(countDown.sec) {
									case 1:
										return 'Seconds';
									case 2:
									case 3:
									case 4:
										return 'Seconds';
									default:
										return 'Seconds';
								}
							})()}
						</span>
          </span>
        </span>
			</div>
		);
	}
}

Countdown.propTypes = {
	date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
	date: new Date()
};

export default Countdown;