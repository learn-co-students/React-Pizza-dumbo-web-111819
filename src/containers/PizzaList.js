import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  render() {
    // console.log(this.props)
    let eachPizza = this.props.pizzasData.map((pizzaObj) => {
      return <Pizza key={pizzaObj.id} pizzaData={pizzaObj} sendEditInfoUp={this.props.sendEditInfoUp}/>
    })
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {eachPizza}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
