import React, { Component } from 'react';
import '../App.css';

export default class DetailsMainItem extends Component {

    getDetailItems = (data) => {

    var detailItems = [];
    
    const {list} = data;

        list.map(x => {    
            
            let time = JSON.stringify(x.dt_txt).substring(12,20);
            
            if(time === "12:00:00")
            {
                var detailItem = {
                    date: x.dt_txt,
                    maxtemp: x.main.temp_max,
                    mintemp: x.main.temp_min,
                    icon: x.weather[0].icon
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

    var detailItems = this.getDetailItems(this.props.forecastData);
    
    return(
        
        <React.Fragment>
        <table>
            <tr>
                <td>
                    <h1>{this.props.city}</h1>
                    <h3>{detailItems[0].maxtemp} °C</h3>
                    <h3>{detailItems[0].date.substring(0,11)}</h3>
                    <h3>{date.substring(0,5)}</h3>
                </td>
                <td>
                    <img src={this.getImageURL(detailItems[0].icon)} />
                </td>>
            </tr>
        </table>
        </React.Fragment>
        );
    }
}