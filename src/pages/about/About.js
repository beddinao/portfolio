import React, {useEffect} from 'react' ;
import './About.css' ;
import Footer from '../../components/footer/footer' ;
import { observe } from '../../lib/observe/observe' ;
import { Link } from 'react-router-dom' ;
import Nav from '../../components/nav/nav' ;
import Slides from '../../components/slides/slides' ;
import Canvas_ from './components/canvas/f-pa' ;
import Content from './components/content/content' ;
import Skills from './components/skills/skills' ;
import { Wrap } from './components/title_wrapper/wrap' ;

var con_ , wid , hei;

function draw_svg(){
  con_ = document.querySelectorAll('#_svg_') ;

  wid = parseFloat(getComputedStyle(con_[0]).width) ;
  hei = parseFloat(getComputedStyle(con_[0]).height) ;


  draw_in()
}

function draw_in(){
  let cou = 0 ;
  const paths = [
    { 
      p : `M 0,0 L ${wid},0 L 0,${hei} L 0,0` 
    } ,
    { 
      p : `M ${wid},0 L ${wid},${hei} L 0,${hei} L ${wid},0`
    }
  ] ;
  con_.forEach(el => {
    let path_html_elem = document.createElementNS('http://www.w3.org/2000/svg','path') ;
    path_html_elem.setAttributeNS(null , 'd' , paths[cou].p ) ;
    el.appendChild(path_html_elem) ;
    cou++
  })
}


function About(){
  useEffect(()=>{
    window.scrollTo(0,0) ;
    draw_svg()
    observe() ;
  },[]) ;
  return(
    <main className='_about' >
      <Nav color='var(--background)' >
        <Link to='/work'>Work</Link>
      </Nav>
      <Slides h='3' />
      <div id='center' >
        <Canvas_ />
        <div className="svg_ con_f">
          <svg id='_svg_' xmlns='http://wwww.w3.org/2000/svg' ></svg>
        </div>
      </div>
      <Content />
      <Wrap />
      <div id='center' >
        <Skills />
        <div className="svg_ con_s">
          <svg id='_svg_' xmlns='http://wwww.w3.org/2000/svg' ></svg>
        </div>
      </div>
      <Footer />
    </main>
  )
}


export default About 