import React from "react";
import "../styles/css/TrickSettings.css"

export class TrickSettings extends React.Component {
    

    render() {
        let obj = {
            array: []
        };
        for (var l=0;l<100;l++){
            obj.array[l] = l+1;
        }
        console.log("obj: ", obj);
        let optionItems = obj.array.map((item) =>
        <option key={item}>{item}</option>
    );

        return (
            <div className="trick-settings">
                <h2>Difficulty</h2>
                <label htmlFor="easy">Easy</label>
                <input name="easy" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.easy}></input>
                <label htmlFor="medium">Medium</label>
                <input name="medium" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.medium}></input>
                <label htmlFor="hard">Hard</label>
                <input name="hard" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.hard}></input>
                <br></br>
                <h2>Features</h2>
                <label htmlFor="flatground">Flatground</label>
                <input name="flatground" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.flatground}></input>
                <label htmlFor="ledge">Ledge</label>
                <input name="ledge" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.ledge}></input>
                <label htmlFor="rail">Rail</label>
                <input name="rail" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.rail}></input>
                <br></br>
                <h2>Stance</h2>
                <label htmlFor="normal">Normal</label>
                <input name="normal" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.normal}></input>
                <label htmlFor="nollie">Nollie</label>
                <input name="nollie" type="checkbox" onChange={this.props.handleCheck} checked={this.props.parentState.nollie}></input>
                <br></br>
                <label htmlFor="winning-score">Winning Score</label>
                <select  onChange={this.props.handleChange} value={this.props.parentState.winningScore}>
                    {optionItems}
                </select>
                <button id="close-button" onClick={this.props.handleClick}>Close</button>
            </div>
        )
    }
}

export default TrickSettings;