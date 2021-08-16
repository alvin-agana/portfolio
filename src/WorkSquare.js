import { React, Component } from 'react';
import './WorkSquare.css';
import Tape from './Tape';
import discordbot from './discordbot.png';
import pantry from './pantry.png';
import dailygoal from './dailygoalapp.png';
import libretexts from './libretexts.jpeg';
import memory from './memorygame.png';
import hackdavis from './hackathon.png';


class WorkSquare extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var src;
        if (this.props.name == 'discordbot') {
            src=discordbot
        } else if (this.props.name == 'pantry') {
            src=pantry
        } else if (this.props.name == 'dailygoal') {
            src=dailygoal
        } else if (this.props.name == 'libretexts') {
            src=libretexts
        } else if (this.props.name == 'memory') {
            src=memory
        } else {
            src=hackdavis
        }
        return (
            <div>
                <Tape color={this.props.color} angle="work-square"/>
                <a href={this.props.link} target="_blank">
                    <div class="WorkSquare">
                        <img src={src} />
                        <div class="overlay">
                            <div class="text">
                                <span>{this.props.title}</span>
                                <div>
                                    {this.props.desc}
                                    <br/><br/>
                                    {this.props.stack}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
          )
    }
}

export default WorkSquare;
