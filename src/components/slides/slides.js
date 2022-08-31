import React , { memo , useEffect } from 'react' ;
import './slides.css' ;

var hr_s ;
const hr_sty = (t) => {
  $(`._slides hr:not(._slides hr:nth-child(${t + 1}))`).css('width','3em')
  $(hr_s[t]).css('width','5em')
}

function Slides(props){
  function which_hr(e){
    let y_1 = 2 / ( window.innerHeight * props.h )
    hr_sty(Math.floor((e.currentTarget.pageYOffset * y_1) * 2 ))
  }
  useEffect(()=>{
    hr_s = document.querySelectorAll('._slides hr') ;
    window.onscroll = which_hr ;
    return () => {
      window.onscroll = null
    }
  },[])
  return(
    <div className='_slides' style={{ height : (parseFloat(props.h) * 100) + 'vh' }}  >
      <div >
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  )
}


export default memo(Slides) 