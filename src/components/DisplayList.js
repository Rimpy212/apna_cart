import React from 'react'
import './index.css'
const DisplayList = (props) => {
    return (
        <div className='containerr mt-3 values'>
            <div ><b>Name:</b> {props.itemsList.name}</div>
            <div ><b>Price:</b> Rs. {props.itemsList.prices}</div>
            <div class="btn-group" role="group" aria-label="Basic example">
                {props.itemsList.quantity ? <button type="button" class="btn btn-primary" onClick={(e)=>{props.decQuantity(props.index)}}>-</button>: "" }
                <button type="button" class="btn btn-primary">{props.itemsList.quantity}</button>
                <button type="button" class="btn btn-primary" onClick={(e)=>{props.incQuantity(props.index)}}>+</button>
            </div>
            <button type="button" class="btn btn-dark">Amount: {props.itemsList.amount}</button>
            <button type="button" class="btn btn-dark" onClick={(e)=>{props.deleteItem(props.index)}}>X</button>
        </div>
    )
}

export default DisplayList 
