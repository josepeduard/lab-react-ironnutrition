import React, { Component } from 'react'

class FormFood extends Component {
    state = {
        name: "",
        calories: "",
        image: "",        
    }
    handleInput = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
      } 

    handleSubmit = (event) => {
        event.preventDefault();
        const { addNewReceipt } = this.props;
        addNewReceipt(this.state.name, this.state.calories, this.state.image)
    }
    render(){
        
        return (
            
            <form onSubmit={this.handleSubmit}>

            <input
            type= "text"
            name= "name"
            placeholder = "name"
            value={this.state.name}
            onChange={this.handleInput}/>

            <input
            type= "Number"
            name= "calories"          
            placeholder = "calories"
            value={this.state.calories}
            onChange={this.handleInput}/>

            <input
            type = "text"
            name = "image"
            placeholder = "put your url"
            value={this.state.image}
            onChange={this.handleInput}/>
            

              
            <input type="submit" value="add new receipt"/> 
          </form>
        
        )
    }


    

}

export default FormFood
