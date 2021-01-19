// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {mood: 'happy'};
  }
 
  handleClick = () => {
    // Probably do some work to update the state
  }
 
  render() {
    <div>{this.state.mood
  }
}