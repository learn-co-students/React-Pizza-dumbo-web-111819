import React from "react"

const Pizza = (props) => {

  const onClick = (e) => {
    props.onClickEditPizza(props.pizza.id)
  }
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian? 'Yes':'No'}</td>
      <td><button type="button" onClick = {onClick} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
