import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './app.css';
import ErrorBoundry from '../components/ErrorBoundry';

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
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //console.log(filteredRobots);
    if(!robots.length) {
      return(
        <h1 className = 'f1 tc'>Loading ...</h1>
      );
    } else{
        return (
          <div className='tc'>
            <h1 className = 'f1 dim'>Robo World</h1>
            <Searchbox searchChange = {this.onSearchChange}/>
            <Scroll>
              <ErrorBoundry>
                <CardList robots = {filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
        );
    }
  }
  
}

export default App;
