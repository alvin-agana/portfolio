import './Connection.css';
import React from 'react';

function Connection(props) {
  let name = props.name;
  let href = "";
  if (name === 'Resume') {
      href = "../Resume.pdf";
  } else if (name === 'LinkedIn') {
      href = "https://www.linkedin.com/in/alvin-agana/";
  } else {
    href = "mailto:alvin.agana@gmail.com";
  }
  return (
    <div class="connection">
      <div class="connection-underline"></div>
      <div class="connection-name">
        <a href={href} target="_blank">
          {name}
        </a>
      </div>
    </div>
  );
}

export default Connection;
