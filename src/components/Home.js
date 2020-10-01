import React from "react";
import '../styles/css/Home.css';

export class Home extends React.Component {



  render(){
    return (
      <header className="home">
        <h1>Skate Dice</h1>
        <p>over 200 combinations of tricks</p>
        <div className="rules-container">
          <p>The Rules</p>
          <ul>
            <li>set a score</li>
            <li>you land a trick you get a point</li>
            <li>first to said score wins</li>
            <li>dont be a dick</li>
            <li>you MUST try the trick you get</li>
            <li>have fun</li>
          </ul>
        </div>
        <button onClick={this.props.handleClick}> Play Game </button>
      </header>
    );
  }
}

export default Home;