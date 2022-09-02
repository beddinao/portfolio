import React , { memo } from 'react' ;
import './f-pa.css' ;

function Canvas_(props){
  return(
    <div className='_canvas' >
      <div>
        <div>
          <h1>deName fafa Makd</h1>
          <h3>Web developer</h3>
        </div>
      </div>
      <div>
        <div>
          <h1>Design</h1>
        </div>
        <div>
          <h1>Design</h1>
        </div>
      </div>
    </div>
  )
}

export default memo(Canvas_)