import React from 'react'
import DisplayList from './DisplayList'

const ItemsList = (props) => {
  return (
    <div className='container mt-5'>
        {
        props.itemsList.length ? props.itemsList.map((itemsList,i)=>{
            return (<DisplayList itemsList={itemsList} key={i}  index={i} totalAmount={props.totalAmount} incQuantity={props.incQuantity} decQuantity={props.decQuantity} deleteItem={props.deleteItem}/>)
        }) : <div>Nothing to display</div>
       }      
    </div>
  )
}

export default ItemsList
