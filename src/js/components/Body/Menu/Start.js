import React from "react";

export default class Start extends React.Component {
    handleClick(e) {
        if(this.props.store.startButtonSettings.clicked) {
            clearInterval(this.props.store.startButtonSettings.interval);
            const newStatus = {
                text : "Start",
                clicked : false,
                interval : null,
            }
            this.props.changeStartButton(newStatus);
        } else {
            const interval = setInterval(this.props.playTheGame, this.props.store.startButtonSettings.intervalValue);
            const newStatus = {
                text : "Pause",
                clicked : true,
                interval : interval,
            }
            this.props.changeStartButton(newStatus);
        }
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)} type="button">{this.props.store.startButtonSettings.text}</button>
        );
    }
}
