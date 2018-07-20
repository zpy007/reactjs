import React, { Component } from 'react';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      isShowClock:true
    }
  }

  handleShowOrHide(){
    this.setState({isShowClock:!this.state.isShowClock});
  }

  render() {
    return (
      <div>
        {this.state.isShowClock?<Clock />:null}
        <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</button>
      </div>
      

    );
  }
}

export default App
