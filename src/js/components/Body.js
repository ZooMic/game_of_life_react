import React from "react";

import Menu from "./Body/Menu"
import DisplayPanel from "./Body/DisplayPanel"

export default class Body extends React.Component {
  render() {
    return (
      <div className={"body"}>
            <Menu
                store={this.props.store}
                changeStartButton={this.props.changeStartButton}
                changeDisplaySettings={this.props.changeDisplaySettings}
                playTheGame={this.props.playTheGame}
            />
            <DisplayPanel
                store={this.props.store}
                displaySettings={this.props.displaySettings}
                changeDisplaySettings={this.props.changeDisplaySettings}
            />
      </div>
    );
  }
}
