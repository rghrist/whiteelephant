import React, { Component } from 'react';

class DropdownItem extends Component {
    render() {
        const { myKey, value, selectItem } = this.props;
        return (
            <div>
                <button className="btn btn-warning" style={{color: 'black'}} key={ myKey } onClick={ () => selectItem( myKey ) }>{ value }</button>
            </div>
        );
    }
}

export default DropdownItem;