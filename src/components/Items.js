import React, { Component } from 'react';

class Items extends Component {
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addGift();
    };

    render() {
        const { gifts, selectedGift, value, onChange } = this.props;

        return (
            <div className="col-lg-3 col-sm-3 col-sm-3 col-xs-3">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="new player" placeholder="Add new gift" value={ value } onChange={ onChange }/>
                </form>
            <div className=" dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                    Items<span className="caret"></span>
                </button> 
                <ul className="dropdown-menu">
                    { gifts }
                </ul>
            </div>
            Gift: {selectedGift}
            </div>
        );
    }
}

export default Items;