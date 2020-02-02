import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state ={
    pizzas:[],
    selectedPizza: {
      topping:"Pizza Topping",
      size:"small",
      vegetarian: false
    }
  }

  selectPizza = (id) => {
    // console.log(id)

    let thePizzaChosen = {...this.state.pizzas.find(pizza => pizza.id === id)}
    this.setState({
      selectedPizza: thePizzaChosen
    })
  }

  pizzaUpdater = (topping) => {
    this.setState({
      selectedPizza:{
        topping:topping
      }
    })
  }
  sizeUpdater = (size) => {
    this.setState({
      selectedPizza:{
        size:size
      }
    })
  }
  submitHandler = () => {
    this.setState({
      selectedPizza:this.state.selectedPizza
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(pizzaArr => {
      this.setState({
        pizzas:pizzaArr
      })
    })
    
  }
  
    
  render() {
    
    return (
      <Fragment>
        <Header/>
        {PizzaForm(this.state.selectedPizza,this.pizzaUpdater,this.sizeUpdater,this.submitHandler)}
        <PizzaList giftfromPop={this.selectPizza} pizzaArr={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
