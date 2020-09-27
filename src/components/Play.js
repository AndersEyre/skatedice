import React from "react";
import { Player } from "./Player";
import "../styles/css/Play.css";
import InputNewPlayer from "./InputNewPlayer";
import { TrickSettings } from "./TrickSettings";

export class Play extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      tricks: [{
        name: "ollie",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "nollie",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "FS 180",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "BS 180",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "FS Pop Shuv",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "Bs Pop Shuv",
        easy: true,
        flatground: true,
        active: true
      },
      {
        name: "Kickflip",
        medium: true,
        flatground: true,
        active: true
      },
      {
        name: "Heelflip",
        medium: true,
        flatground: true,
        active: true
      }
      ],
      randomTrick: [],
      displayPlayerInput: false,
      displayTrickSettings: false,
      easy: true,
      medium: true,
      hard: true,

    }

    this.rollTheDice = this.rollTheDice.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.displayInput = this.displayInput.bind(this);
    this.displayTrickSettings = this.displayTrickSettings.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.renderChecked = this.renderChecked.bind(this);
  }

  rollTheDice() {
    let filteredTricks = [];
    this.state.tricks.map(trick => {
      if (trick.active === true) {
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
      name: playerName
    };
    let currentPlayers = this.state.players;
    return this.setState({ players: currentPlayers.concat(newPlayer) })
  }

  handleCheck(e) {
    const checkboxName = e.target.name;
    this.state.tricks.map(trick => {
      if (trick[checkboxName])
        trick.active = !trick.active;
        return this.setState({[checkboxName]:!this.state[checkboxName]})
    }) 
  }

  renderChecked(e) {
    const checkboxName = e.target.name;
    this.state.tricks.map(trick => {
      if (trick.active && trick[checkboxName])
        return true;
    }) 
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
                                                            easy={this.state.easy}
                                                            medium={this.state.medium}
                                                            hard={this.state.hard}/> : null}
          {/* Displays Input For New Player Name */}
          <button onClick={this.displayInput}>Add Player</button>
          {this.state.displayPlayerInput ? <InputNewPlayer  handleChange={this.displayInput} handleClick={this.createPlayer} /> : null}
          {/* Returns to Home Component View*/}
          <button onClick={this.props.handleClick}>New Game</button>
        </div>
        <div>
          {/* Displays Added Players */}
          {
            this.state.players.map(player => {
              return <Player player={player} />
            })
          }
        </div>
      </main>
    );
  }
}

export default Play;