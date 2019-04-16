import React, { Component } from 'react';
import ListContainer from './ListContainer';

class RoundHistory extends Component {
    render() {
        return (
            <div>
                <h4>Round History</h4>
                <ListContainer items={ this.props.formattedHistory } />
            </div>
        );
    }
}

export default RoundHistory;