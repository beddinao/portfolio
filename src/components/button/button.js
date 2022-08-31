import React , {memo} from 'react' ;
import './button.css' ;

function Button(props){
  return (<button id='_btn' >
    {props.children}
  </button>)
}

export default memo(Button)