import React from "react";
import axios from 'axios';
import "./Weather.css";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
        let apiKey = "197ef3a642b76eef90e131866f74a0a0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city.."
                            className="form-control"
                            autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w-100"
                        />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="Mostly Cloudy"
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">6</span>
                            <span className="unit">ºC</span>    
                        </div>    
                    </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitacion: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13</li>
                </ul>
            </div>
        </div>
    )
}