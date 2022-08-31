import React , { useEffect } from 'react' ;
import './Home.css' ;
import Intro from './components/intro/intro' ;
import Canvas from './components/canvas/canvas' ;
import About from './components/about/about' ;
import Work from './components/work/work' ;
import Footer from '../../components/footer/footer' ;
import { observe } from '../../lib/observe/observe' ;

function Home(){
  useEffect(observe,[])
  return(
    <main>
      <Intro />
      <Canvas />
      <Work />
      <About />
      <Footer />
    </main>
  )
}

export default Home