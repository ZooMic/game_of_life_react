import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "GAME OF LIFE",
      subtitle: "using React by Marcin Lichota",
      footer: "Marcin Lichota 2017",
      startButtonSettings:{
        text: "Start",
        clicked: false,
        interval: null,
        intervalValue: 10,
      },
      displaySettings: {
          height: 300,
          width: 300,
          cols: 60,
          rows: 60,
          randomNumber: 782,
          matrix: [],
      },
    };
  }

  playTheGame() {

      let newMatrix = [];
      const oldMatrix = this.state.displaySettings.matrix;
      const rows = this.state.displaySettings.rows;
      const cols = this.state.displaySettings.cols;
      for(let i = 0; i < rows; i++) {
          newMatrix.push([]);
          for(let j = 0; j < cols; j++) {
              newMatrix[i].push(false);
          }
      }
      let c;
      for(let i = 0; i < rows; i++) {
          for(let j = 0; j < cols; j++) {
              c = 0;
              for(let a = i-1; a <= i+1; a++) {
                  for(let b = j-1; b <= j+1; b++) {
                      if(a < rows && b < cols && a >= 0 && b >= 0) {
                          if(!(a == i && b == j)) {
                              if(oldMatrix[a][b]) c++;
                          }
                      }
                  }
              }
              if(oldMatrix[i][j]) {
                  if(c == 2 || c == 3) newMatrix[i][j] = true;
                  else newMatrix[i][j] = false;
              } else {
                  if(c == 3) newMatrix[i][j] = true;
                  else newMatrix[i][j] = false;
              }
          }
      }
      const displaySettings = {
          height: this.state.displaySettings.height,
          width:this.state.displaySettings.width,
          rows:this.state.displaySettings.rows,
          cols:this.state.displaySettings.cols,
          matrix:newMatrix,
          randomNumber:this.state.displaySettings.randomNumber,
      }
      this.setState({displaySettings});
  }

  changeDisplaySettings(displaySettings) {
      this.setState({displaySettings});
  }

  changeStartButton(startButtonSettings) {
      this.setState({startButtonSettings});
      if(startButtonSettings.clicked) {
          this.playTheGame();
      }
  }

  render() {
      return (
        <div>
            <Header
                title={this.state.title}
            />
            <Body
                store={this.state}
                changeStartButton={this.changeStartButton.bind(this)}
                changeDisplaySettings={this.changeDisplaySettings.bind(this)}
                playTheGame={this.playTheGame.bind(this)}
                displaySettings={this.state.displaySettings}
            />
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}
