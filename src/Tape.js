import { React, Component } from 'react';
import './Tape.css';


class Tape extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class={`tape ${this.props.color} ${this.props.angle}`}></div>
          )
    }
}

export default Tape;
