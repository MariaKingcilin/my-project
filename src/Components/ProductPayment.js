import React, { useContext, useEffect, useState } from 'react'
import './ProductPayment.scss'
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { stateContext } from "./Context/StateContext";
import { useNavigate } from "react-router-dom";
import Cartproduct from "./Cartproduct";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function ProductPayment() {
  const {state,dispatch} = useContext(stateContext);

  const navigate = useNavigate();

  const handlePrice = () => {
    let order = 0;
    let offer = 0;

    state.allAddCart.map((prod) => {
      order += prod.price * prod.count;
      offer += (prod.price * 0.05) * prod.count;
    });
    dispatch({type : 'order', payload : order});
    dispatch({type : 'offer', payload : offer.toFixed(2)});
    dispatch({type : 'total', payload : order - 40 - offer});
    dispatch({type : 'save', payload : ((40 + offer).toFixed(2))});
  }

  useEffect(() => {
    handlePrice();
  },[state.allAddCart]);

  let handleSelect = (e) => {
    let btnColor = document.querySelectorAll('.btn');
    btnColor.forEach((a) => {
        if(a.classList.contains('active-btn')) {
            a.classList.remove('active-btn');
        }
        e.currentTarget.classList.add('active-btn');
    });
  }

  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(phone === '') {
      alert('Enter your UPI ID');
    } else {
      var options = {
        key : 'rzp_test_TyIEomqIbPigUn',
        key_secret : 'BiZwzZ7YJVfr3RC1JfTJJvEh',
        amount : state.totalAmount * 100,
        currency : 'INR',
        name : 'Mamaearth Products',
        description : 'for my project purpose',
        handler : function(response) {
          alert(response.razorpay_payment_id);
        },
        prefil : {
          name : 'maria kingcilin',
          email : 'mariakingcilin@gmail.com',
          contact : phone
        },
        notes : {
          address : 'Razorpay corporate office'
        },
        theme : {
          color : 'rgb(0, 175, 239)'
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <>
      <section id='payment-header-sec'>
          <div className='back-icon'>
              <ArrowBackIcon onClick={(e) => {
                e.preventDefault();
                navigate('/')
              }} />
          </div>
          <div className='logo'>
              <img src='https://asset.brandfetch.io/idfoTiWukP/idJduluxkG.png' alt='loading' />
          </div>
      </section>
      {state.allAddCart.length > 0 ?<section id='payment-content-sec'>
        <div className='container'>
          <div className='payment-all-datails-row'>
            <div className='payment-details-col'>
              <div className='payment-details-card'>
                <div className='login-row'>
                  <h5>Login to see your existing offers</h5>
                  <Button variant="outlined">Login</Button>
                </div>
                <div className='address-datails-row'>
                  <div className='address-head-col'>
                    <h5>Delivery Address</h5>
                  </div>
                  <div className='address-name-col'>
                    <TextField className='name one' size='small' id="outlined-basic" label="First Name*" variant="outlined" />
                    <TextField className='name' size='small' id="outlined-basic" label="Last Name*" variant="outlined" />
                  </div>
                  <div className='address-email-col'>
                    <TextField className='email' size='small' id="outlined-basic" label="Email ID*" variant="outlined" />
                    <TextField className='email' size='small' id="outlined-basic" label="Phone Number*" variant="outlined" />
                  </div>
                  <div className='address-pin-col'>
                    <TextField className='pin' size='small' id="outlined-basic" label="PIN Code*" variant="outlined" />
                    <TextField className='pin' size='small' id="outlined-basic" label="City*" variant="outlined" />
                    <TextField className='pins' size='small' id="outlined-basic" label="State*" variant="outlined" />
                  </div>
                  <div className='address-street-col'>
                    <TextField className='street' size='small' id="outlined-basic" label="Address (House No, Building, Street, Area)*" variant="outlined" />
                  </div>
                </div>
                <div className='type-details-row'>
                  <p>Select the type of the Address</p>
                  <div className='type-btn'>
                    <Stack direction="row" spacing={2}>
                      <Button className='btn active-btn' size='small' name='all' onClick={handleSelect} variant="outlined">Home</Button>
                      <Button className='btn' size='small' name='hair_oil' onClick={handleSelect} variant="outlined">Work</Button>
                      <Button className='btn' size='small' name='hair_mask' onClick={handleSelect} variant="outlined">Other</Button>
                    </Stack>
                  </div>
                </div>
                <div className='payment-method-sec'>
                  <h5>Choose payment method</h5>
                  <div className='payment-method-row'>
                    <div className='payment-type-col'>
                      <div className='payment-type-card'>
                        <button className='pay-btn pay-btn-color'>
                          <span className='round'><span className='full-round'></span></span>
                          <span>UPI</span>
                        </button> 
                        <button className='pay-btn'>
                          <span className='round'></span>
                          <span>Credit/Debit Card</span>
                        </button> 
                        <button className='pay-btn'>
                          <span className='round'></span>
                          <span>Net Banking</span>
                        </button> 
                        <button className='pay-btn'>
                          <span className='round'></span>
                          <span>Wallets</span>
                        </button> 
                        <button className='pay-btn'>
                          <span className='round'></span>
                          <span>Cash on Delivery</span>
                        </button> 
                      </div>
                    </div>
                    <div className='payment-process-col'>
                      <div className='payment-process-card'>
                        <h5>Pay Using UPI ID</h5>
                        <p>Enter UPI ID  (Google Pay, BHIM & more)</p>
                        <form onSubmit={handleSubmit}>
                          <input className='pay-input' style={{width : '100%'}} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your UPI ID' />
                          <Button style={{display : 'block', width : '100%'}} type='submit' className='order-btn' variant="contained">PLACE ORDER</Button>
                        </form>
                        <div className='payment-icon'>
                          <p>100% Payment Protection, Easy Return Policy</p>
                        </div>
                        <div className='payment-social'>
                          <img src='https://images.mamaearth.in/wysiwyg/rupay2x.png' alt='loading' />
                          <img src='https://images.mamaearth.in/wysiwyg/visa2x.png' alt='loading' />
                          <img src='https://images.mamaearth.in/wysiwyg/master_card2x.png' alt='loading' />
                          <img src='https://images.mamaearth.in/wysiwyg/american_express2x.png' alt='loading' />
                          <img src='https://images.mamaearth.in/wysiwyg/net_banking2x.png' alt='loading' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='payment-product-row'>
              <div className="addcart-details-sec">
                <div className="addcart-goodness-row">
                  <div className="goodness-content-col">
                    <h4>Make me a <span className="good">goodness</span> <span className="ness">insider</span></h4>
                    <p>Get 2 Free Gifts + Free Shipping on every order</p>
                  </div>
                  <div className="goodness-join-col">
                    <Button variant="contained"><a href="#">JOIN NOW</a></Button>
                  </div>
                </div>
                <div className="addcart-member-row">
                  <div className="member-img-col">
                    <img src="https://images.mamaearth.in/catalog/product/g/i/gi6.png" alt="loading" />
                  </div>
                  <div className="member-content-col">
                    <p>6 Months Membership</p>
                    <p><span className="amount">₹149.00</span><del>₹299</del><span className="offer">50% off</span></p>
                  </div>
                  <div className="member-filter-col">
                    <button className="member">
                      6 Months
                      <KeyboardArrowDownIcon className="icon" />
                    </button>
                  </div>
                </div>
                <div className="empty"></div>
                <div className="addcart-product-sec">
                  <h4>Order Summary</h4>
                  <div className="addcart-product-row">
                    {state.allAddCart.map((prod,index) => {
                      return (
                        <Cartproduct product={prod} key={index} />
                      )
                    })}
                  </div>
                </div>
                <div className="empty"></div>
                <div className="avalable-offer">
                    <div className="available-icon">
                      <h4>Available Offers</h4>
                    </div>
                    <ChevronRightOutlinedIcon className="icons" />
                </div>
                <div className="empty"></div>
                <div className="addcart-saving-row">
                  <p>You are saving ₹{state.allAddCart.length === 0 ? "0.00" : state.saveAmount} on this order</p>
                </div>
                <div className="addcart-total-row">
                  <h4 className="head">Price Summary </h4>
                  <div className="price-total">
                    <p>Order Total</p>
                    <h4>₹{state.orderAmount}.00</h4>
                  </div>
                  <div className="shipping">
                    <p>Shipping</p>
                    <h4><del>₹40</del> <span>Free</span></h4>
                  </div>
                  <div className="discount">
                    <p>5% online payment discount</p>
                    <h4><span>-₹{state.offerAmount}</span></h4>
                  </div>
                  <div className="total">
                    <p>Grand Total</p>
                    <h4 className="final">₹{state.allAddCart.length === 0 ? "0.00" : state.totalAmount}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> : 
      <section id='empty-payment-sec'>
        <img src='https://images.mamaearth.in/Cart.svg' alt='loading' />
        <h4>Missing Cart items?</h4>
        <p>Login to see the items you added previously or continue shopping as Guest</p>
        <div className='empty-btns'>
          <Button variant="contained" onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>Continue Shoppind</Button>
          <Button variant="outlined">Login</Button>
        </div>
      </section>}
    </>
  )
}

export default ProductPayment