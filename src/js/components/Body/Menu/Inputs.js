import React from "react";

export default class Inputs extends React.Component {
  handleChangeWidth(e) {
      
  }

  render() {
    return (
        <div className="inputs">
            <label for="display-width">Display width</label>
            <input id="display-width" value={this.props.store.displaySettings.width} onChange={this.handleChangeWidth.bind(this)} />
        </div>
    );
  }
}
