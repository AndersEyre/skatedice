import React from "react";
import "../styles/css/Player.css"

export class Player extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            score: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
          score: this.state.score + 1
        });
        if(this.state.score === this.props.winningScore - 1)
        this.props.displayWin()
      };
      
      decrement() {
        if(this.state.score > 0)
        this.setState({
          score: this.state.score - 1
        });
      };

    render() {
        return (
            <div className="player" style={{ display: 'inline-block', margin: '10px' }}>
                <h2>{this.props.player.name}</h2>
                <h3>{this.state.score}</h3>
                <button onClick={this.decrement}> - </button>
                <button onClick={this.increment}> + </button>
            </div>
        )
    }
}


export default Player;