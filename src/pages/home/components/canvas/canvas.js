import React ,{memo} from 'react' ;
import './canvas.css' ;

function Canvas(){
  return(
    <div id='center' className='canvas'>
      <div data-inviewport='canvas_con' >
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}


export default memo(Canvas)