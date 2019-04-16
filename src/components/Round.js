import React, { Component } from 'react';
import ListContainer from './ListContainer';

class Round extends Component {
    render() {
        return (
            <div>
                <h3> Round { this.props.round }</h3>
                    <ListContainer items={ this.props.actions } />
                    <br></br>
                    <button className="btn btn-primary" onClick={this.props.updateRound}>Update Round</button>
            </div>
        );
    }
}

export default Round;