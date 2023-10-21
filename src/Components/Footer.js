import React from 'react'
import './Footer.scss'
import Button from '@mui/material/Button'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'

function Footer() {
  return (
    <section id='footer-sec'>
        <div className='container'>
            <div className='all-footer'>
                <div className='footer-contact-row'>
                    <div className='footer-contact-col'>
                        <div className='footer-contact-card'>
                            <div className='contact-img'>
                                <img src='https://images.mamaearth.in/wysiwyg/mobile-truck.png' alt='loading' />
                            </div>
                            <div className='contact-img-content'>
                                <h3>Free Shipping</h3>
                                <p>On Orders Above Rs. 399</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer-contact-col'>
                        <div className='footer-contact-card'>
                            <div className='contact-img'>
                                <img src='https://images.mamaearth.in/wysiwyg/mobile-wallet.png' alt='loading' />
                            </div>
                            <div className='contact-img-content'>
                                <h3>COD Available</h3>
                                <p>@ Rs. 40 Per Order</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer-queries-col'>
                        <h3>Have Queries or Concerns?</h3>
                        <Button className='contact-btn' variant="outlined">CONTACT US</Button>
                    </div>
                </div>
                <div className='footer-payment-row'>
                    <div className='payment-content'>
                        <h3>PAYMENT</h3>
                        <div className='payment-icon'>
                            <VerifiedUserIcon />
                            <p>100% Payment Protection, Easy Return Policy</p>
                        </div>
                    </div>
                    <div className='payment-image'>
                        <img src='https://images.mamaearth.in/png/web-payments.png' alt='loading' />
                    </div>
                </div>
                <div className='footer-social-row'>
                    <div className='social-header-col'>
                        <h3>SHOW US SOME</h3>
                        <img src='https://images.mamaearth.in/svg/heart-red.svg' alt='loading' />
                        <h3>ON SOCIAL MEDIA</h3>
                    </div>
                    <div className='social-icon-col'>
                        <a href=''><img src='https://images.mamaearth.in/svg/facebook-gray.svg' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/svg/twitter.svg' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/svg/insta.svg' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/svg/Youtube.svg' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/svg/pinterest.svg' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/svg/mail.svg' alt='loading' /></a>
                    </div>
                    <div className='social-play-col'>
                        <a href=''><img src='https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png' alt='loading' /></a>
                        <a href=''><img src='https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png' alt='loading' /></a>
                    </div>
                </div>
                <div className='footer-customer-row'>
                    <span>© 2023 Honasa Consumer Limited. All Rights Reserved</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer