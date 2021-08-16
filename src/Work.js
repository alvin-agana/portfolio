import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WorkSquare from './WorkSquare';
import Tape from './Tape';
import './Home.css';
import './Work.css';

function Work() {
  return (
    <div>
      <div class="page">
        <div class="page-container">
          <NavBar />
          <div class="page-square">
            <h1>Work Experience and Projects</h1>
            <p>Hover over and click the squares to see some of the cool stuff I've been a part of.</p>
              <div class="work-square-container">
                <WorkSquare name="./DiscordBot.png" color="blue" title="Discord Bot" 
                            desc="a weather-telling, dictionary defining, pokemon braniac shiba inu discord bot"
                            stack="node.js, discord.js, api"
                            link="https://github.com/alvin-agana/PersonalDiscordBot"/>
                <WorkSquare name="./Pantry.png" color="purple" title="The Pantry"
                            desc="developer at ASUCD Pantry since March 2021 working on the online ordering system"
                            stack="javascript, jquery, html, css, apex, visualforce, sql"
                            link="https://thepantry.secure.force.com/order"/>
                <WorkSquare name="./dailygoalapp.png" color="brown" title="Daily Goal Tracker"
                            desc="an online web app that i briefly used to keep track of my daily habits"
                            stack="mysql, express, node.js, html, css, javascript"
                            link="https://github.com/alvin-agana/2021-daily-goal-app"/>
                <WorkSquare name="./Libretexts.jpeg" color="yellow" title="LibreTexts"
                            desc="developer since May 2021 working on accessibility automation for online textbooks" 
                            stack="javascript, ckeditor4"
                            link="https://chem.libretexts.org/"/>
                <WorkSquare name="./MemoryGame.png" color="brown" title="Memory Game"
                            desc="a pusheen-themed memory game, similar to the card game 'Concentration'"
                            stack="html, css, javascript"
                            link="https://github.com/alvin-agana/MemoryGame"/>
                <WorkSquare name="./hackathon.png" color="purple" title="HackDavis 2021"
                            desc="hackathon project working on backend for the first time for a healthy food recipe app"
                            stack="python, flask, html, css, javascript"
                            link="https://devpost.com/software/healthy-food-eoqnch"/>
              </div>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Work;
