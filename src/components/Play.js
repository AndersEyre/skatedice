import React from "react";
import "../styles/css/Play.css"

export class Play extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: 0,
      tricks: ["ollie", "nollie", "FS 180", "BS 180", "FS pop shuv", "BS pop shuv", "kickflip", "heelflip"],
      randomTrick: [], 
    }

    this.rollTheDice = this.rollTheDice.bind(this)
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
        <div className='controls-container'>
          <button>Filter Tricks</button>
          <button>Add Player</button>
          <button onClick={this.props.handleClick}>New Game</button>
        </div>
      </main>
    );
  }
}

export default Play;