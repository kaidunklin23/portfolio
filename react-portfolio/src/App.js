//imports for class components
import React, { Component } from 'react';

import People from './people';
import AddPerson from './addPerson';

class App extends Component {
  state = {
    listOfPeople:[
      { name: 'KaiHhha', age: 76, favoriteFood: "Chicken Nuggets", id: 1},
      { name: 'Austen', age:28, favoriteFood: "dirt", id: 2},
      { name: 'DeeJay', age:3, favoriteFood: "West coast burrito eaters association", id:3}
    ]
  }

  addMyBra = (person) => {
    person.id = Math.random();

    let newListOfPeople = [...this.state.listOfPeople, person]
    this.setState({
      listOfPeople :  newListOfPeople
    })
  }
  
 render() {
   return(
    <div className="App">
    <h1>Kaija's the Best</h1>
    <p>Nuggets are Good</p>
    {/* importing the people component into JSX */}
    <People arrayOfPeople={this.state.listOfPeople} />
    <AddPerson addMyBra = {this.addMyBra} />

  </div>
   )
 }
}

export default App;
