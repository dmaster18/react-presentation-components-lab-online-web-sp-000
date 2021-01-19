// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {mood: 'happy'};
  }
  
  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState(
        return {mood: 'sad'};
        )
    } else {
      this.setState(
        return {mood: 'happy'};
      )
    }
  }
 
  render() {
    return (
      <div onClick={this.handleClick}> {this.state.mood} </div>
      )
  }
}