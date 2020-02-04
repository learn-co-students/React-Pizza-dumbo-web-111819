import React from "react"

const Pizza = (props) => {
  // console.log(props);
  let handleEdit=(evt)=>{
    // console.log(props.pizza);
    props.editPizza(props.pizza)
  }
  // console.log(props.pizza);
  let {topping, size, vegetarian} = props.pizza
  // console.log(vegetarian);
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button data-set={props.pizza.id} onClick={handleEdit} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

//here when the edit button is clicked
//send the pizza object to the form
//when the form get its, we can edit it from there
// send a call back function from App --> pizzaList-> pizza
//info of pizza --> form through the same cb function
