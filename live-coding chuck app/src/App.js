import React, { Component } from 'react';

// for option 4 only
const endpoint = 'https://api.chucknorris.io/jokes/random';
const getSentences = url => fetch(url).then(res => res.json());


class App extends Component {

  state={
    showLandingPage: true,
    sentence1: '',
    sentence2: '',
    winner: ''
  }

  showFacts = () => {
    this.setState({
      showLandingPage: false
    })
  }

  //  option 1
  // componentDidMount() {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       sentence1: data.value
  //     }))
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       sentence2: data.value
  //     }))
  // }

  // option 2
  // componentDidMount() {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data1 =>
  //       fetch('https://api.chucknorris.io/jokes/random')
  //         .then(response => response.json())
  //         .then(data2 => this.setState({
  //           sentence1: data1.value,
  //           sentence2: data2.value
  //           }))
  //     )
  // }

  // // option 3
  // componentDidMount() {
  //   Promise.all(
  //     [
  //       fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()), 
  //       fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
  //     ])
  //       .then(data =>
  //         this.setState({
  //           sentence1: data[0].value,
  //           sentence2: data[1].value
  //         })
  //       )
  // }

  //option 4
  storeSentences = () => (
    Promise.all([getSentences(endpoint), getSentences(endpoint)])
      .then(data =>
        this.setState({
          sentence1: data[0].value,
          sentence2: data[1].value,
          winner: ''
        })
      )
  )

  componentDidMount() {
    this.storeSentences()
  }


  chooseSentence = sentence => {
    this.setState({
      winner: this.state[sentence]
    })
  }
  

  render() {
    return(
      <>
        {
          this.state.showLandingPage
            ? 
              <>
                <h1>Chuck facts</h1>
                <p>lorem lorem</p>
                <button onClick={this.showFacts}>Give me those facts</button>
              </>
            : 
              <>
                <p>{this.state.sentence1}<button onClick={() => this.chooseSentence('sentence1')}>Choose this one!</button></p>
                <p>{this.state.sentence2}<button onClick={() => this.chooseSentence('sentence2')}>Choose this one!</button></p>
                {
                  this.state.winner &&
                    <>
                      <h2>The best joke is: {this.state.winner}</h2>
                      <button onClick={this.storeSentences}>Give me more</button>
                    </>
                }
              </>
        }
      </>
    )
  }
}

export default App;