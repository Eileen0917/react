import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Item extends Component{
  static propTypes = {
    lang: PropTypes.string.isRequired,
  }
  static defaultProps = {
    lang: 'lalala',
    age: 100

  }
  render() {
    return <li onClick = {() => this.props.c(this.props.lang)}>
              {this.props.lang}
           </li>
  }
}

class App extends Component {
  constructor(props){
    super(props);

    let langs = ["Ruby", "JavaScript", "Elixir"]
    let scores = {"Ruby": 0, "JavaScript": 0, "Elixir": 0};

    this.state = {
      langs: langs,
      scores: scores,
    }

  }

  handleClick(lang) {
    
    let newScore = Object.assign(this.state.scores, {
      [lang]: this.state.scores[lang] +1
    })
    this.setState({scores: newScore})
    console.log(`${lang} has been clicked ${this.state.scores} times.`)
  }
  
  getList() {
    return this.state.langs.map(i => {
      return <Item lang={i} 
                   c={this.handleClick.bind(this)}/>
    });
  }

  showScore(){
    console.log(this.state.scores)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick = {this.handleClick}> Welcome to React</h2>

        </div>
        <div>
          <ul>
            {this.getList()}
          </ul>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.showScore()}
      </div>
    );
  }
}

export default App;
