import React , {useState , useEffect , memo} from 'react' ;
import './load.css' ;


function Loads(props){
  const [ is_visible , set_is_visible ] = useState(false) ;
  
  useEffect(()=>{
      setTimeout(()=>{
        set_is_visible(true)
      },4000)
  },[])

  return is_visible ? props.children : (
    <div id='center' >
      <h1>Loading...</h1>
    </div>
  )
}


export default memo(Loads)