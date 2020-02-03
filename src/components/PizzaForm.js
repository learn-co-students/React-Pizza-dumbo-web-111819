import React from "react"

const PizzaForm = (pizza,toppingUpdate,sizeUpdate,submiter,vegetarianChecker) => {
  // console.log(pizza)
  // console.log(toppingUpdate)
  // console.log(this)
  let state = {
    ...pizza
  }
  // console.log(state)
  let handleSubmit = (evt)=> {
    console.log("submit")
    submiter()
  }
  let sizeUpdater = (evt) => {
    console.log(evt.target.value)
    sizeUpdate(evt.target.value)
   
  }
  
    let toppingUpdater = (evt) => {
      console.log(evt.target.value)
      toppingUpdate(evt.target.value)
     
    }
    let vegeatrianUpdater = (evt) => {
      vegetarianChecker(evt)
      
    }
  //  console.log(state.topping)
    let {topping,size,vegetarian} = state
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" onChange={toppingUpdater}
            placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={sizeUpdater}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" checked={vegetarian} value="Vegetarian"  onChange={vegeatrianUpdater}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
   
          <div className="form-check">
            <input className="form-check-input" type="radio" checked={!vegetarian} value="Not Vegetarian"  onChange={vegeatrianUpdater}/>
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

// checked={vegetarian}

      //  {/* checked={!vegetarian} */}

// PizzaForm.defaultProps = {
//   topping:"Pizza Topping",
//   size:"small",
//   vegetarian: false
// }


export default PizzaForm
