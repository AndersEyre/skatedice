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
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "nollie",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "FS 180",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "BS 180",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "FS Pop Shuv",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "Bs Pop Shuv",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "Kickflip",
        difficulty: "easy",
        arena: "flatground",
        active: true
      },
      {
        name: "Heelflip",
        difficulty: "easy",
        arena: "flatground",
        active: true
      }
      ],
      randomTrick: [],
      displayPlayerInput: false,
      displayTrickSettings: false,
    }

    this.rollTheDice = this.rollTheDice.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.displayInput = this.displayInput.bind(this);
    this.displayTrickSettings = this.displayTrickSettings.bind(this);

    this.myRef = React.createRef()
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

  render() {
    
    return (
      <main className="play">
        <h1 style={{ textDecoration: "underline" }}>{this.state.randomTrick}</h1>
        <br></br>
        <button onClick={this.rollTheDice}>ROLL THE DICE</button>
        <div className="controls-container">
          {/* Displays Trick Settings */}
          <button onClick={this.displayTrickSettings}>Filter Tricks</button>
          {this.state.displayTrickSettings ? <TrickSettings tricks={this.state.tricks} /> : null}
          {/* Displays Input For New Player Name */}
          <button onClick={this.displayInput}>Add Player</button>
          {this.state.displayPlayerInput ? <InputNewPlayer ref={this.myRef} handleChange={this.displayInput} handleClick={this.createPlayer} /> : null}
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