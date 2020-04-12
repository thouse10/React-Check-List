import React, {Component} from "react"

class Clock extends Component {
	constructor() {
    super()

    this.displayData = []

    this.state = {
      date: new Date(),
      showdata: this.displayData,
      capTime: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.displayData.push(
    	<ul id="time_list" key={this.state.date.toLocaleTimeString()}>
    		{this.state.date.toLocaleTimeString()}
    	</ul>)
    

    this.setState({
    	showdata: this.displayData,
    	capTime: ""
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return(
    	<div>
	      <div>
	        <h2>{this.props.currentTime}</h2>
	        <h1>{this.state.date.toLocaleTimeString()}</h1>
	        <button onClick={this.handleClick} className="primary_btn">Track Time</button>
	      </div>

	      <div>
	      	<ul>
	      	{this.displayData}
	      	</ul>
	      </div>
	    </div>

    )
  }
}


export default Clock