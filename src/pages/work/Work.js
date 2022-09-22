import React , { useEffect } from 'react' ;
import './Work.css' ;
import Footer from '../../components/footer/footer';
import Slides from '../../components/slides/slides';
import { observe } from '../../lib/observe/observe' ;
import set_scroll_snapping , { dis_fun } from '../../lib/scroll-snap' ;
import { Link } from 'react-router-dom' ;
import C_anvas from './components/canvas/c_anvas' ;
import C_ontent from './components/content/content' ;


function Work(){
  $(document).ready(()=>{window.scrollTo( 0 , 0 ) }) ;
  useEffect(()=>{
    observe() ;
    set_scroll_snapping( document.body.parentNode , document.querySelectorAll('#center') )
    return () => {
      dis_fun( document.body.parentNode )
    }
  },[])
  return (
      <main>
        <C_anvas />
        <Slides h='2' c='var(--text)' c_1='var(--main-color)' >
          <Link to='/about'>About Me.</Link>
        </Slides>
        <C_ontent />
        <Footer />
      </main>
  )
}


export default Work 
