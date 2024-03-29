import React, { useEffect, useRef, memo } from 'react';
import './Welcom.css';
import { isVisible } from '../../home';
import Home_sides from '../sides/Sides' ;
import Solar_h1 from '../so_h1/So_h1' ;
import w_1 from './img/wap_1.jpg';
import w_2 from './img/wp_2.jpeg';

var a_nom, b_nom, a_width ,whi;
const tar = {
  get_1: '.side:nth-child(1) > div',
  get_2: '.side:nth-child(2) > div',
  get_3 : '.side a' ,
};
const sty = {
  le_1: 'background-position',
  le_2: 'color',
  val_1: 'var(--background)',
  val_2 : 'var(main-color)'
};


function Home_welcome(props) {
  const for_vi = useRef();
  const for_vis = useRef();
  function get_mouse_pos(num_1, num_2) {
    a_nom = 100 - (num_2 - window.innerWidth / 10) / (num_1 / 100);
    b_nom = (a_nom * 2 - 50) * 3;
  }
  const to_sty = (nom_1, nom_2) => {
    $(tar.get_1).css( sty.le_1 , `center ${ nom_2 }%` );
    $(tar.get_2).css( sty.le_1 , `center ${ nom_1 }%` );
  };
  const handle_hover = (e) => {
    $(tar.get_3).css(sty.le_2, sty.val_1);
  };
  var handle_move = (e) => {
    a_width = parseFloat(getComputedStyle(e.currentTarget.parentNode).width);
    get_mouse_pos(a_width, e.pageX);
    $(e.currentTarget).css(sty.le_1, `${ a_nom }% center`);
    to_sty(b_nom, 300 - b_nom);
  };
  const handle_out = () => {
    to_sty(-200, -200)
  };
  const handle_click = (e) => {    let x_bg_pos = parseFloat(      getComputedStyle(e.currentTarget).backgroundPositionX    );    let which = '';    if (x_bg_pos >= 50) {      which = 'left';    } else {      which = 'right';    }    document.getElementById(`${which}-link`).click();  };  function Is_s_v(props) {    if (props.el || props.ele || props.elem) {      props.el ? whi = 0 : props.ele ? whi = 1 : whi = 2 ;      return <Home_sides whi={whi} />;    } else {      return <div />;    }  }  return (    <div className="welcom">      {        <Is_s_v          el={isVisible(for_vi)}          ele={isVisible(for_vis)}          elem={isVisible(props.aRef)}        />      }      <div id="center-S">        <div className="txt-container">          <div>            <h1 className='arc_h1'>              TO THE              <br />              <span className="for-st">SPACE</span>              <br />              AND              <br />
              BEYOND
            </h1>
          </div>
          <div>
            <p>
            The Boundless <span className="for-st">three-dimensional</span> extent in which objects and events have relative position and direction
            </p>
          </div>
        </div>
      </div>
      <div id="center-S">
        <div className="txt-container">
          <div>
            <h1 ref={for_vi} className='arc_h1'>
              our
              <br />
              <Solar_h1
                move={handle_move}
                enter={handle_hover}
                leave={handle_out}
                click={handle_click}
                class="solar"
              >
                Solar system
              </Solar_h1>
            </h1>
          </div>
          <div>
            <p>
            the Gravitationally Bound <span className='for-st'>System</span> of the Sun and the Objects that Orbit it
            </p>
          </div>
        </div>
      </div>
      <div id="center-S">
        <div className="txt-container">
          <div>
            <h1 ref={for_vis} className='arc_h1'>
              and
              <br />
              <Solar_h1
                move={handle_move}
                enter={handle_hover}
                leave={handle_out}
                click={handle_click}
                class="galaxy"
              >
                Galaxy
              </Solar_h1>
            </h1>
          </div>
          <div>
            <p>
            The gravitationally <span className='for-st'>bound system</span> of stars, stellar remnants, interstellar gas, dust, and dark matter
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="bg-wrapper">
          <img src={w_1}/>
        </div>
        <div className="bg-wrapper">
          <img src={w_2}/>
        </div>
      </div>
    </div>
  );
}

export default memo(Home_welcome);
