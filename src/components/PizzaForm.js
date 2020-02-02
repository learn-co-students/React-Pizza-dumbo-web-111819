import React from "react"

const PizzaForm = (props) => {


  const onChange = (e) => {
    props.onFormChange(e)
  }

  const onChangeRadio = (e) =>{
    props.onChangeVegetarian(e)
  }

  const onClickFormSubmit = (e) => {
    props.onFormSubmit(e)
  }
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' onChange={onChange} placeholder="Pizza Topping" value={
                props.topping
              }/>
        </div>
        <div className="col">
          <select value={props.size} onChange={onChange} name='size' className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name = 'vegetarian' onChange={onChangeRadio} value="Vegetarian" checked={props.vegetarian? true:false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name = 'non-vegetarian' onChange={onChangeRadio} value="Not Vegetarian" checked={props.vegetarian ? false:true }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={onClickFormSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
