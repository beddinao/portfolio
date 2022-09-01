import React from 'react' ;
import spectrum_screen_1 from './img_/_spectrum/ss-screen1.png' ;
import spectrum_screen_2 from './img_/_spectrum/ss-screen2.png' ;
import spectrum_screen_3 from './img_/_spectrum/ss-screen3.png' ;
//import sh_wave_screen_1 from './img_/_sh-wave/sh-wave1.jpg' ;
//import sh_wave_screen_2 from './img_/_sh-wave/sh-wave2.jpg' ;
//import sh_wave_screen_3 from './img_/_sh-wave/sh-wave3.jpg' ;
import tim_screen from './img_/_tim/tim-screen1.png' ;
import project_11 from './img_/project11.png' ;
import project_12 from './img_/project12.png' ;
import project_13 from './img_/project13.png' ;
import project_21 from './img_/project21.jpg' ;
import project_22 from './img_/project22.jpg' ;
import project_23 from './img_/project23.jpg' ;




export const projects = [
  {
    id : 1 ,
    name : 'Sspectrum' ,
    info : <p>is a high resolution<span className='for-st' > audio spectrum</span> and full featured audio player, with modern styles and custom features. based from the audioMotion.js analyzer.</p> ,
    link : 'https://Sspectrum.netlify.app' ,
    img_1 : <img src={spectrum_screen_1} /> ,
    img_2 : <img src={spectrum_screen_2} /> ,
    img_3 : <img src={spectrum_screen_3} /> ,
    bar_wid : '20'
  } ,
  {
    id : 2 ,
    name : 'sh-wave' ,
    info : <p>a sh-wave in<span className='for-st' > SPACE</span> .</p> ,
    link : 'https://sh-wave.netlify.app' ,
    img_1 : <img src='{sh_wave_screen_1}' /> ,
    img_2 : <img src='{sh_wave_screen_2}' /> ,
    img_3 : <img src='{sh_wave_screen_3}' /> ,
    bar_wid : '40'
  } ,
  {
    id : 3 ,
    name : 'Twamigo Media' ,
    info : <p>Agency that specialise in all e-marketing related services.</p> ,
    link : '#' ,
    img_1 : <img src={tim_screen} id='slid_i' /> ,
    img_2 : <img src={tim_screen} id='slid_i' /> ,
    img_3 : <img src={tim_screen} id='slid_i' /> ,
    bar_wid : '60'
  } ,
  {
    id : 4 ,
    name : 'Mtravelers' ,
    info : <p>Whether you are considering a trip to <span className='for-st'>morocco </span>or just interested in trying out the culture, you will find everything you need to know here.</p> ,
    link : '#' ,
    img_1 : <img src={project_21} /> ,
    img_2 : <img src={project_22} /> ,
    img_3 : <img src={project_23} /> ,
    bar_wid : '80'
  } ,
  {
    id :5 ,
    name : 'Linear' ,
    info : <p>This site is dedicated to discussing the most<span className='for-st' > interesting</span> dark issues of our time.</p> ,
    link : '#' ,
    img_1 : <img src={project_11} /> ,
    img_2 : <img src={project_12} /> ,
    img_3 : <img src={project_13} /> ,
    bar_wid : '100'
  } ,
] ;
