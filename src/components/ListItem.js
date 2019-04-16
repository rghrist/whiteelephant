import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const { myKey, value } = this.props;
        return (
            <li key={ myKey }>{ value }</li>
        );
    }
}

export default ListItem;