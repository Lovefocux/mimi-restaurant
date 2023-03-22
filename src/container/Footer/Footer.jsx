import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>49b, Red Container Avenue, Lagos State</p>
        <p className='p__opensans'>081385758589</p>
        <p className='p__opensans'>081385758589</p>
      </div>
      <div className='app_footer-links_logo'>
        <img src={images.gericht} alt="footer-logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" style={{marginTop: '15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>8:00 am - 12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>7:00 am - 11:00 pm</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Mimi. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
