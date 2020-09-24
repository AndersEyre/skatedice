import React from "react";
import {Player} from "./Player";
import "../styles/css/Play.css";
import inputNewPlayer from "./inputNewPlayer";

export class Play extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [],
      tricks: ["ollie", "nollie", "FS 180", "BS 180", "FS pop shuv", "BS pop shuv", "kickflip", "heelflip"],
      randomTrick: [], 
      inputtingNewPlayer: false,
    }

    this.rollTheDice = this.rollTheDice.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.inputPlayerName = this.inputPlayerName.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
  }


  createPlayer(name){
    const playerName = toString(name);
    let newPlayer = {
      name: playerName
    }
    let playersList = this.state.players.push(newPlayer)
    return this.setState({players: playersList})
  }

  inputPlayerName(){
    this.state.inputtingNewPlayer ? <inputNewPlayer handleChange={this.changeInputState} handleClick={this.createPlayer}/> : null;
  }

  changeInputState(){
    this.setState({inputtingNewPlayer: !this.state.inputtingNewPlayer})
  }
  
  rollTheDice() {
    let randomTrick = this.state.tricks[Math.floor(Math.random()*this.state.tricks.length)];
    return this.setState({randomTrick: randomTrick});
  }

  render(){
    
     return(
      <main className="play">
        <h1 style={{textDecoration:"underline"}}>{this.state.randomTrick}</h1>
        <br></br>
        <button onClick={this.rollTheDice}>ROLL THE DICE</button>
        <div className="controls-container">
          <button>Filter Tricks</button>
          <button onClick={this.changeInputState}>Add Player</button>
          <button onClick={this.props.handleClick}>New Game</button>
        </div>
        <div>
        {
        this.state.players.map((player,i) => {
          return <Player key={'player_' + i} player={player}/>
        })
        }
        </div>
      </main>
    );
  }
}

export default Play;