import React, { useState, useEffect } from 'react';

class CountDown extends React.Component {
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    };
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            props.timeUp();
            return;
        }
        let timmer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timmer);
        }
    }, [count]);
    return (
        <div>
            {count} Hook
        </div>
    )
}

export { CountDown, NewCountDown }