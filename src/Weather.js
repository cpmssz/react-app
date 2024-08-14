import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
    }
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
}