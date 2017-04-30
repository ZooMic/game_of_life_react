import React from "react";

export default class Random extends React.Component {
    handleClick(e) {
        let newSettings = {
            width : this.props.store.displaySettings.width,
            height : this.props.store.displaySettings.height,
            rows : this.props.store.displaySettings.rows,
            cols : this.props.store.displaySettings.cols,
            randomNumber: this.props.store.displaySettings.randomNumber,
            matrix: [],
        }
        for(let i = 0; i < newSettings.rows; i++) {
            newSettings.matrix.push([]);
            for(let j = 0; j < newSettings.cols; j++) {
                newSettings.matrix[i].push(false);
            }
        }
        let x, y;
        for(let i = 0; i < newSettings.randomNumber;) {
            x = Math.floor(Math.random() * newSettings.cols);
            y = Math.floor(Math.random() * newSettings.rows);
            if(!newSettings.matrix[y][x]) {
                newSettings.matrix[y][x] = true;
                i++;
            }
        }
        this.props.changeDisplaySettings(newSettings);
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)} type="button">Random</button>
        );
    }
}
