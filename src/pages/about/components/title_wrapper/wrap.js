import React from 'react' ;
import './wrap.css' ;

function Title(props){
  return(
    <div data-inviewport='title' >
      <hr />
      <h3>{props.t}</h3>
    </div>
  )
}

export function Wrap(){
  return(
    <div className='_wrap' >
      <Title t='Who I Am' />
      <Title t='Skill Set' />
    </div>
  )
}