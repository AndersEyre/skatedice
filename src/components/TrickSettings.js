import React from "react";
import "../styles/css/TrickSettings.css"

export class TrickSettings extends React.Component {


    render() {

        return (
            <div className="trick-settings">
                <label htmlFor="easy" >Easy</label>
                <input name="easy" type="checkbox" onChange={this.props.handleCheck} ></input>
                <label htmlFor="medium">Medium</label>
                <input name="medium" type="checkbox" onChange={this.props.handleCheck}></input>
                <label htmlFor="hard">Hard</label>
                <input name="hard" type="checkbox" onChange={this.props.handleCheck}></input>
                <button onClick={this.props.handleClick}>Close</button>
            </div>
        )
    }
}

export default TrickSettings;