import React from "react"

const PizzaForm = (props) => {
  console.log(props);
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" type="text" className="form-control" placeholder="Pizza Topping"
              value={
                //Pizza Topping Should Go Here
                // topping
                props.topping
              }
              onChange={props.handleChange}
              />
        </div>
        <div className="col">
          <select onChange={props.handleChange} name="size" value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.handleVeg} name="vegetarian" className="form-check-input" type="radio" value={true} checked={props.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.handleVeg} name="nonvegetarian" className="form-check-input" type="radio" value={false} checked={!props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
