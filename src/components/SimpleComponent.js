// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {mood: 'happy'};
  }
  
  handleClick = () => {
    
  }
 
  render() {
    <div onClick={this.handleClick}> {this.state.mood} </div>
  }
}