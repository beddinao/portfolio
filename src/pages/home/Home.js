import React , { useEffect } from 'react' ;
import './Home.css' ;
import Intro from './components/intro/intro' ;
import Canvas from './components/canvas/canvas' ;
import About from './components/about/about' ;
import Work from './components/work/work' ;
import Footer from '../../components/footer/footer' ;
import { observe } from '../../lib/observe/observe' ;
import Load from '../../components/load/load' ;

const arr = [ '/home/components/canvas/img/bigwave_japan-new1.png' , '/home/components/canvas/img/augustine-wong-t0byurbdk_m-unsplash_2.jpg' , '/home/components/work/img/pawel-czerwinski-4qhg5ewdrau-unsplash.jpg' ]


function Home(){
  useEffect(observe,[])
  return(
    <Load imgs_list={arr}  >
        <main>
          <Intro />
          <Canvas />
          <Work />
          <About />
          <Footer />
        </main>
    </Load>
  )
}

export default Home