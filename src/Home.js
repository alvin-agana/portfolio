import React from 'react';
import NavBar from './NavBar';
import SkillContainer from './SkillContainer';
import Connection from './Connection';
import Footer from './Footer';
import Tape from './Tape';
import me from './WebsitePic.png';
import './Home.css';

function Home() {
  let num = Math.floor(Math.random() * 10);
  let text = [
    "Hey...here's a secret. This message changes after every refresh!", 
    "Here's a pun for you: how do trees get online? They just log in.", 
    "Just in case you're wondering: yes, I like pineapples on pizza.",
    "My favorite fruit? Has to be avocados. Bananas are close.",
    "Hard-working. Weird. A bit reserved. Very friendly. And really cool.",
    "01101000 01100101 01101100 01101100 01101111!",
    "So..how many times have you refreshed now?",
    "Want a high five? Send me a funny meme!",
    "It is berry nice to meet you!",
    "!sdrawkcab tub ,segassem yllis ym fo eno rehtona si sihT"
  ];
  return (
    <div class="page">
      <div class="page-container">
        <div>
          <NavBar />
          <div class="page-square">
            <h1>Hi! I'm Alvin.</h1>
            <p>{text[num]}</p>
            
            <div id="home-main">
              <div id="me-image">
                <img src={me} />
                <Tape color="blue" angle="bottom-left" />
                <Tape color="yellow" angle="bottom-right" />
                <Tape color="purple" angle="top-left" />
                <Tape color="brown" angle="top-right" />
              </div>
              <div id="home-main-right">
                <div id="home-main-text">
                  I’m a student and developer at University of California, Davis majoring in Computer Science. 
                  I love piano  🎹, sudoku  🔢, tonkotsu ramen  🍜, and the NBA  🏀.  
                </div>
                <div id="home-main-skills">
                  <SkillContainer row={1} />
                  <SkillContainer row={2} />
                  <SkillContainer row={3} />
                  <SkillContainer row={4} />
                  <SkillContainer row={5} />
                  <div id="home-main-resume-container">
                    <Connection name="Resume" />
                    <Connection name="LinkedIn" />
                    <Connection name="Design Portfolio" />
                    <Connection name="Email me" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Home;
