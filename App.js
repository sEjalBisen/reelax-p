import './App.css';

function App() {
  return (
    <div className="page">
      <div className="left">
        <h2>Review your details</h2>
        <p>Billing Information</p>
        <label>Country</label>
        <input placeholder="India" />
        <label>GST Number</label>
        <input placeholder="Enter GST" />
        <label>Address</label>
        <input placeholder="Enter address" />
        <label>State</label>
        <input placeholder="Enter state" />
        <label>Pincode</label>
        <input placeholder="Enter pincode" />
        <button className="blue-btn">Save & Update</button>
      </div>
      
      <div className="right">
        <h2>Order Summary</h2>
        <div className="item">
          <span>Reelax Pro</span>
          <span>₹4,999.00</span>
        </div>
        <div className="item">
          <span>Subtotal</span>
          <span>₹4,999.00</span>
        </div>
        <div className="item">
          <span>GST 18%</span>
          <span>₹899.82</span>
        </div>
        <div className="total">
          <span>Total due today</span>
          <span>₹6,378.84</span>
        </div>
        <button className="blue-btn">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default App;
   
