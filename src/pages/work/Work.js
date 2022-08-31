import React , { useEffect } from 'react' ;
import './Work.css' ;
import Footer from '../../components/footer/footer';
import Slides from '../../components/slides/slides';
import { observe } from '../../lib/observe/observe' ;
import { Link } from 'react-router-dom' ;
import Nav from '../../components/nav/nav' ;
import C_anvas from './components/canvas/c_anvas' ;
import C_ontent from './components/content/content' ;

function Work(){
  useEffect(()=>{
    window.scrollTo(0,0) ;
    observe() ;
  },[])
  return (
    <main>
      <Nav color='var(--text)' >
        <Link to='/about'>About</Link>
      </Nav>
      <C_anvas />
      <C_ontent />
      <Slides h='2' />
      <Footer />
    </main>
  )
}


export default Work 