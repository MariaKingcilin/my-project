import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import OTPInput, { ResendOTP } from "otp-input-react";
import { stateContext } from "./Context/StateContext";
import Cartproduct from "./Cartproduct";
import { useNavigate } from "react-router-dom";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function Header() {
  const {state,dispatch} = useContext(stateContext);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(true);
  const [login, setLogin] = useState(true);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log('Recaptcha verifier');
      },
      defaultCountry : 'IN'
    });
  }

  const onSignInSubmit = (e) => {
    e.preventDefault();
    
    if(phoneNo.length === 10) {
      configureCaptcha();
      const phoneNumber = '+91' + phoneNo;
      const appVerifier = window.recaptchaVerifier;
      console.log(phoneNumber);

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setShowOTP(false);
        console.log('OTP has been sent');
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log('SMS not sent');
        alert(error);
      });
    }
  }

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user));
      setOpen(false);
      setLogin(false);
      alert('User login successfully');
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert(error);
    });
  }
  
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

  const handleShow = () => {
    let addCartShow = document.querySelector('#addcart-sec');
    addCartShow.classList.add('addCart-show-hide');
  }

  const handleHide = () => {
    let addCartShow = document.querySelector('#addcart-sec');
    addCartShow.classList.remove('addCart-show-hide')
  }

  const handleSearch = (e) => {
    dispatch({type : 'search', payload : e.target.value.toLowerCase()});
  }

  const handleShowbar = () => {
    let showbar = document.querySelector('.navigate-sidebar');
    showbar.classList.remove('showbar');
  }

  const handleHidebar = () => {
    let showbar = document.querySelector('.navigate-sidebar');
    showbar.classList.add('showbar');
  }

  const handleLogout = () => {
    alert('User Logout successfully');
    setLogin(true);
  }

  return (
    <>
      <section id="header-sec" className="alert-sec">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="main-navbar">
              <div className="nav-burger">
                  <MenuIcon style={{color : 'rgb(0, 174, 239)'}} onClick={handleShowbar} />
              </div>
              <div className="header-mama-logo">
                <img
                  src="https://asset.brandfetch.io/idfoTiWukP/idJduluxkG.png"
                  alt="loading"
                />
              </div>
              <div className="header-search">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="header-searchbar"
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for items"
                    inputProps={{ "aria-label": "search google maps" }}
                    onChange={handleSearch}
                  />
                  <Button
                    className="search-btn"
                    variant="contained"
                    startIcon={<SearchIcon />}
                  >
                    <span>Search</span>
                  </Button>
                </Paper>
              </div>
              <div className="goodness-img">
                <img
                  src="https://images.mamaearth.in/vip-desktop-join.gif"
                  alt="loading"
                />
              </div>
              <div className="prifile-navbar">
                <IconButton aria-label="show 4 new mails">
                  <Badge
                    className="addcart-badge"
                    badgeContent={state.allAddCart.length}
                    color="error"
                  >
                    <ShoppingCartOutlinedIcon className="icon" onClick={handleShow} />
                  </Badge>
                </IconButton>
                <a className="nav-hide" href="">Cart</a>
              </div>
              <div className="prifile-navbar">
                <IconButton>
                  <PersonOutlineOutlinedIcon className="icon" />
                </IconButton>
                <a className="nav-hide" href="">Login</a>
                <div className="login-sec login-before">
                  <ol>
                    <li><PersonOutlineOutlinedIcon className="ico" />Your Profile</li>
                    <li><ShoppingCartOutlinedIcon className="ico" />Your Orders</li>
                    <li><CardGiftcardOutlinedIcon className="ico" />Goodness Insider</li>
                    <li><LocationOnIcon className="ico" />Manage Address</li>
                    <li><LocalPhoneIcon className="ico" />Contact Us</li>
                    <li>{login ? <Button onClick={handleOpen} style={{width : '100%'}} variant="contained">LOGIN</Button> : <Button onClick={handleLogout} style={{width : '100%'}} variant="contained">LOGOUT</Button>}</li>
                  </ol>
                </div>
              </div>
            </Toolbar>
            <div className="navigation-sec">
              <div className="navigation-bar">
                <ul>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                  }}><li>HOME</li></a>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/hair');
                  }}><li>HAIR</li></a>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/face');
                  }}><li>FACE</li></a>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/body');
                  }}><li>BODY</li></a>
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/baby');
                  }}><li>BABY</li></a>
                  <a href=""><li>BEAUTY</li></a>
                  <a href=""><li>MAKEUP</li></a>
                  <a href=""><li>INGREDIENT</li></a>
                  <a href=""><li>GIFT PACKS</li></a>
                  <a href=""><li>ALL PRODUCTS</li></a>
                  <a href=""><li>BLOG</li></a>
                  <a href=""><li>PLANT GOODNESS</li></a>
                  <a href=""><li>STORE LOCATOR</li></a>
                </ul>
              </div>
            </div>
            <div className="navigation-se">
            <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="header-searchbar"
                  style={{width : '100%'}}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for items"
                    inputProps={{ "aria-label": "search google maps" }}
                    onChange={handleSearch}
                  />
                  <Button
                    className="search-btn"
                    variant="contained"
                    startIcon={<SearchIcon />}
                  >
                    <span>Search</span>
                  </Button>
                </Paper>
            </div>
          </AppBar>
        </Box>
        <section id="addcart-sec">
          <div className="addcart-full-sec">
            <div className="addcart-header-sec">
                <ArrowBackIcon onClick={handleHide} />
                <span>My Cart</span>
            </div>
            {state.allAddCart.length > 0 ? <div className="addcart-details-sec">
              <div className="addcart-offer-row">
                <div className="offer-img-col">
                  <img src="https://images.mamaearth.in/cart-offer-2.gif" alt="loading" />
                </div>
                <div className="offer-content-col">
                  <h4>Get a FREE Perfume</h4>
                  <p>Shop For ₹599 & Get a FREE Eau De Parfum Aqua 50ml Worth ₹699 & Additional ₹100 Cashback.</p>
                </div>
                <div className="offer-code-col">
                  <div className="offer-code-card">
                    <p>Tap Here To Apply</p>
                    <h4>FREE599</h4>
                  </div>
                </div>
              </div>
              <div className="empty"></div>
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
              <div className="addcart-footer-sec">
                <div className="footer-details">
                  <ShoppingCartOutlinedIcon />
                  <div className="details">
                    <p>{state.allAddCart.length} Items</p>
                    <p>₹{state.allAddCart.length === 0 ? "0.00" : state.totalAmount}</p>
                  </div>
                </div>
                <div className="footer-btn">
                  <Button className="btn" variant="contained"
                   onClick={() => navigate('/payment')}
                   ><a href="#">CONTINUE</a></Button>
                </div>
              </div>
            </div> : 
            <div className="emptycart-sec">
              <img src="https://images.mamaearth.in/wysiwyg/bags2x.png?fit=contain" alt="loading" />
              <h5>Your cart is empty !</h5>
              <p>It's a good day to buy the items you saved for later</p>
              <Button className="empty-btn" variant="contained"
              onClick={() => 
                navigate('/')
              }
              ><a href="#">SHOP NOW</a></Button>
            </div>}
          </div>
        </section>
        <div className="navigate-sidebar showbar">
          <div className="sidebar-login">
            <img src="https://images.mamaearth.in/neutral-min.png" alt='loading' />
            <span>Login</span>
            <ClearIcon className="sidebar-cancel" onClick={handleHidebar} />
          </div>
          <div className="navigation-sidebar">
            <div className="sidebar-icon">
                <img src="https://images.mamaearth.in/svg/truckIcon.svg" alt="loading" />
                <a href=""><li>Track Order</li></a>
            </div>
            <div className="sidebar-icon">
                <img src="https://images.mamaearth.in/svg/newLaunchesIcon.svg" alt="loading" />
                <a href=""><li>New Launches</li></a>
            </div>
            <div className="sidebar-icon">
                <img src="https://images.mamaearth.in/svg/bestSellerIcon.svg" alt="loading" />
                <a href=""><li>Best Sellers</li></a>
            </div>
            <div className="sidebar-icon">
                <img src="https://images.mamaearth.in/svg/beautyIcon.svg" alt="loading" />
                <a href=""><li>Beauty</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/dryerIcon.svg" alt="loading" />
              <a href="" onClick={(e) => {
                e.preventDefault();
                navigate('/hair');
              }}><li>Hair</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/faceCreamIcon.svg" alt="loading" />
              <a href="" onClick={(e) => {
                e.preventDefault();
                navigate('/face');
              }}><li>Face</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/bodyProductsicon.svg" alt="loading" />
              <a href="" onClick={(e) => {
                e.preventDefault();
                navigate('/body');
              }}><li>Body</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/babyIcon.svg" alt="loading" />
              <a href="" onClick={(e) => {
                e.preventDefault();
                navigate('/baby');
              }}><li>Baby</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/colorcareIcon.svg" alt="loading" />
              <a href=""><li>Makeup</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/ingredientIcon.svg" alt="loading" />
              <a href=""><li>Ingredient</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/giftsIcon.svg" alt="loading" />
              <a href=""><li>Gift Packs</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/myAccountIcon.svg" alt="loading" />
              <a href=""><li>Support</li></a>
            </div>
            <div className="sidebar-icon">
              <img src="https://images.mamaearth.in/svg/myAccountIcon.svg" alt="loading" />
              <a href=""><li>Plant Goodness</li></a>
            </div>
          </div>
          <div className="sidebar-help">
            <p>Need Help?</p>
          </div>
        </div>
        <div className="alert-box">
          {state.alertAdd ? <Alert severity="success">Product has been Added to cart</Alert> : <></>}
          {state.alertRemove ? <Alert severity="success">Product has been Removed from cart</Alert> : <></>}
          {state.alertDenger ? <Alert severity="error">Quantity Limit Exceeded</Alert> : <></>}
        </div>
      </section>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box-modal' sx={style}>
          {showOTP ? <div className="login-card">
            <h3>Log in to get started</h3>
            <div className="login-profile">
              <PersonOutlineOutlinedIcon className="ico size" />
              <p>Get access to your orders, track previous order & Redeem Mama Cash</p>
            </div>
            <form onSubmit={onSignInSubmit}>
              <div id="sign-in-button"></div>
              <TextField value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="inpit" size="small" autoFocus id="outlined-basic" label="Phone Number" variant="outlined" />
              <p className="terms">By Continuing, you agree to Mamaearth's <span>Terms and Conditions</span>  and <span>Privacy Policy</span></p>
              <Button type="submit" style={{display : 'block', fontSize : '18px', marginBottom : '10px', width : '100%'}} variant="contained">LOGIN WITH OTP</Button>
              <Button style={{display : 'block', fontSize : '18px', width : '100%'}} variant="text">CONTINUE AS GUEST</Button>
            </form>
            <ClearIcon onClick={handleClose} className="cancel" />
          </div> : 
          <div className="login-card" style={{textAlign : 'center'}}>
            <h3>Verify OTP</h3>
            <img style={{width : '80px', margin : '0 auto', marginBottom : '15px'}} src="https://images.mamaearth.in/svg/otp.svg" alt="loading" />
            <p>Sent to <span style={{color : 'rgb(0, 175, 239)'}}>XXXXXX{phoneNo.substr(phoneNo.length - 4)}</span></p>
            <form onSubmit={onSubmitOtp}>
              <OTPInput className='otp-input' value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" />
              {/* <span>Resend OTP in 00:</span> */}
              {/* <ResendOTP onResendClick={onSignInSubmit} maxTime={30} /> */}
              <Button type="submit" style={{display : 'block', fontSize : '18px', marginBottom : '10px', width : '100%'}} variant="contained">VERIFIY OTP</Button>
              <p className="otp-content">DO NOT SHARE THIS OTP WITH ANYONE</p>
            </form>
            <ArrowBackIcon onClick={() => setShowOTP(true)} className="back" />
          </div>}
        </Box>
      </Modal>
    </>
  );
}