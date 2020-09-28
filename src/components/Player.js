import React from "react";

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
        if(this.state.score === this.props.winningscore)
        alert(this.props.player.name + ' wins!')
      };
      
      decrement() {
        if(this.state.score > 0)
        this.setState({
          score: this.state.score - 1
        });
      };

    render() {
        return (
            <div style={{ display: 'inline-block', margin: '10px' }}>
                <h2>{this.props.player.name}</h2>
                <h3>{this.state.score}</h3>
                <button onClick={this.decrement}> - </button>
                <button onClick={this.increment}> + </button>
            </div>
        )
    }
}


export default Player;