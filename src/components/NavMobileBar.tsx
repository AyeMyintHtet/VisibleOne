import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { common as CommonAction } from 'store'
import { IoMdArrowDropdown } from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrClose}from 'react-icons/gr'

import { StyledNavMobile } from 'theme'
import { TextCom } from './TextCom'

export const NavMobileBar = () => {
    const dispatch = useDispatch()
    const common = useSelector((state:any) => state.common)

    const MenuOnOff = ()=>{
        dispatch(CommonAction.Drawer({}))
      }

      
  return (
    <StyledNavMobile className={`${common.Drawer === true ? 'active' : null}`}>
    <div className="px-5 py-5">
        <div className="d-flex justify-content-end cursor-pointer">
        <GrClose size={25} onClick={()=>MenuOnOff()}/>
        </div>
        <div className="d-flex flex-column  justify-content start gap-3">
        <div className="d-flex align-items-center hoverEff">
        <TextCom>Home</TextCom>
        </div>
        <div className="d-flex align-items-center hoverEff">
        <TextCom>Service</TextCom>
        <IoMdArrowDropdown/>
        </div>
        <div className="d-flex align-items-center hoverEff">
        <TextCom>Company</TextCom>
        <IoMdArrowDropdown/>
        </div>
        <div className="d-flex hoverEff">
        <TextCom>Blog</TextCom>
        </div>
        <div className="d-flex align-items-center hoverEff">
        <TextCom>Contact Us</TextCom>
        <IoMdArrowDropdown/>
        </div>
        <div className="d-flex align-items-center ">
        <TextCom as='input' className='input' placeholder='search....'/>
        <div className="search">
        <AiOutlineSearch/>
        </div>
        </div>
        </div>
    </div>

    </StyledNavMobile>
  )
}
