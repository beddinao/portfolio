import React , { memo } from 'react' ;
import './content.css' ;


function Content(){
  return (
    <div id='center' className='_cont'>
      <div>
        <div  data-inviewport="_cont">
          <p>As a Web Designer, I translate high-level requirements into interactions flows(UX/UI) and design attractive, clean, and efficient websites.</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Content)