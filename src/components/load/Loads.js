import React , {useState , useEffect , memo} from 'react' ;
import './load.css' ;

let count = 0 ;
var images = new Array('../../pages/home/components/work/img/pawel-czerwinski-4qhg5ewdrau-unsplash.jpg','../../pages/home/components/canvas/img/bigwave_japan-new1.png','../../pages/home/components/canvas/img/augustine-wong-t0byurbdk_m-unsplash_2.jpg') ;

function Loads(props){
  const [ is_visible , set_is_visible ] = useState(false) ;

  function is_load(){
    count++ ;
    console.log('one image is done')
    if(count == images.length){
      set_is_visible(true) 
    }
  }

  function img_load () {
    for (let i = 0 ; i < images.length ; i++){
      let img = new Image() ;
      img.addEventListener('load', is_load ,true ) ;
      img.src = images[i]
    }
  }
  useEffect(()=>{
    window.addEventListener('DOMContentLoaded' , img_load , true )
  },[])
  return is_visible ? props.children : (
    <div id='center' >
      <h1>Loading Images ...</h1>
    </div>
  )
}


export default memo(Loads)