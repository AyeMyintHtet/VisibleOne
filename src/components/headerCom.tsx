import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineWhatsApp,AiOutlineFileText,AiOutlineSearch} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import{GiHamburgerMenu} from 'react-icons/gi'
import {GrMail}from 'react-icons/gr'

import { common as CommonAction } from 'store'

import { TextCom } from './TextCom'
import { StyledHeader } from 'theme'
import Icon from 'assets'


export const HeaderCom = () => {
  const dispatch = useDispatch()

  const MenuOnOff = ()=>{
    dispatch(CommonAction.Drawer({}))
  }

  const ToTop = ()=>{
    window.scrollTo(0,0)
  }
  
  return (
    <StyledHeader>
    <section className="header">
      <div className='logo' onClick={() => ToTop()}>
        <img src={Icon.logo} className='img-fluid' alt=""/>
      </div>
      <div className='desktop d-flex align-items-center justify-content-center gap-3'>
        <div className="d-flex align-items-center gap-2">
        <BsFillTelephoneFill fill='#26a9e0'/>
        <TextCom>62480838</TextCom>
        </div>
        <div className="d-flex align-items-center gap-2">
        <AiOutlineWhatsApp fill='#26a9e0'/>
        <TextCom>84849948</TextCom>
        </div>
        <div className="d-flex align-items-center gap-2">
        <GrMail fill='#26a9e0'/>
          <TextCom>info@visibleone.com</TextCom>
        </div>
        <div className='d-flex align-items-center gap-2 greenBox'>
        <AiOutlineFileText fill='white'/>
          <TextCom size='sm'>QUOTE</TextCom>
        </div>
        <div className='d-flex align-items-center gap-1 languages'>
          <TextCom size='sm'>SG EN</TextCom>
          <IoMdArrowDropdown fill='#26a9e0'/>
        </div>
      </div>
      <div className='mobile-view cursor-pointer d-none'>
        <GiHamburgerMenu size={32} onClick={()=>MenuOnOff()}/>
      </div>
    </section>
    <section className='second-header desktop'>
      <div className="hoverEff">
      <TextCom>Home</TextCom>
      </div>
      <div className="d-flex align-items-center hoverEff">
      <TextCom>Services</TextCom>
      <IoMdArrowDropdown/>
      </div>
      <div className="d-flex align-items-center hoverEff">
      <TextCom>Company</TextCom>
      <IoMdArrowDropdown/>
      </div>
      <div className="hoverEff">
      <TextCom>Blog</TextCom>
      </div>
      <div className="d-flex align-items-center hoverEff">
      <TextCom>Contact Us</TextCom>
      <IoMdArrowDropdown/>
      </div>
      <AiOutlineSearch/>
    </section>
    </StyledHeader>
  )
}