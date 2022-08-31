import React , { memo } from 'react' ;
import './content.css' ;


function Content(){
  return (
    <div id='center' className='_cont'>
      <div>
        <div  data-inviewport="_cont">
          <p>Recordings launch in a new tab. All data is stored locally, but you can choose to upload it for sharing.</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Content)