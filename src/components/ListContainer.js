import React, { Component } from 'react';

class ListContainer extends Component {
    render() {
        return (
            <div>
                { this.props.items }
            </div>
        );
    }
}

export default ListContainer;