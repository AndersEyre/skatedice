import React from "react";
import "../styles/css/TrickSettings.css"

export class TrickSettings extends React.Component {






    render(){
        return (
            <div className="trick-settings">
                <label htmlFor="easy">Easy</label>
                <input name="easy" type="checkbox" checked={this.props.tricks.easy}></input>
                <label htmlFor="medium">Medium</label>
                <input name="easy" type="checkbox" checked={this.props.tricks.medium}></input>
                <label htmlFor="hard">Hard</label>
                <input name="easy" type="checkbox" checked={this.props.tricks.hard}></input>
            </div>
        )
    }
}

export default TrickSettings;