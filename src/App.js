import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaToBeEdited: {},
    topping: '',
    vegetarian: true,
    size: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(json => this.setState({pizzas: json}))
  }

  onClickEditPizza = (id) => {
    let selectedPizza = this.state.pizzas.find(pizza => pizza.id === id)

    this.setState({
      pizzaToBeEdited: selectedPizza,
      topping: selectedPizza.topping,
      vegetarian: selectedPizza.vegetarian,
      size: selectedPizza.size
    })
  }

  onFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeVegetarian = (e) => {
    if(e.target.name === 'vegetarian'){
      this.setState({vegetarian: true})
    }else if(e.target.name=== 'non-vegetarian'){
      this.setState({vegetarian:false})
    }
  }

  onFormSubmit = (e) => {
    // console.log(this.state.pizzaToBeEdited)
    if(this.state.pizzaToBeEdited.id){
      let {id} = this.state.pizzaToBeEdited
      let {topping, vegetarian, size} = this.state

      const configObj = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({topping, vegetarian, size})
      }
      fetch(`http://localhost:3000/pizzas/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
          let updatedPizzas = this.state.pizzas.map(pizza => {
            if(pizza.id === id){
              return json
            }else{
              return pizza
            }
          })
          this.setState({pizzas: updatedPizzas})
        })
    }
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          topping={this.state.topping} 
          vegetarian={this.state.vegetarian} 
          size={this.state.size} 
          onFormChange = {this.onFormChange}
          onChangeVegetarian ={this.onChangeVegetarian}
          onFormSubmit = {this.onFormSubmit}
        />
        <PizzaList pizzas = {this.state.pizzas} onClickEditPizza={this.onClickEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
