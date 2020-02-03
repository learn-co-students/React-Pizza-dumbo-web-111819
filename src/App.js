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
  vegetarianChecker = (evt) => {
    if(evt.target.value === "Vegetarian"){
      this.setState({
        selectedPizza:{
          ...this.state.selectedPizza,
          vegetarian:true
        }
      })
    } else if(evt.target.value === "Not Vegetarian"){
      this.setState({
        selectedPizza:{
          ...this.state.selectedPizza,
          vegetarian:false
        }
      })
    }
    console.log(this.state.selectedPizza)
  }

  pizzaUpdater = (topping) => {
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        topping:topping
      }
    })
  }
  sizeUpdater = (size) => {
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        size:size
      }
    })
  }
  submitHandler = () => {
    console.log("sup")
    let pizzaObj = this.state.selectedPizza
    let updatedPizzas = this.state.pizzas.map( pizza => {
      if (pizza.id === pizzaObj.id){
        return {...this.state.selectedPizza}
      }
      else{
        return pizza
      }
    })
    this.setState({
      pizzas: updatedPizzas
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

  callFunc = () => PizzaForm(this.state.selectedPizza,this.pizzaUpdater,this.sizeUpdater,this.submitHandler,this.vegetarianChecker,this.submiter)
  
    
  render() {
    
    return (
      <Fragment>
        <Header/>
        {this.callFunc()}
       
        <PizzaList giftfromPop={this.selectPizza} pizzaArr={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
