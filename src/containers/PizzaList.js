import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  
  pizzaMapper = () => this.props.pizzaArr.map(pizza => <Pizza giftfromGrandPop={this.props.giftfromPop}
     key={pizza.id} pizza={pizza}/>)

  render() {
    // console.log(this.props.pizzaArr)
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
          {this.pizzaMapper()}
          
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
