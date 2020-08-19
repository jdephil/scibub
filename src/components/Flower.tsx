import React, { Component, RefObject, createRef, MouseEvent, FormEvent } from 'react';
import { render } from 'react-dom';
import './Flower.css';
import gsap from 'gsap';
import { TweenLite, TimelineLite } from "gsap";


interface AppProps {}
interface AppState {}
// type Description = ""
// type ComponentProps = {
//   state: Description
// }


export class Flower extends Component <AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);

    this.background = null;

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
    this.paragraph2 = null;

    this.oxy = null;
    this.oxy2 = null;
    this.oxy3 = null;
    this.oxy4 = null;
    this.oxy5 = null;
    this.oxy6 = null;

    this.backgroundTween = null;
    this.cloudTween = null;
    this.dropTween = null;
    this.stemTween = null;
    this.flowerTween = null;
    this.rootsTween = null;
    this.titleTween = null;
    this.paragraphTween = null; 
    this.oxyTween = null;

    
    
  }

  background: HTMLDivElement | null;
  
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
  paragraph2: HTMLDivElement | null;

  oxy: HTMLDivElement | null; 
  oxy2: HTMLDivElement | null; 
  oxy3: HTMLDivElement | null; 
  oxy4: HTMLDivElement | null; 
  oxy5: HTMLDivElement | null; 
  oxy6: HTMLDivElement | null; 

  backgroundTween: ReturnType<typeof TweenLite.to> | null;
  cloudTween: ReturnType<typeof TweenLite.to> | null;
  dropTween: ReturnType<typeof TweenLite.to> | null;
  stemTween: ReturnType<typeof TweenLite.to> | null;
  flowerTween: ReturnType<typeof TweenLite.to> | null;
  rootsTween: ReturnType<typeof TweenLite.to> | null;
  titleTween: ReturnType<typeof TweenLite.to> | null;
  paragraphTween: ReturnType<typeof TweenLite.to> | null;
  oxyTween: ReturnType<typeof TweenLite.to> | null;
  

  componentDidMount() {

    this.backgroundTween = gsap.fromTo(this.background, {filter: "brightness(.3)"}, {filter: "brightness(1)", duration: 5})

    this.cloudTween = gsap.fromTo(this.cloud, { filter: "brightness(0.5)" },
    {
      duration: .2,
      filter: "brightness(1)",
      yoyo: true,
      repeat: 10,
      //repeatDelay: 0.5,
      ease: "none"
    })
    this.cloudTween = gsap.fromTo(this.cloud2, { filter: "brightness(0.5)" },
    {
      duration: .2,
      filter: "brightness(1)",
      yoyo: true,
      repeat: 8,
      repeatDelay: 0.2,
      ease: "none"
    })
    this.cloudTween = gsap.fromTo(this.cloud3, { filter: "brightness(0.5)" },
    {
      duration: .2,
      filter: "brightness(1)",
      yoyo: true,
      repeat: 10,
      repeatDelay: 0.1,
      ease: "none"
    })
    
    this.dropTween = gsap.fromTo(this.drop, {y: -1, opacity: 1}, { y: 500, opacity: 0, duration: 3});
    this.dropTween = gsap.fromTo(this.drop2, {y: -1}, { y: 500, width: 50, duration: 3, delay: 0.5});
    this.dropTween = gsap.fromTo(this.drop3, {y: -1}, { y: 500, width: 50, duration: 3});
    this.dropTween = gsap.fromTo(this.drop4, {y: -1}, { y: 500, width: 50, duration: 3, delay: 0.5});
    this.dropTween = gsap.fromTo(this.drop5, {y: -1}, { y: 500, width: 50, duration: 3});

    this.stemTween = gsap.fromTo(this.stem, {height: 0, opacity: 0}, { height: 40, opacity: 1, duration: 5, delay: 3});
    this.rootsTween = gsap.fromTo(this.roots, {opacity: 0}, {opacity: 1, duration: 2, delay: 3});
    this.flowerTween = gsap.fromTo(this.flower, {opacity: 0}, {opacity: 1, duration: 3, delay: 7});
    this.titleTween = gsap.fromTo(this.title, {opacity: 0}, {opacity: 1, duration: 3, delay: 7});
    
    this.paragraphTween = gsap.fromTo(this.paragraph, {opacity: 0}, {opacity: 1, duration: 3, delay: 8});
    
    this.dropTween = gsap.to(this.drop2, {x:640, width: 20, duration: 2, delay: 8.5});
    this.dropTween = gsap.to(this.drop3, {x:440, width: 20, duration: 2, delay: 8});
    this.dropTween = gsap.to(this.drop4, {x:-360, width: 20, duration: 2, delay: 8.5});
    this.dropTween = gsap.to(this.drop5, {x:-160, width: 20, duration: 2, delay: 8});
    
    this.dropTween = gsap.to(this.drop2, { y: 360, duration: 2, delay: 10.5});
    this.dropTween = gsap.to(this.drop3, { y: 400, duration: 2, delay: 10});
    this.dropTween = gsap.to(this.drop4, { y: 380, duration: 2, delay: 10.5});
    this.dropTween = gsap.to(this.drop5, { y: 430, duration: 2, delay: 10});

    this.dropTween = gsap.to(this.drop2, {x: 665, y: 350, duration: 1, delay: 12});
    this.dropTween = gsap.to(this.drop3, { x: 420, duration: 1, delay: 12.5});
    this.dropTween = gsap.to(this.drop4, { x: -390, y: 360, duration: 1, delay: 12});
    this.dropTween = gsap.to(this.drop5, { x: -140, y: 410, duration: 1, delay: 12.5});

    this.paragraphTween = gsap.to(this.paragraph2, {opacity: 1, duration: 2, delay: 13.5});
    this.paragraphTween = gsap.to(this.paragraph, {opacity: 0, duration: 2, delay: 13.5});

    this.dropTween = gsap.to(this.drop2, {opacity: 0, duration: 2, delay: 15});
    this.dropTween = gsap.to(this.drop3, { opacity: 0, duration: 2, delay: 15.5});
    this.dropTween = gsap.to(this.drop4, { opacity: 0, duration: 2, delay: 15});
    this.dropTween = gsap.to(this.drop5, { opacity: 0, duration: 2, delay: 15.5});
    this.oxyTween = gsap.to(this.oxy, { opacity: 1, duration: 2, delay: 15.5})
    this.oxyTween = gsap.to(this.oxy2, { opacity: 1, duration: 2, delay: 15.5})
    this.oxyTween = gsap.to(this.oxy3, { opacity: 1, duration: 2, delay: 15.5})
    this.oxyTween = gsap.to(this.oxy4, { opacity: 1, duration: 2, delay: 15.5})
    this.oxyTween = gsap.to(this.oxy5, { opacity: 1, duration: 2, delay: 15.5})
    this.oxyTween = gsap.to(this.oxy6, { opacity: 1, duration: 2, delay: 15.5})

    this.oxyTween = gsap.to(this.oxy, {x: -400, y: -100, opacity: 0, duration: 3, delay: 17})
    this.oxyTween = gsap.to(this.oxy2, {x: 400, y: -100, opacity: 0, duration: 3, delay: 17})
    this.oxyTween = gsap.to(this.oxy3, {x: 200, y: -200, opacity: 0, duration: 3, delay: 17})
    this.oxyTween = gsap.to(this.oxy4, {x: -400, y: -300, opacity: 0, duration: 3, delay: 17})
    this.oxyTween = gsap.to(this.oxy5, {x: -400, y: -200, opacity: 0, duration: 3, delay: 17})
    this.oxyTween = gsap.to(this.oxy6, {x: 400, y: -200, opacity: 0, duration: 3, delay: 17})
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
          
          <div ref={div => this.background = div} className='bgDiv'>
            <img className='bgImg fImgs' src='./flower/background.png' alt='sky above a plot of earth' />
          </div>
          <div ref={div => this.cloud = div} className='cloudDiv'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div ref={div => this.cloud2 = div} className='cloudDiv2'>
            <img className='cloudImg fImgs' src='./flower/cloud.png' alt='cloud' />
          </div>
          <div ref={div => this.cloud3 = div} className='cloudDiv3'>
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
          <div ref={div => this.oxy = div} className='oxygenDiv oxDivAll'></div>
          <div ref={div => this.oxy2 = div} className='oxygenDiv2 oxDivAll'></div>
          <div ref={div => this.oxy3 = div} className='oxygenDiv3 oxDivAll'></div>
          <div ref={div => this.oxy4 = div} className='oxygenDiv4 oxDivAll'></div>
          <div ref={div => this.oxy5 = div} className='oxygenDiv5 oxDivAll'></div>
          <div ref={div => this.oxy6 = div} className='oxygenDiv6 oxDivAll'></div>
          
          <div ref={div => this.title = div} className='titleDiv'>
            <h1>Photosynthesis</h1>
          </div>
          <div ref={div => this.paragraph = div} className='paragraphDiv'>
            <h2>
              First, the flower's roots absorb the water and nutrients in the soil.
            </h2>
          </div>
          <div ref={div => this.paragraph2 = div} className='paragraph2Div'>
            <h2>
              The water mixes with sunlight and carbon dioxide to make the flower's favorite snack- sugar.
            </h2>
          </div>
        </div>
  
      </div>
    )
  }
 
}

render(<Flower />, document.getElementById('root'));

