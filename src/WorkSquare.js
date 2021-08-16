import { React, Component } from 'react';
import './WorkSquare.css';
import Tape from './Tape';


class WorkSquare extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Tape color={this.props.color} angle="work-square"/>
                <a href={this.props.link} target="_blank">
                    <div class="WorkSquare">
                        <img src={this.props.name} />
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
