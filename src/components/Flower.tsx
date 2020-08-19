import React, { Component, RefObject, createRef, MouseEvent, FormEvent } from 'react';
import { render } from 'react-dom';
import './Flower.css';
import gsap from 'gsap';
import { TweenLite, TimelineLite } from "gsap";
import Paragraph from './Paragraph'

interface AppProps {}
interface AppState {}
// type Description = ""
// type ComponentProps = {
//   state: Description
// }


export class Flower extends Component <AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);

    this.cloud = null;
    this.cloud2 = null;
    this.cloud3 = null;
    
    this.drop = null;
    this.drop2 = null;
    this.drop3 = null;
    this.drop4 = null;
    this.drop5 = null;

    this.stem = null;
    this.flower = null;
    this.roots = null;
    this.title = null;
    this.paragraph = null;

    this.cloudTween = null;
    this.dropTween = null;
    this.stemTween = null;
    this.flowerTween = null;
    this.rootsTween = null;
    this.titleTween = null;
    this.paragraphTween = null;    

    
    
  }
  
  cloud: HTMLDivElement | null;
  cloud2: HTMLDivElement | null;
  cloud3: HTMLDivElement | null;

  drop: HTMLDivElement | null;
  drop2: HTMLDivElement | null;
  drop3: HTMLDivElement | null;
  drop4: HTMLDivElement | null;
  drop5: HTMLDivElement | null;

  stem: HTMLDivElement | null;
  flower: HTMLDivElement | null;
  roots: HTMLDivElement | null;
  title: HTMLDivElement | null;
  paragraph: HTMLDivElement | null;

  cloudTween: ReturnType<typeof TweenLite.to> | null;
  dropTween: ReturnType<typeof TweenLite.to> | null;
  stemTween: ReturnType<typeof TweenLite.to> | null;
  flowerTween: ReturnType<typeof TweenLite.to> | null;
  rootsTween: ReturnType<typeof TweenLite.to> | null;
  titleTween: ReturnType<typeof TweenLite.to> | null;
  paragraphTween: ReturnType<typeof TweenLite.to> | null;
  
  

  componentDidMount() {

    this.cloudTween = gsap.fromTo(this.cloud, { filter: "brightness(0.5)" },
    {
      duration: .2,
      filter: "brightness(1)",
      yoyo: true,
      repeat: -1,
      //repeatDelay: 0.5,
      ease: "none"
    })
    
    this.dropTween = gsap.fromTo(this.drop, {y: -1, opacity: 1}, { y: 500, opacity: 0, duration: 3});
    this.dropTween = gsap.fromTo(this.drop2, {y: -1}, { y: 500, width: 50, duration: 3, delay: 0.5});
    this.dropTween = gsap.fromTo(this.drop3, {y: -1}, { y: 500, width: 50, duration: 3});
    this.dropTween = gsap.fromTo(this.drop4, {y: -1}, { y: 500, width: 50, duration: 3, delay: 0.5});
    this.dropTween = gsap.fromTo(this.drop5, {y: -1}, { y: 500, width: 50, duration: 3});

    this.stemTween = gsap.fromTo(this.stem, {height: 0, opacity: 0}, { height: 40, opacity: 1, duration: 5, delay: 3});
    this.rootsTween = gsap.fromTo(this.roots, {opacity: 0}, {opacity: 1, duration: 2, delay: 3});
    this.flowerTween = gsap.fromTo(this.flower, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    this.titleTween = gsap.fromTo(this.title, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    this.paragraphTween = gsap.fromTo(this.title, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});

    
  }

  

  handleClick = (e: any):any => {
    e.preventDefault()
    return(
      this.setState({message: "This is the next part of photosynthesis"})
    )
    
  }

  render () {
    return (
      <div>
        <div className='papaDiv'>
          <div  className='bgDiv'>
            <img className='bgImg fImgs' src='./flower/background.png' alt='sky above a plot of earth' />
          </div>
          <div ref={div => this.cloud = div} className='cloudDiv'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div className='cloudDiv2'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div className='cloudDiv3'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div ref={div => this.drop = div} className='waterDiv'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.drop2 = div} className='waterDiv2'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.drop3 = div} className='waterDiv3'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.drop4 = div} className='waterDiv4'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.drop5 = div} className='waterDiv5'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.stem = div} className='stemDiv'>
            <img className='stemImg fImgs' src='./flower/stem.png' alt='flower stem' />
          </div>
          <div ref={div => this.flower = div} className='flowerDiv'>
            <img className='flowerImg fImgs' src='./flower/sunflower.png' alt='sunflower' />
          </div>
          <div onClick={this.handleClick} ref={div => this.roots = div} className='rootsDiv'>
            <img className='rootsImg fImgs' src='./flower/roots.png' alt='roots' />
          </div>
          <div ref={div => this.title = div} className='titleDiv'>
            <h1>Photosynthesis</h1>
          </div>
          <div ref={div => this.paragraph = div} className='paragraphDiv'>
            <h2>
              {this.state}
            </h2>
          </div>
        </div>
  
      </div>
    )
  }
 
}

render(<Flower />, document.getElementById('root'));

