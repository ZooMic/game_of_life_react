import React from "react";

import Display from "./DisplayPanel/Display"

export default class DisplayPanel extends React.Component {
    render() {
        return (
            <div className="display-panel" >
                <Display
                    store={this.props.store}
                    changeDisplaySettings={this.props.changeDisplaySettings}
                />
            </div>
        );
    }
}
