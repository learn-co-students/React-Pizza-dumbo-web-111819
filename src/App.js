import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas:[],
    currentPizza: {},
    topping: "",
    size:"",
    vegetarian: false
  }
  componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
    .then(r => r.json())
    .then((pizzas) => {
      this.setState({
        pizzas
      })
    })
  }

  editPizza=(pizzaObj)=> {
    let {topping, size, vegetarian} = pizzaObj;
    this.setState({
      currentPizza: pizzaObj,
      topping,
      size,
      vegetarian
    })
  }

  handleChange=(evt)=>{
    // debugger
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleVeg=(evt)=>{
    let bool = evt.target.name === "vegetarian" ? true : false
    this.setState({
      vegetarian: bool
    })
  }

  handleSubmit=(evt)=>{
    let updatedArr = this.state.pizzas.map(pizza => {
      if (this.state.currentPizza.id === pizza.id){
        return {...this.state.currentPizza,
           topping: this.state.topping,
           size: this.state.size,
          vegetarian: this.state.vegetarian}
      } else {
        return pizza
      }
    })
      this.setState({
        pizzas: updatedArr
      })
  }


  render() {
    // console.log(this.state.pizzas);
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          handleChange={this.handleChange}
           topping={this.state.topping}
           size={this.state.size}
           vegetarian={this.state.vegetarian}
           handleVeg={this.handleVeg}
           handleSubmit={this.handleSubmit}
           />
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
