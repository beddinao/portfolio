import React , { useState , useEffect } from 'react' ;
import { projects } from './projects' ;
import Loading  from '../../../../components/load/Loads' ;
import './content.css' ;


function I_slid_(props){
  return(
    <div>
      <div>
        {props.i_1}
        {props.i_2}
        {props.i_3}
      </div>
    </div>
  )
}


function C_ontent(){
  
  let which_project = 0 ;

  const [ project , set_project ] = useState(projects[which_project]) ;
  const [ is_loading , set_is_loading ] = useState(false) ;
  
  const check_key = (e) =>{
    set_is_loading(true) ;
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
    setTimeout(()=>{
      set_is_loading(false)
    },4000)
    set_project(projects[which_project]) ;
    
  }


  useEffect(()=>{
    document.onkeydown = check_key ;
    //
    return()=>{
      document.onkeydown = null ;
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
          {is_loading ? <Loading /> : <I_slid_ i_1={project.img_1} i_2={project.img_2} i_3={project.img_3}  />}
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
