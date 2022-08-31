import React , { useState , useEffect } from 'react' ;
import { projects } from './projects' ;
import './content.css' ;



var interv ;
const lit_slid = [
  { l : 'translateX(0em)'} ,
  { l : 'translateX(-68%)'} ,
  { l : 'translateX(-34%)'} ,
] ;

function C_ontent(){
  let which_project = 0 ;
  const [ project , set_project ] = useState(projects[which_project]) ;

  const check_key = (e) =>{
    e = e || window.event ;
    if ( e.keyCode == '37' ) {
      which_project-- ;
      if ( which_project < 0 ) {
        which_project = projects.length - 1 ;
      }
    } else if ( e.keyCode == '39' ){
      which_project++ ;
      if ( which_project >= projects.length ) {
        which_project = 0 ;
      }
    }
    set_project(projects[which_project]) ;
  }
  function to_an(){
    let to_animate = document.getElementById('to_animate') ;
    let which_img = 0 ;
    interv = setInterval(()=>{
      which_img++ ;
      if(which_img >= lit_slid.length){
        which_img = 0 ;
      }
      $(to_animate).css('transform',lit_slid[which_img].l)
    },12000)
    document.onkeydown = check_key ;
  }
  
  function from_an(){
    clearInterval(interv) ;
    document.onkeydown = null ;
  }

  useEffect(()=>{
    to_an() ;
    //
    return()=>{
      from_an()
      //
    }
  },[])
  return(
    <div id='center' className='c_ontent' >
      <div>
        <div data-inviewport='c_le_di' >
          <h1><a href={project.link} > {project.name} </a></h1>
          {project.info}
        </div>
        <div data-inviewport='c_ri_di' >
          <div>
            <div id='to_animate' >
              {project.img_1}
              {project.img_2}
              {project.img_3}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div style={{ width : project.bar_wid + '%' }} data-inviewport='bar_' ></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default C_ontent