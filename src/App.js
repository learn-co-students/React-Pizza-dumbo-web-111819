import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state={
    pizzasData: [],
    editPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzasData => (
      this.setState({
        pizzasData
      })
    ))
  }

  getFormInfo = (pizzaDataFromPizza) => {
    // console.log(pizzaDataFromPizza)
    this.setState({
      editPizza: pizzaDataFromPizza
    })
  }

  changeTop = (evt) => {
    let updatedTopping = evt.target.value
    let pizza = {...this.state.editPizza, topping:updatedTopping}
    this.setState({
      editPizza: pizza
    })
  }

  changeSize = (evt) => {
    let updatedSize = evt.target.value
    let pizza = {...this.state.editPizza, size:updatedSize}
    this.setState({
      editPizza: pizza
    })
  }

  changeVeg = (evt) => {
    let updatedVeg = evt.target.value === "Vegetarian"
    let pizza = {...this.state.editPizza, vegetarian:updatedVeg}
    this.setState({
      editPizza: pizza
    })
  }

  submitForm = (evt) => {
    evt.preventDefault()
    if (this.state.editPizza.id){
      fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, {
        method: 'PATCH', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.state.editPizza)
      })
      .then(resp => resp.json())
      .then(updatedPizza => {
        let newPizzaArr = this.state.pizzasData.map((pizzaObj) => {
          if(pizzaObj.id === updatedPizza.id){
            return updatedPizza
          } else {
            return pizzaObj
          }
        })
        this.setState({
          pizzasData: newPizzaArr
        })
      })
    }

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          editThisPizza={this.state.editPizza}
          changeTop={this.changeTop}
          changeSize={this.changeSize}
          changeVeg={this.changeVeg}
          submitForm={this.submitForm}
        />
        <PizzaList pizzasData={this.state.pizzasData} sendEditInfoUp={this.getFormInfo}/>
      </Fragment>
    );
  }
}

export default App;
