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
                <label htmlFor="winning-score">Winning Score</label>
                <select onChange={this.props.handleChange} value={this.props.winningscore}>
                    {optionItems}
                </select>
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
                <label htmlFor="rail">Rail</label>
                <input name="rail" type="checkbox" onChange={this.props.handleCheck} checked={this.props.rail}></input>
                <br></br>
                <label htmlFor="normal">Normal</label>
                <input name="normal" type="checkbox" onChange={this.props.handleCheck} checked={this.props.normal}></input>
                <label htmlFor="nollie">Nollie</label>
                <input name="nollie" type="checkbox" onChange={this.props.handleCheck} checked={this.props.nollie}></input>
                <button onClick={this.props.handleClick}>Close</button>
            </div>
        )
    }
}

export default TrickSettings;