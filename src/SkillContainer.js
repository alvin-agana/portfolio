import React from 'react';
import Skill from './Skill';
import './SkillContainer.css';


function SkillContainer(props) {
  let skills = [];
  if (props.row == 1) {
      skills = ["html", "css", "javascript"];
  } else if (props.row == 2) {
      skills = ["react", "python", "c++"];
  } else if (props.row == 3) {
      skills = ["mysql", "node.js", "apex"];
  } else if (props.row == 4) {
      skills = ["express", "flask", "git"];
  } else {
      skills = ["figma", "sql", "visualforce"];
  }
  return (
    <div class="skill-container">
        <Skill name={skills[0]} />
        •
        <Skill name={skills[1]} />
        •
        <Skill name={skills[2]} />
  </div>
  )
}

export default SkillContainer;
