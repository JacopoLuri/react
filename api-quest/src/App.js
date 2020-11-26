import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

const apiUrl = 'https://simpsons-quotes-api.herokuapp.com/quotes';

class App extends Component {

  state = {
    name: '',
    picture: '',
    text: '',
  }

anotherSimpson = () => (
  axios.get(apiUrl)
    .then(res => res.data)
    .then(data =>
      this.setState({
        name: data[0].character,
        picture: data[0].image,
        text: data[0].quote
      }))
)

  componentDidMount() {
    this.anotherSimpson()
  }

  render() {
    return (
      <>
        <button onClick={this.anotherSimpson}>New character!</button>
        <Card name={this.state.name} picture={this.state.picture} text={this.state.text} />
      </>
    )
  }
}

export default App;