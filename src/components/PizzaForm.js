import React from "react"

const PizzaForm = ({pizza:{topping,size,vegetarian}}) => {

    let handleSubmit = (evt)=> {
      console.log(evt)
    }
    let myTopping = topping, mySize = size, isVegetarian = vegetarian; 
    let updater = (evt) => {

      myTopping = evt.target.value
    }
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" onChange={updater}
            placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                myTopping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

// PizzaForm.defaultProps = {
//   topping:"Pizza Topping",
//   size:"small",
//   vegetarian: false
// }


export default PizzaForm
