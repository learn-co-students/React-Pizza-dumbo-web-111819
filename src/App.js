import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state ={
    pizzas:[],
    selectedPizza: {}
  }

  selectPizza = (id) => {
    // console.log(id)

    let thePizzaChosen = {...this.state.pizzas.find(pizza => pizza.id === id)}
    this.setState({
      selectedPizza: thePizzaChosen
    })
  }

  pizzaUpdater = () => {

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
    // let selectedPizza = () => this.state.pizzas.find(pizza => pizza.id === this.state.selectedPizzaId)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} />
        <PizzaList giftfromPop={this.selectPizza} pizzaArr={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
