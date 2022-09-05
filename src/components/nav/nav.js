import React , { memo  } from 'react' ;
import './nav.css' ;

function Nav(props){
  return(
    <div id="_nav" >
      <h1>{props.children}.</h1>
    </div>
  )
}


export default memo(Nav)