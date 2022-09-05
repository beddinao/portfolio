import React , { useState , useEffect } from 'react' ;
import { projects } from './projects' ;
import './content.css' ;

var temp_div ;

function draw_img(){
  for(let i = 0 ; i < projects.length ; i++){
    let el_e = document.createElement('div') ;
    el_e.classList.add('temp_div')
    for(let j = 0 ; j < projects[i].img.length ; j++ ){
      let i_mg = new Image() ;
      i_mg.src = projects[i].img[j] ;
      el_e.appendChild(i_mg)
    }
    temp_div.appendChild(el_e)
  }
}

function undraw_img(){
  $('.temp_img').remove()
}

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
    } 
    else if ( e.keyCode == '39' ){
      which_project++ ;
      if ( which_project >= projects.length ) {
        which_project = 0 ;
      }
    }
    $(temp_div).css('transform',`translateY(-${ which_project * 40  }vh)`)
    set_project(projects[which_project]) ;
  }


  useEffect(()=>{
    temp_div = document.getElementById('temp_div') ;
    document.onkeydown = check_key ;
    draw_img() ;
    return()=>{
      document.onkeydown = null ;
      undraw_img()
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
            <div id='temp_div' >
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
