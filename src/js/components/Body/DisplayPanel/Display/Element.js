import React from "react";

export default class Element extends React.Component {
    render() {
        let style = this.props.style;
        let className = "element " + this.props.className;

        return (
            <button className={className} style={style}></button>
        );
    }
}
