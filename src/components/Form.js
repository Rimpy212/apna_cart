import React,{useState} from 'react'
import ItemsList from './ItemsList';
import Footer from './Footer';

const Form = () => {
const [item,setItem]=useState('');
const [price,setPrice]=useState('');
const [totalAmount,setTotalAmount]=useState(0);
const products = [
    {
      prices: 9,
      name: "IPhone 10S Max",
      quantity: 0,
      amount: 0
    },
    {
      prices: 10,
      name: "Redmi Note 10S Max",
      quantity: 0,
      amount:0
    },
  ];
const [itemsList,setItemList]=useState(products);

const handleSubmit=(e)=>{
    e.preventDefault();
    let newItemList=[...itemsList];
    newItemList.push({
        name:item,
        prices:price,
        quantity:0,
        amount:0
    })

    setItemList(newItemList);
    setItem('');
    setPrice('');
}

const incQuantity=(key)=>{
    let newItemList=[...itemsList];
    newItemList[key].quantity++;
    newItemList[key].amount=newItemList[key].quantity*newItemList[key].prices;
    let newTotalAmount=totalAmount;
    setItemList(newItemList);
    newTotalAmount +=Number(newItemList[key].prices);
    setTotalAmount(newTotalAmount);
    console.log(totalAmount);
}
const decQuantity=(key)=>{
    let newItemList=[...itemsList];
    newItemList[key].quantity--;
    newItemList[key].amount=newItemList[key].quantity*newItemList[key].prices;
    let newTotalAmount=totalAmount;
    newTotalAmount -=newItemList[key].prices;
    setItemList(newItemList);
    setTotalAmount(newTotalAmount);
}

const deleteItem=(key)=>{
    //splice method
    let newItemList=[...itemsList];
    newItemList.splice(key,1);
    setItemList(newItemList)

    //setItemList((prevvalues)=>prevvalues.filter((_,index)=>index!=key));
}


  return (
    <>
       <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><b>For adding items</b></label>
            <input type="text" className="form-control mb-4"  id="todovalue" placeholder='Name of item' value={item} onChange={(e)=>setItem(e.target.value)}/>
            <input type="number" className="form-control"  id="todovalue" placeholder='price of item' value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
      <ItemsList itemsList={itemsList} totalAmount={totalAmount} incQuantity={incQuantity} decQuantity={decQuantity} deleteItem={deleteItem}/>
      <Footer totalAmount={totalAmount}/>
    </>
  )
}

export default Form
