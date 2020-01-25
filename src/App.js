import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './app.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      robots : [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}))
  }

  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    //console.log(filteredRobots);
    if(this.state.robots.length === 0 ) {
      return(
        <h1 className = 'f1 tc'>Loading ...</h1>
      );
    } else{
        return (
          <div className='tc'>
            <h1 className = 'f1 dim'>Robo World</h1>
            <Searchbox searchChange = {this.onSearchChange}/>
            <CardList robots = {filteredRobots} />
          </div>
        );
    }
  }
  
}

export default App;
