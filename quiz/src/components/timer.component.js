import React, { Component } from 'react';
import { TIMER_VAL } from "./../shared/constants";

export default class Timer extends Component {
    state = {
        minutes: TIMER_VAL,
        seconds: 0,
        timeup: false
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
                <div className="mx-auto text-center">
                    { minutes === 0 && seconds === 0
                        ? <span>Time Up!</span>
                        : <span>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                    }
                </div>
        )
    }
}