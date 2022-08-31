import React , {memo} from 'react' ;
import './footer.css' ;
import Up_btn from '../up_btn/Up_btn' ;


function Footer(){
  return(
    <div className='_footer' >
      <div >
        <Up_btn />
      </div>
      <p><a href='mailto:eddinaouibilal@gmail.com' >eddinaouibilal@gmail.com</a></p>
    </div>
  )
}


export default memo(Footer)