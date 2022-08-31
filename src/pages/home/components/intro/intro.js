import React , { memo } from 'react' ;
import './intro.css' ;

function Intro (){
  return(
    <div id='center' className='intro' >
      <div>
        <div>
          <h1>intro</h1>
          <h2>to the bottom</h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default memo(Intro)