import React , {useState , useEffect , memo} from 'react' ;
import './load.css' ;
import ico_1 from './ellipse.png' ;
import ico_2 from './vector.png' ;

function Loads(props){
  const [ is_visible , set_is_visible ] = useState(false) ;

  useEffect(()=>{
    setTimeout(()=>{
      set_is_visible(true)
    },3000)
    
  },[])
  return is_visible ? props.children : (
    <div id='center' className='_load' >
      <img src={ico_1} />
      <img src={ico_2} />
    </div>
  )
}


export default memo(Loads)
