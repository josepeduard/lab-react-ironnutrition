import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state = {
    foodList: foods
  }
  
  render() {
    return (
      <div className = "box">
        {this.state.foodList.map((item) => {
          return <FoodBox 
            name={item.name}
            image={item.image}
            calories={item.calories}
            />})}
      </div>      
    );
  }
}

export default App;
