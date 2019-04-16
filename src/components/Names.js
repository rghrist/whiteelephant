import React, { Component } from 'react';

class Names extends Component {
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer();
    };

    render() {
        const { names, selectedName, value, onChange } = this.props;
        return (
            <div className="col-lg-3 col-sm-3 col-sm-3 col-xs-3">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="new player" placeholder="Add new player" value={ value } onChange={ onChange }/>
                </form>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Name<span className="caret"></span>
                    </button> 
                    <ul className="dropdown-menu">
                        { names }
                    </ul>
                </div>
            Name: {selectedName}
            </div>
        );
    }
}

export default Names;