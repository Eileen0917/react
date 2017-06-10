import React, { Component } from 'react';
import v4 from 'uuid/v4';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  // static propTypes = {
  //   lang: PropTypes.string.isRequired,
  // }
  static defaultProps = {
    age: 100,
  }
  render(){
    return (
      <li key={this.props.lang.id}
          onClick={() => {
            this.props.clickCallback(this.props.lang.name);
          }}>
        {this.props.lang.name}
      </li>
    )
  }
}

var store = [
  {id: v4(), name: 'Ruby', score: 0},
  {id: v4(), name: 'Elixir', score: 0},
  {id: v4(), name: 'JavaScript', score: 0},
  {id: v4(), name: 'LISP', score: 0},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {score: store};
  }
  handleClick(lang) {
    // functional way
    // var newState = Object.assign({}, this.state, {[lang]: this.state[lang] + 1})

    var index = this.state.score.findIndex(item => {
      return item.name == lang
    })
    var newScore = this.state.score
    newScore[index].score += 1
    this.setState({score: newScore})
  }
  showScores() {
    return this.state.score.map(item => {
      return <span key={item.id}>{item.name}: {item.score}<br /></span>
    })
    // return Object.keys(this.state).map(k => {
    //   return <span>{k}: {this.state[k]}  </span>
    // })
  }
  showList() {
    return this.state.score.map(item => {
      return <Item lang={item}
                   clickCallback={this.handleClick.bind(this)} />
    })
    // return Object.keys(this.state).map(k =>{
    //   return <Item lang={k}
    //                clickCallback={this.handleClick.bind(this)} />
    // });
  }

  render() {
    return (
      <div className="App">
        <div>
          <ul>
            {this.showList()}
          </ul>
        </div>
        {this.showScores()}
      </div>
    );
  }
}

export default App;
