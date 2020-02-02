import React from "react"

const Pizza = (props) => {

  // console.log(props.pizzaData)
  
  let {topping, size, vegetarian} = props.pizzaData

  const vegetarianOrNah = () => {
    return (vegetarian)?  "Yes" : "No"
  }

  const handleClick = () => {
    props.sendEditInfoUp(props.pizzaData)
  }


  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarianOrNah()}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
