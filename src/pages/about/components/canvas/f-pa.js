import React , { memo } from 'react' ;
import './f-pa.css' ;

function Canvas_(){
  return(
    <div className='_canvas' >
      <div>
        <div>
          <h1>deName andsome</h1>
          <h3>Web developer</h3>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default memo(Canvas_)