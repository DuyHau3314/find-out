import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        term: ''
    }

    onInputChange =(e) => {
        this.setState({ term: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();  
        this.setState({ term: ''});
        const textInput = document.getElementById("input-key");
        textInput.blur();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment massive">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Từ khoá: (Gõ tiếng anh nhé!!!)</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Từ khoá" id="input-key" />
                    </div>
                </form>
            </div>
        )
    }
}
