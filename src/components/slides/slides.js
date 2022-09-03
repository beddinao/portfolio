import React , { memo , useEffect } from 'react' ;
import './slides.css' ;
import Nav from '../nav/nav' ;

var hr_s , hr_s_c , a_s_c ;
const hr_sty = (t) => {
  $(`._slides hr:not(._slides hr:nth-child(${t + 1}))`).css('width','3em')
  $(hr_s[t]).css('width','5em')
  $(`._slides hr`).css('background',hr_s_c[t])
  $('#_nav > h1  a').css('color', a_s_c[t])
}

function Slides(props){
  hr_s_c = [
    'var(--main-color)' ,
    props.c ,
    props.c
  ]
  a_s_c = [
    props.c_1 ,
    props.c ,
    props.c
  ]
  function which_hr(e){
    let y_1 = 2 / ( window.innerHeight * props.h ) ;
    let y = Math.floor((e.currentTarget.pageYOffset * y_1) * 2 ) ;
    hr_sty(y)
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
        <hr  />
        <hr  />
        <hr  />
      </div>
      <Nav>
        {props.children}
      </Nav>
    </div>
  )
}


export default memo(Slides) 