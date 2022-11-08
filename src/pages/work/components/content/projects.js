import React from 'react' ;


import g_simu_1 from './img_/_gravity/g_simulation_1.png' ;
import g_simu_2 from './img_/_gravity/g_simulation_2.png' ;
import g_simu_3 from './img_/_gravity/g_simulation_3.png' ;
import project_22 from './img_/project22.jpg' ;
import project_23 from './img_/project23.jpg' ;
import project_21 from './img_/project21.jpg' ;
import tim_screen from './img_/_tim/tim-screen1.png' ;
import spectrum_screen_1 from './img_/_spectrum/ss-screen1.png' ;
import spectrum_screen_2 from './img_/_spectrum/ss-screen2.png' ;
import spectrum_screen_3 from './img_/_spectrum/ss-screen3.png' ;
import project_11 from './img_/project11.png' ;
import project_12 from './img_/project12.png' ;
import project_13 from './img_/project13.png' ;
import sh_wave_screen_1 from './img_/_sh-wave/sh-wave_screen_1.png';
import sh_wave_screen_2 from './img_/_sh-wave/sh-wave_screen_2.png';
import sh_wave_screen_3 from './img_/_sh-wave/sh-wave_screen_3.png';

export const projects = [
  {
    name : 'G. Simulation' ,
    info : <p> is a simple 2D<span className='for-st' > Gravity Simulator</span> . </p> ,
    link : 'https://g-simulator.netlify.app' ,
    img : [
      g_simu_2 ,
      g_simu_1 ,
      g_simu_3 ,
    ] ,
    animation : 'one_slider_' ,
    ani_dur : 'var(--speed_1)' ,
    bar_wid : '15'
  } ,
  {
    name : 'Sspectrum' ,
    info : <p> is a high resolution<span className='for-st' > audio spectrum</span> and full featured audio player, with modern styles and custom features. based from the audioMotion.js analyzer. </p> ,
    link : 'https://Sspectrum.netlify.app' ,
    img : [
      spectrum_screen_2 ,
      spectrum_screen_1 ,
      spectrum_screen_3 ,
    ] ,
    animation : 'one_slider_' ,
    ani_dur : 'var(--speed_1)' ,
    bar_wid : '30'
  } ,
  {
    name : 'Sh-wave' ,
    info : <p> a sh-wave in<span className='for-st' > SPACE </span> . </p> ,
    link : 'https://sh-wave.netlify.app' ,
    img : [
      sh_wave_screen_1 ,
      sh_wave_screen_2 ,
      sh_wave_screen_3,
    ] ,
    animation : 'one_slider_' ,
    ani_dur : 'var(--speed_1)' ,
    bar_wid : '45' ,
  } ,
  {
    name : 'Twamigo Media' ,
    info : <p> Agency that specialise in all e-marketing related services. </p> ,
    link : '#' ,
    img : [
      tim_screen ,
      tim_screen ,
      tim_screen
    ] ,
    animation : 'sec_slider_' ,
    ani_dur : 'var(--speed_2)' ,
    bar_wid : '60' ,
  } ,
  {
    name : 'Mtravelers' ,
    info : <p> Whether you are considering a trip to <span className='for-st'>morocco </span>or just interested in trying out the culture, you will find everything you need to know here. </p> ,
    link : '#' ,
    img : [
      project_21 ,
      project_22 ,
      project_23
    ] ,
    animation : 'thir_slider_' ,
    ani_dur : 'var(--speed_2)' ,
    bar_wid : '75' 
  } ,
  {
    name : 'Linear' ,
    info : <p>This site is dedicated to discussing the most<span className='for-st' > interesting</span> dark issues of our time. </p> ,
    link : '#' ,
    img : [
      project_11 ,
      project_12 ,
      project_13
    ] ,
    animation : 'four_slider_' ,
    ani_dur : 'var(--speed_1)' ,
    bar_wid : '90' ,
  }
]
