import React from "react";
import "../styles/css/inputNewPlayer.css"

export class InputNewPlayer extends React.Component {
    constructor(props){
        super(props)


        this.createAndClose = this.createAndClose.bind(this);
    }

    createAndClose() {
        this.props.handleclick();
        this.props.handlechange();
    }

    render() {
        return (
            <div>
                <input id="playerInput" type="text" placeholder="Player name.."></input>
                <button onClick={this.createAndClose}>ok</button>
                <button>cancel</button>
            </div>
        )
    }
}

export default InputNewPlayer;