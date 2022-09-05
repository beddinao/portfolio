import React , { useEffect , memo } from 'react' ;
import './intro.css' ;
var wid , hei , svg ;

function draw_in (){
  svg = document.getElementById('_i_svg_') ;
  hei = parseFloat(getComputedStyle(svg).height) ;
  wid = parseFloat(getComputedStyle(svg).width) ;

  draw_svg()
}

function draw_svg(){
  let path_s = [
    `M ${wid/3},${hei/1.5} L 0,0 ` ,
    `M ${wid/6},${hei} L ${wid/1.5},0 ` ,
    `M ${wid/2.25},${hei/2.25} L ${wid},${hei} ` ,
    `M ${wid/1.5},${hei/1.5} ${wid},${hei/2} `
  ] ;
  for(let i = 0 ; i< path_s.length ;i++){
    let pa = document.createElementNS('http://www.w3.org/2000/svg','path') ;
    pa.setAttributeNS(null , 'd' , path_s[i]) ;
    pa.classList.add(`_c_${i}`) ;
    svg.appendChild(pa)
  }
  $('._c_0').css('stroke',"url('#lin_0')") ;
  $('._c_1').css('stroke',"url('#lin_1')")
}
function undraw_svg(){
  $('.intro svg path').remove()
}

function Intro (){
  useEffect(()=>{
    draw_in()
    return()=>{
      undraw_svg()
    }
  },[])
  return(
    <div id='center' className='intro' >
      <div>
        <div>
          <h1>intro</h1>
          <h2>to</h2>
        </div>
        <div>
          <svg id='_i_svg_' xmlns='www.w3.org/2000/svg'>
            <linearGradient id='lin_0' >
              <stop stopColor='rgba(10,10,10,0.5)' offset='10%' />
              <stop stopColor='#D4A373' offset='80%' />
            </linearGradient>
            <linearGradient id='lin_' >
              <stop stopColor='#D4A373' offset='50%' />
              <stop stopColor='rgba(10,10,10,0.5)' offset='90%' />
            </linearGradient>
            <linearGradient id='lin_1' >
              <stop stopColor='rgba(10,10,10,0.5)' offset='10%' />
              <stop stopColor='#D4A373' offset='50%' />
              <stop stopColor='rgba(10,10,10,0.5)' offset='90%' />
            </linearGradient>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default memo(Intro)
