import React , { memo , useEffect } from 'react' ;
import './nav.css' ;

function Nav(props){
  useEffect(()=>{
    $('#_nav > h1  a').css('color', props.color)
  })
  return(
    <div id="_nav" >
      <h1>{props.children}</h1>
    </div>
  )
}


export default memo(Nav)