import React, {Component} from 'react';
import DetailsMainItem from './DetailsMainItem';
import DetailsItems from './DetailsItems';

export default class DetailsContainer extends Component {

    render()
    {
        return(
            <React.Fragment>
            
            <div className="detailsMainItem"> 
            <DetailsMainItem forecastData = {this.props.forecastData} city= {this.props.city}/>
            </div>

            <div className="detailsItems"> 
            <DetailsItems forecastData = {this.props.forecastData}/>
            </div>

            </React.Fragment>
        );
    }
}