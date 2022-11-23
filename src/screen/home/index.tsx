import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BsArrowRightShort} from 'react-icons/bs'
import {IoIosArrowForward,IoIosArrowBack}from 'react-icons/io'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {GiSmartphone} from 'react-icons/gi'

import { common as CommonAction } from 'store'
import { HomeCom,StyledSlider } from 'theme'
import {  TextCom} from 'components'
import Icon from 'assets'


const Home = () => {
  const dispatch = useDispatch()
  const [showChallenge,setshowChallenge] = useState(5)
  const [mobileOrDesk ,setmobileOrDesk] = useState(false)

  const common = useSelector((state:any)=> state.common)
  const slider :any = React.useRef(null)
  
  useEffect(() => {
    dispatch(CommonAction.Challenges({}))    
  }, [])

  const Challenge_data = common.Challenges_data

  const settings = {
    dots: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settings1 = {
    dots: false,
    arrows:false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  const ViewMore = ()=>{
    setshowChallenge((state)=> state===Challenge_data.length ? 5 : Challenge_data.length)
  }

  const TextForSlider = ()=>{
      if(mobileOrDesk){
        return (<>DESKTOP <div className='circle'></div></>)
      }
      return (<><div className='circle'></div><GiSmartphone size={28}/> Mobile</>)
  }

  const Challenges = (id:number)=>{
    let card = document.querySelectorAll('.card')
        for(let z=0;z<card.length;z++){
          card[z].classList.remove('active')
        }
        card[id].classList.add('active')
  }

  return (
    <HomeCom>
      <div className='banner'>
        <img src={Icon.mainBanner} className='img-fluid w-100' alt="" />
          <div className="graylayer"/>
        <div className='middle-text'>
        <TextCom size='lg' align='center' color='white' className='mainhead'>TRIPPRO - AN ECOMMERCE SOLUTION</TextCom>
        <TextCom align='center' color='white' className='desc maindesc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</TextCom>
          <div className="d-flex justify-content-center align-items-center gap-3 sample-text">
          <div className='d-flex justify-content-center align-items-center gap-2  border-left px-3'>
          <TextCom  weight='600' color='white'>Built for:</TextCom>
          <img src={Icon.responsive} className='img-fluid' alt="" width={40} height={40}/>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-2 border-left px-3'>
            <div className="d-flex flex-column justify-content-start align-items-center">
              <TextCom color='white' className='w-100'>Technologies:</TextCom>
              <TextCom weight='600' color='white' className='w-100'>Wordpress</TextCom>
            </div>
              <img src={Icon.wordpress} className='img-fluid' alt="" width={40} height={40}/>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-2'>
            <div className="d-flex flex-column justify-content-start align-items-center">
          <TextCom color='white' className='w-100'>Industry: </TextCom>
          <TextCom weight='600' color='white' className='w-100'>Ecommerce</TextCom>
            </div>
          <img src={Icon.shoppingCart} className='img-fluid' alt=""  width={40} height={40}/>
          </div>
          </div>
        </div>
      </div>
      <section className='laptop'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='sec-section'>
        <StyledSlider {...settings}>
        <img src={Icon.slider} className='img-fluid' alt="" />
        <img src={Icon.slider} className='img-fluid' alt="" />
        </StyledSlider>
              </div>
              <div className='laptopunder'>
                  <img src={Icon.laptopUnder} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <AnimationOnScroll className='about' animatePreScroll={false} animateOnce={true} delay={100} animateIn='animate__bounceInRight'>
            <TextCom weight='900' size='30' className='borderBottom'>ABOUT <TextCom as='span' weight='900' size='30' color=' #26a9e0 '> TRIPPRO</TextCom></TextCom>
            <TextCom>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
               ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
               et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
               est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit
               r, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquy
              am erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</TextCom>

              <TextCom as='button' className='buttonCom'>TOUR TO WEBSITE</TextCom>
            </AnimationOnScroll>
          </div>
          <div className="col-lg-6">
            <AnimationOnScroll className="position-relative overflow-hidden py-5" animatePreScroll={false} animateOnce={true} delay={100} animateIn='animate__bounceInRight'>
            <div className='box'>
              <img src={Icon.circle} className='img-fluid' alt="" />
            </div>
            <div className='d-flex w-100 justify-content-center'>
              <img src={Icon.tablet} className='' style={{maxWidth:'48%'}} alt="" />
            </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AnimationOnScroll animatePreScroll={false} animateOnce={true} delay={100} animateIn='animate__fadeInLeft'>
            <img src={Icon.tube} className='img-fluid' alt="" />
            </AnimationOnScroll>
          </div>
          <div className="col-lg-6">
          <TextCom weight='900' size='30'>OUR <TextCom as='span' weight='900' size='30' color=' #26a9e0 '> CHALLENGES</TextCom></TextCom>

          <div className="challenges mt-4">
            {
              Challenge_data?.slice(0,showChallenge).map((item:any,id:number)=>{
                return(
                  <AnimationOnScroll animatePreScroll={false} animateOnce={true} delay={100} animateIn='animate__fadeInUp'>
            <div className="card cursor-pointer" onClick={()=> Challenges(id)}>
              <TextCom as='h6' color='#77e0fb' size='30'>{(id+1 >=10 ? null : '0')}{id+1}</TextCom>
              <TextCom color='white'>{item.content}</TextCom>
            </div>
            </AnimationOnScroll>
                )
              })
            }
             <TextCom as='button' className='buttonCom' onClick={()=>ViewMore()}>{showChallenge === Challenge_data?.length ?'VIEW LESS': 'VIEW MORE'}</TextCom>
          </div>
          </div>
        </div>
      </div>
      <div className="container-fluid deskmob-slider overflow-hidden">
        <div className="row">
          <div className="col-lg-6">
            <div className="position-relative anim">
              {
                mobileOrDesk ?
            <StyledSlider  ref={slider} {...settings} className={`laptop`}>
                <img src={Icon.laptop1} className='img-fluid' alt="" />    
                <img src={Icon.laptop2} className='img-fluid' alt="" />       
            </StyledSlider>
            :
            <StyledSlider  ref={slider} {...settings1} className={`mobile`}>
                <img src={Icon.mobileslider3} className='img-fluid' width={40} alt="" />    
                <img src={Icon.mobileslider2} className='img-fluid' width={40} alt="" />    
                <img src={Icon.mobileslider1} className='img-fluid' width={40}  alt="" />    
            </StyledSlider>
              }
            </div>
          </div>
          <div className="col-lg-6">
            <AnimationOnScroll className="py-3 overflow-hidden"  animatePreScroll={false} animateOnce={true}  delay={300} animateIn='animate__fadeInUp'>
            <TextCom color='white' size='30' className='mb-2'>Their Old Website & Problems </TextCom>
            <div className="d-flex align-items-start mb-2">
            <BsArrowRightShort fill='white' size={35}/>
            <TextCom color='white' style={{width:'80%'}} className='pt-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</TextCom>
            </div>
            <div className="d-flex align-items-start mb-2">
            <BsArrowRightShort fill='white' size={35}/>
            <TextCom color='white' style={{width:'80%'}} className='pt-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</TextCom>
            </div>
            <div className="d-flex align-items-start mb-2">
            <BsArrowRightShort fill='white' size={35}/>
            <TextCom color='white' style={{width:'80%'}} className='pt-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</TextCom>
            </div>
            </AnimationOnScroll>
            <div className='mt-3'>
              
            <IoIosArrowBack size={25} fill='white' className='prev cursor-pointer' onClick={() => slider?.current?.slickPrev()}/>
            <IoIosArrowForward size={25} fill='white' className='next cursor-pointer'  onClick={() => slider?.current?.slickNext()}/>
            </div>  
            <TextCom as='button' weight='700' className='buttonCom2 border mt-5' onClick={()=>setmobileOrDesk((prev)=>!prev)}>
              <div className='d-flex align-items-center gap-2'>
              {TextForSlider()}
              </div>
              </TextCom>
          </div>
        </div>
      </div>

    </HomeCom>
  )
}

export default Home