import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    editPizza: {},
    topping: "",
    size: "",
    vegetarian: null
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r=>r.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  handleClick = (pizza) => {
    this.setState({
      editPizza: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  handleChange = (event) => {
    if(event.target.value === "Vegetarian"){
      this.setState({
        [event.target.name]: true
      })
    } else if (event.target.value === "Not Vegetarian") {
      this.setState({
        [event.target.name]: false
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  changePie = (pieId) => {
    let newZa = {id: pieId, topping: this.state.topping, size: this.state.size, vegetarian: this.state.vegetarian}
    let newZas = this.state.pizzas.filter(pizza=> pizza.id !== pieId)
    let newZas2 = [...newZas, newZa]
    this.setState({
      pizzas: newZas2
    })
  }



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleChange={this.handleChange} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} pizza={this.state.editPizza} changePie={this.changePie}/>
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
