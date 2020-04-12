import React,{Component} from 'react';
import Clock from "./Components/Clock"

class App extends Component {

  render() {
    return(
      <div className="timerBox">
        <Clock currentTime={"Current Time:"}/>
      </div>
    )
  }
}

export default App