import React , { useEffect } from 'react' ;
import './Work.css' ;
import Footer from '../../components/footer/footer';
import Slides from '../../components/slides/slides';
import { observe } from '../../lib/observe/observe' ;
import { Link } from 'react-router-dom' ;
import Nav from '../../components/nav/nav' ;
import C_anvas from './components/canvas/c_anvas' ;
import C_ontent from './components/content/content' ;
import Load from '../../components/load/load' ;

function Work(){
  useEffect(()=>{
    window.scrollTo(0,0) ;
    observe() ;
  },[])
  return (
    <Load>
      <main>
        <Nav color='var(--text)' >
          <Link to='/about'>About</Link>
        </Nav>
        <C_anvas />
        <C_ontent />
        <Slides h='2' />
        <Footer />
      </main>
    </Load>
  )
}


export default Work 