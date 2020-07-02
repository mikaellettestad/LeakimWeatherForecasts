import React, { Component } from 'react';
import '../App.css';

export default class SearchBar extends Component {

    constructor(props)
    {
        super(props);

        this.state = { message: "Sökningen gav 0 träffar. Försök igen!" }
    }

    displayMessage() {
        if(this.props.error)
        {
            return this.state.message;
        }
    }

    render()
    {
        return(
            <React.Fragment>

            <div className="searchBar">

            <h1 className="logo">Weather Forecast App</h1>
            
            <button onClick={() => { this.props.search(this.text.value) }}>Search</button>
            
            <input type="text" placeholder="City" ref={text => this.text = text}/>
            
            <p class="error">{this.displayMessage()}</p>
            
            </div>
            
            </React.Fragment>
        );
    }
}