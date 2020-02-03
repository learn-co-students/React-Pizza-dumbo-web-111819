import React from "react"

const Pizza = ({pizza:{topping,size,vegetarian}, giftfromGrandPop,pizza}) => {

  let handleClick = () => {
    giftfromGrandPop(pizza.id)
  }

  // const {topping, size, vegetarian} = pizza
  // console.log(pizza, topping)
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
