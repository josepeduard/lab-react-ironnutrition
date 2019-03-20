import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import FormFood from './components/FormFood';

class App extends Component {
  state = {
    foodList: foods
  }
  addNewReceipt = ( name,  calories, image,) => {
    const newReceipt = {
      name,
      calories,
      image,
    }

    this.setState({
      foodList: [...this.state.foodList, newReceipt],
    })
  }
  render() {
    return (
      <div className = "box">
        <FormFood addNewReceipt={this.addNewReceipt}/>
        {this.state.foodList.map((item) => {
          return <FoodBox 
            name={item.name}
            image={item.image}
            calories={item.calories + " cal"} 
            />})
        }
        
      </div>      
    ); }
}

export default App;
