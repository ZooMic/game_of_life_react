import React from "react";

import Element from "./Display/Element"

export default class Display extends React.Component {
    render() {
        const width =  this.props.store.displaySettings.width;
        const height =  this.props.store.displaySettings.height;
        const cols =  this.props.store.displaySettings.cols;
        const rows =  this.props.store.displaySettings.rows;
        const matrix = this.props.store.displaySettings.matrix;
        const style = {
            width:  width + "px",
            height:  height + "px",
        }

        let elements = [];
        let elementStyle = {};

        elementStyle = {
            width: (width / cols)+"px",
            height: (height / rows)+"px",
        }

        let it = 0;
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j]) {
                    elements.push(<Element key={it++} style={elementStyle} className="active"/>)
                } else {
                    elements.push(<Element key={it++} style={elementStyle} className="unactive"/>)
                }
            }
        }

        return (
            <div className="display" style={style}>
                {elements}
            </div>
        );
    }
}
