import React, { Component, RefObject, createRef } from 'react';
import { render } from 'react-dom';
import './Flower.css';
import gsap from 'gsap';
import { TweenLite } from "gsap";
import Paragraph from './Paragraph'

interface AppProps {}
interface AppState {}

export class Flower extends Component <AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);

    this.drop = null;
    this.stem = null;
    this.flower = null;
    this.roots = null;
    this.title = null;
    this.paragraph = null;
    this.dropTween = null;
    this.stemTween = null;
    this.flowerTween = null;
    this.rootsTween = null;
    this.titleTween = null;
    this.paragraphTween = null;
    
  }
  


  drop: HTMLDivElement | null;
  stem: HTMLDivElement | null;
  flower: HTMLDivElement | null;
  roots: HTMLDivElement | null;
  title: HTMLDivElement | null;
  paragraph: HTMLDivElement | null;
  dropTween: ReturnType<typeof TweenLite.to> | null;
  stemTween: ReturnType<typeof TweenLite.to> | null;
  flowerTween: ReturnType<typeof TweenLite.to> | null;
  rootsTween: ReturnType<typeof TweenLite.to> | null;
  titleTween: ReturnType<typeof TweenLite.to> | null;
  paragraphTween: ReturnType<typeof TweenLite.to> | null;
  

  componentDidMount() {
    this.dropTween = gsap.fromTo(this.drop, {y: -1, opacity: 1}, { y: 500, opacity: 0, duration: 3});
    this.stemTween = gsap.fromTo(this.stem, {height: 0, opacity: 0}, { height: 40, opacity: 1, duration: 5, delay: 3});
    this.rootsTween = gsap.fromTo(this.roots, {opacity: 0}, {opacity: 1, duration: 2, delay: 3});
    this.flowerTween = gsap.fromTo(this.flower, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    this.titleTween = gsap.fromTo(this.title, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    this.paragraphTween = gsap.fromTo(this.title, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    
  }

  render () {
    return (
      <div>
        <div className='papaDiv'>
          <div className='bgDiv'>
            <img className='bgImg fImgs' src='./flower/background.png' alt='sky above a plot of earth' />
          </div>
          <div className='cloudDiv'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div ref={div => this.drop = div} className='waterDiv'>
            <img className='waterImg fImgs' src='./flower/waterdrop.png' alt='drop of water' />
          </div>
          <div ref={div => this.stem = div} className='stemDiv'>
            <img className='stemImg fImgs' src='./flower/stem.png' alt='flower stem' />
          </div>
          <div ref={div => this.flower = div} className='flowerDiv'>
            <img className='flowerImg fImgs' src='./flower/sunflower.png' alt='sunflower' />
          </div>
          <div ref={div => this.roots = div} className='rootsDiv'>
            <img className='rootsImg fImgs' src='./flower/roots.png' alt='roots' />
          </div>
          <div ref={div => this.title = div} className='titleDiv'>
            <h1>Photosynthesis</h1>
          </div>
          <div ref={div => this.paragraph = div} className='paragraphDiv'>
            <Paragraph />
          </div>
        </div>
  
      </div>
    )
  }
 
}

render(<Flower />, document.getElementById('root'));

