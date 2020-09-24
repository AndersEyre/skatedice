import React from "react";
import "../styles/css/inputNewPlayer.css"

export class InputNewPlayer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: ''
        }


        this.createAndClose = this.createAndClose.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    createAndClose() {
        this.props.handleclick(this.state.userInput);
        this.props.handlechange();
    }

    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input id="playerInput" type="text" placeholder="Player name.." onChange={this.handleUserInput}></input>
                <button onClick={this.createAndClose}>ok</button>
                <button>cancel</button>
            </div>
        )
    }
}

export default InputNewPlayer;