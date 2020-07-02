import React, { Component } from 'react';
import '../App.css';


export default class DetailsItems extends Component {

        getDetailItems = (data) => {

        var detailItems = [];
        
        const {list} = data;

        list.map(x => {    
            
            let time = JSON.stringify(x.dt_txt).substring(12,20);
            
            if(time == "12:00:00")
            {
                var detailItem = {
                    date: x.dt_txt,
                    temp: x.main.temp,
                    maxtemp: x.main.temp_max,
                    mintemp: x.main.temp_min,
                    pressure: x.main.pressure,
                    feelsLike: x.main.feels_like,
                    icon: x.weather[0].icon,
                    city: data.city.name
                }
        
                detailItems.push(detailItem);
            }
        });

        return detailItems;
    }

    getImageURL(filename)
    {
        return "http://openweathermap.org/img/wn/" + filename + "@2x.png";
    }

    render()
    {
        let date = new Date().toTimeString();
        let iconFileName = this.props.forecastData.list[0].weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + iconFileName + "@2x.png";
        

        var detailItems = this.getDetailItems(this.props.forecastData);

        // let listItems = this.props.fruitList.map((fruit) => {
        //     return <li>{fruit}</li>;

        let listItems = detailItems.map((item) => {
            return <li>
            <table>
                <tr>
                    <td>
                    <h3>
                        {item.date.substring(0,11)}
                    </h3>
                    </td>
                    <td>
                        <img src={this.getImageURL(item.icon)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Temperature
                    </td>
                    <td>
                        {item.temp} °C
                    </td>
                </tr>
                <tr>
                    <td>
                        Max
                    </td>
                    <td>
                        {item.maxtemp} °C
                    </td>
                </tr>
                <tr>
                    <td>
                        Min
                    </td>
                    <td>
                        {item.mintemp} °C
                    </td>
                </tr>
                <tr>
                    <td>
                        Feels like
                    </td>
                    <td>
                        {item.feelsLike}
                    </td>
                </tr>
                <tr>
                    <td>
                    Pressure 
                    </td>
                    <td>
                        {item.pressure} hPa
                    </td>
                </tr>
            </table>
            </li>
        });

        return(
            
            <React.Fragment>
            <ul>{listItems}</ul>
            </React.Fragment>
        );
    }
}