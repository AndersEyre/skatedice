import React from "react";
import "../styles/css/TrickSettings.css"

export class TrickSettings extends React.Component {


    render() {

        return (
            <div className="trick-settings">
                <label htmlFor="easy">Easy</label>
                <input name="easy" type="checkbox" onChange={this.props.handleCheck} checked={this.props.easy}></input>
                <label htmlFor="medium">Medium</label>
                <input name="medium" type="checkbox" onChange={this.props.handleCheck} checked={this.props.medium}></input>
                <label htmlFor="hard">Hard</label>
                <input name="hard" type="checkbox" onChange={this.props.handleCheck} checked={this.props.hard}></input>
                <br></br>
                <label htmlFor="flatground">Flatground</label>
                <input name="flatground" type="checkbox" onChange={this.props.handleCheck} checked={this.props.flatground}></input>
                <label htmlFor="ledge">Ledge</label>
                <input name="ledge" type="checkbox" onChange={this.props.handleCheck} checked={this.props.ledge}></input>
                <button onClick={this.props.handleClick}>Close</button>
            </div>
        )
    }
}

export default TrickSettings;