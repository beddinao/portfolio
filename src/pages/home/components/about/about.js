import React ,{memo} from 'react' ;
import './about.css' ;
import { Link } from 'react-router-dom' ;
import Button from '../../../../components/button/button' ;

function About(){
  return(
    <div id='center' className='about_' >
      <div>
        <div data-inviewport="a_txt_1" >
          <h1 className='arc_h1' >About Me</h1>
          <Button>
            <Link to='/about'>Show More</Link>
          </Button>
        </div>
        <h1 className='arc_h1'>Design</h1>
      </div>
      <div data-inviewport="a_des" ></div>
    </div>
  )
}


export default memo(About)