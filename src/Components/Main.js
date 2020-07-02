import React, { Component } from 'react';
import '../App.css';
import DetailsContainer from './DetailsContainer.js';
import SearchBar from './SearchBar';

export default class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            loading: true,
            error: false,
            forecastData: null,
            default: "Stockholm",
            city: ""
        }
    }

    componentDidMount()
    {
        this.search(this.state.default);
    }

    search = (keyword) =>
    {
        this.setState({keyword: keyword});

        const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + 
        keyword + 
        "&units=metric&appid=b015f7e1eacd4710770c684c1920b775";
        fetch(url)
        .then(response => response.json())
        .then( forecastData => {
            try
            {
                 this.setState({loading: false,
                    error: false,
                    forecastData: forecastData, 
                    city: forecastData.city.name});
            }
            catch(error)
            {
                this.setState({error:true});
            }
        });
    }

    render()
    {
        if (this.state.loading) {
            return <div>Väntar på väderdata...</div>
        }

        return(<React.Fragment>
        <div className="forecastContainer">
        
        <SearchBar search={this.search} error={this.state.error}/>

        <DetailsContainer forecastData = {this.state.forecastData} city={this.state.city}/>
        </div>
        </React.Fragment>
        )
    }
}