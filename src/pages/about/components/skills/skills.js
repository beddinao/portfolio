import React , { memo , useEffect } from 'react' ;
import { Link } from 'react-router-dom' ;
import './skills.css' ;

let per = 0 ;
let _speed = .1 ;

function Skill(props){
  let ori_per = parseFloat(props.per) ;
  const sty = (p) => {
    $(`.b_${props.p}`).css('width' , p);
    $(`.p_${props.p}`).html(p)
  }
  useEffect(()=>{
    function per_coun(){
      if( per < ori_per ){
        per++
      }else{
        per = ori_per ;
        clearInterval(interv) ;
      }
      sty( per + '%' )
    }
    const interv = setInterval(per_coun,150)
  },[])
  _speed = _speed + 0.1 ;
  return(
    <div data-inviewport='_skill' className="_skill"  style={{ transitionDuration : _speed + 's' }} >
      <div>
        <img src={props.src} />
      </div>
      <div>
        <p>{props.p}</p>
        <div>
          <div className={`b_${props.p}`} >
            <p className={`p_${props.p}`} ></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Skills(){
  return(
    <div className='_skills'>
      <div>
        <Skill p='HTML_CSS' per='90' />
        <Skill p='Javascript' per='60' />
        <Skill p='NodeJs' per='60' />
        <Skill p='MongoDB' per='70' />
        <Skill p='React' per='90' />
        <Skill p='Angular' per='40' />
        <Skill p='Sass' per='60' />
        <Skill p='Pug' per='60' />
      </div>
      <div>
        
          <h1><Link to='/' >Home</Link></h1>
        
      </div>
    </div>
  )
}

export default memo(Skills)