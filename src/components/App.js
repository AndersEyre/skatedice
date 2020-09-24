import React from "react";
import {Home} from "./Home" 
import {Play} from "./Play"
import "../styles/css/App.css";


class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      isPlaying: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({isPlaying: !this.state.isPlaying})
  }


  render() {
    return (
      <div className="App">
        {this.state.isPlaying ? <Play handleClick={this.handleClick}/> : <Home handleClick={this.handleClick}/>}
      </div>
      );
    }
}

export default App;
