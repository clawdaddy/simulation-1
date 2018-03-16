import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:[
        {name:'Ball',
        price:12,
        url:'https://goo.gl/images/mvT5gX'},
        {name:"hammer",
        price:5,
        url:'https://goo.gl/images/3AKbNN'},
        {name:'infinity gauntlet',
        price:17,
        url:'https://goo.gl/images/aATdwv'}
      ]
    }
  };

  componentDidMount(){
    axios.get(`http://localhost:3005/api/inventory`).then( 
      (res) => {
        console.log(res);
        this.setState({
          list:res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard list = {this.state.list}/>
        <Form/>
      </div>
    );
  }
}

export default App;
