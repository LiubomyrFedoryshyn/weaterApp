import React, { Component } from 'react';
import Title from './components/Title';
import './App.css';
import Form from "./components/Form";
import Data from "./components/Data"

const API_KEY = "f872d9f7e644e9c595688c0070ec10fa";

class App extends Component {
  

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      if (api_call.status >= 200 && api_call.status < 400) { 
      const data = await api_call.json();
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        })
    }  else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'Pleae, feel the info correctly'
      })
  }
}
    render() {
    
        return (
          <div className="App">
            <Title />
            <Form getWeather={this.getWeather}/>
            <Data temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}/>
          </div>
        );
  }
}

export default App;
