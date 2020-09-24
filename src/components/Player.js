import React from "react";

export const Player = (props) => {

        return (
            <div>
                <h2>{props.player.name}</h2>
                <h3>0</h3>
                <button> - </button>
                <button> + </button>
            </div>
        )
}


export default Player;