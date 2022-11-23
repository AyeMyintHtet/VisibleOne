import React from 'react'

import {FaFacebookF ,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import {FiMail}from 'react-icons/fi'

import { TextCom } from './TextCom'
import { StyledFooter } from 'theme'


export const FooterCom = () => {
  return (
    <StyledFooter>
        <div className='mainDiv'>
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-2 col-md-6">
                    <TextCom color='white' className='mb-2'> QUICK LINK</TextCom>
                    <ul>
                        <li><div className='dot'/>Services</li>
                        <li><div className='dot'/>About Us</li>
                        <li><div className='dot'/>Blog</li>
                        <li><div className='dot'/>Quotation</li>
                        <li><div className='dot'/>Partnership</li>
                        <li><div className='dot'/>Contact Us</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                <TextCom color='white' className='mb-2'>OUR SERVICES</TextCom>
                <ul>
                    <li><div className='dot'/>Web Development</li>
                    <li><div className='dot'/>Web Design</li>
                    <li><div className='dot'/>Responsive Web Design</li>
                    <li><div className='dot'/>CMS Website Design</li>
                    <li><div className='dot'/>Custom Website Design</li>
                    <li><div className='dot'/>UI & UX Website Design</li>
                    <li><div className='dot'/>360 virtual Tour</li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <TextCom color='white' className='opacity0 mb-2'>Our Serives</TextCom>
                    <ul>
                    <li><div className='dot'/>Ecommerce Development</li>
                    <li><div className='dot'/>WooCommerce Development</li>
                    <li><div className='dot'/>OsCommerce Development</li>
                    <li><div className='dot'/>Magento Development</li>
                    <li><div className='dot'/>BigCommerce Development</li>
                    <li><div className='dot'/>SSL Certificate</li>
                    <li><div className='dot'/>Promotion Video</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <TextCom color='white' className='mb-2'>VISIBLE ONE SINGAPORE</TextCom>
                    <TextCom color='white' className='mb-2'>+65 6248 0838</TextCom>
                    <TextCom color='white' className='mb-2'>24 Sin Ming Lane Midview City #07-93,Singapore 573970</TextCom>
                    <div className="d-flex align-items-center mb-2 gap-3">
                        <FiMail fill='white'/>
                        <TextCom color='white'>info@visibleone.con</TextCom>
                    </div>
                    <TextCom color='white' className='mb-4'>Office Hour:Mon - Fri (9am-6pm)</TextCom>
                    <div className="d-flex align-items-center justify-content-between">
                    <TextCom color='white' className='box'>Contact Us</TextCom>
                    <TextCom color='#2DC4EA'>Contact HK Office</TextCom>
                    </div>
                </div>                                                
            </div>
            <hr className='opacity1 white' />
            <div className='d-flex align-items-center justify-content-end'>
                <div>
                <TextCom color='white' size='sm'>Subcribe to Our News,tips and guidelines</TextCom>
                <TextCom as='input' className='input' placeholder='###'></TextCom>
                <TextCom as='button' className='box white'>Submit</TextCom>
                </div>
            </div>
            <hr className='opacity1 white'/>
            <div className='d-flex justify-content-center align-items-center gap-4'>
                <FaFacebookF size={30} fill='white'/>
                <FaTwitter size={30} fill='white'/>
                <FaInstagram size={30} fill='white'/>
                <FaLinkedinIn size={30} fill='white'/>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4 mt-3'>
                <TextCom color='white'>Shopping T&C</TextCom>
                <TextCom color='white'>Terms & Conditions</TextCom>
                <TextCom color='white'>Privacy Policy</TextCom>
                <TextCom color='white'>&#169; 2018 - Visible One</TextCom>
            </div>
        </div>
        </div>
    </StyledFooter>
  )
}
