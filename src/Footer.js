import React from 'react';
import ColorSquare from './ColorSquare';
import './Footer.css';

function Footer() {
  return (
    <div id="footer">
        <div id="color-container">
            <ColorSquare bgColor="blue"/>
            <ColorSquare bgColor="purple"/>
            <ColorSquare bgColor="yellow"/>
            <ColorSquare bgColor="brown"/>
        </div>
        <div id="icon-container">
            <a href="https://instagram.com/heeeyalvin" target="_blank"><i class="fab fa-instagram icon"></i></a>
            <a href="https://github.com/alvin-agana" target="_blank"><i class="fab fa-github icon"></i></a>
            <a href="https://facebook.com/agana.alvin" target="_blank"><i class="fab fa-facebook icon"></i></a>
            <a href="https://linkedin.com/in/alvin-agana" target="_blank"><i class="fab fa-linkedin icon"></i></a>
        </div>
        <span>Alvin Agana / 2021</span>
  </div>
  )
}

export default Footer;
