import React from "react";

import Start from "./Menu/Start"
import Reset from "./Menu/Reset"
import Default from "./Menu/Default"
import Random from "./Menu/Random"
import Inputs from "./Menu/Inputs"

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Inputs
                    store={this.props.store}

                />
                <Start
                    store={this.props.store}
                    changeStartButton={this.props.changeStartButton}
                    playTheGame={this.props.playTheGame}
                />
                <Reset />
                <Default />
                <Random
                    store={this.props.store}
                    changeDisplaySettings={this.props.changeDisplaySettings}
                />
            </div>
        );
    }
}
