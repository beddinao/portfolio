import React , { useEffect } from 'react' ;
import './Work.css' ;
import Footer from '../../components/footer/footer';
import Slides from '../../components/slides/slides';
import { observe } from '../../lib/observe/observe' ;
import { Link } from 'react-router-dom' ;
import C_anvas from './components/canvas/c_anvas' ;
import C_ontent from './components/content/content' ;


function Work(){
  $(document).ready(()=>{window.scrollTo( 0 , 0 ) }) ;
  useEffect(()=>{
    observe() ;
  },[])
  return (

      <main>
        <C_anvas />
        <Slides h='2' c='var(--text)' c_1='var(--main-color)' >
          <Link to='/about'>About</Link>
        </Slides>
        <C_ontent />
        <Footer />
      </main>

  )
}


export default Work 