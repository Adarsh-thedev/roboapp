import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './app.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      robots : robots,
      searchfield : ''
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    //console.log(filteredRobots);
    return (
      <div className='tc'>
        <h1 className = 'f1 dim'>Robo World</h1>
        <Searchbox searchChange = {this.onSearchChange}/>
        <CardList robots = {filteredRobots} />
      </div>
    );
  }
  
}

export default App;
