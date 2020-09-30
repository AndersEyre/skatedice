import React from "react";
import { Player } from "./Player";
import "../styles/css/Play.css";
import InputNewPlayer from "./InputNewPlayer";
import { TrickSettings } from "./TrickSettings";
import tricks from "../Tricks.js"

export class Play extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winningscore: 10,
      players: [],
      tricks: tricks,
      randomTrick: [],
      displayPlayerInput: false,
      displayTrickSettings: false,
      easy: true,
      medium: true,
      hard: true,
      flatground: true,
      ledge: true,
      rail: true,
      normal: true,
      nollie: true,
      
    }

    this.rollTheDice = this.rollTheDice.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.displayInput = this.displayInput.bind(this);
    this.displayTrickSettings = this.displayTrickSettings.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.changeScoreLimit = this.changeScoreLimit.bind(this);
  }

  rollTheDice() {
    let filteredTricks = [];
    this.state.tricks.map(trick => {
      if ((trick.easy || trick.medium || trick.hard) && (trick.flatground || trick.ledge || trick.rail || trick.drop) && (trick.normal || trick.nollie || trick.switch || trick.fakie) ) {
        filteredTricks.push(trick.name);
      } let randomTrick = filteredTricks[Math.floor(Math.random() * filteredTricks.length)];
      return this.setState({ randomTrick: randomTrick });
    })
  }

  displayInput() {
    this.setState({ displayPlayerInput: !this.state.displayPlayerInput })
  }

  displayTrickSettings() {
    this.setState({ displayTrickSettings: !this.state.displayTrickSettings })
  }


  createPlayer(playerName) {
    let newPlayer = {
      name: playerName,
      score: 0,
    };
    let currentPlayers = this.state.players;
    return this.setState({ players: currentPlayers.concat(newPlayer) })
  }

  handleCheck(e) {
    const checkboxName = e.target.name;
    this.state.tricks.map(trick => {
      if([checkboxName] in trick)
        trick[checkboxName] = !trick[checkboxName];
        return this.setState({[checkboxName]:!this.state[checkboxName]})
    }) 
  }

  changeScoreLimit(e){
    this.setState({winningscore: e.target.value})
  }

  render() {

    return (
      <main className="play">
        <h1 style={{ textDecoration: "underline" }}>{this.state.randomTrick}</h1>
        <br></br>
        <button onClick={this.rollTheDice}>ROLL THE DICE</button>
        <div className="controls-container">
          {/* Displays Trick Settings */}
          <button onClick={this.displayTrickSettings}>Filter Tricks</button>
          {this.state.displayTrickSettings ? <TrickSettings handleClick={this.displayTrickSettings} 
                                                            handleCheck={this.handleCheck}
                                                            handleChange={this.changeScoreLimit}
                                                            winningscore={this.state.winningscore}
                                                            easy={this.state.easy}
                                                            medium={this.state.medium}
                                                            hard={this.state.hard}
                                                            flatground={this.state.flatground}
                                                            ledge={this.state.ledge}
                                                            rail={this.state.rail}
                                                            nollie={this.state.nollie}
                                                            normal={this.state.normal}/> : null}
          {/* Displays Input For New Player Name */}
          <button onClick={this.displayInput}>Add Player</button>
          {this.state.displayPlayerInput ? <InputNewPlayer  handleChange={this.displayInput} handleClick={this.createPlayer} /> : null}
          {/* Returns to Home Component View*/}
          <button onClick={this.props.handleClick}>New Game</button>
        </div>
        <div>
          {/* Displays Added Players */}
          {
            this.state.players.map((player,i) => {
              return <Player winningscore={this.state.winningscore} player={player} key={i}/>
            })
          }
        </div>
      </main>
    );
  }
}

export default Play;