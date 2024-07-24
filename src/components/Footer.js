import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <footer className="bg-dark text-light p-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <div className="col-md-4 mt-2">
          Total Amount: {props.totalAmount}
        </div>
        <div className="col-md-4 text-end">
          <button className="btn btn-success">Payment</button>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
