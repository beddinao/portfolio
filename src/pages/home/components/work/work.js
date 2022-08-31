import React , {memo} from 'react' ;
import './work.css' ;
import { Link } from 'react-router-dom' ;
import Button from '../../../../components/button/button' ;

function Work(){
  return(
    <div id='center' className='work_' >
      <div>
        <div data-inviewport='w_txt_con' >
          <h1 className='arc_h1'>Work</h1>
          <Button>
            <Link to='/work'>Show More</Link>
          </Button>
        </div>
        <div data-inviewport='w_sh_con' ></div>
      </div>
      <div data-inviewport='w_img' ></div>
    </div>
  )
}

export default memo(Work)