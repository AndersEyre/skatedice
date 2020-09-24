import React from "react";
import "../styles/css/inputNewPlayer.css"

export class inputNewPlayer extends React.Component {

    createAndClose() {
        this.props.handleClick;
        this.props.handleChange;
    }

    render() {
        return (
            <div>
                <input id="playerInput" type="text" placeholder="Player name.."></input>
                <button onClick={createAndClose}>ok</button>
                <button>cancel</button>
            </div>
        )
    }
}

export default inputNewPlayer;