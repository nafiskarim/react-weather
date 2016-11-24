var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherDetails = require('WeatherDetails');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
        });
    });
  },

  render: function() {
    // pull state data
    var {isLoading, temp, location, errorMessage} = this.state; // es6 destructuring

    function renderMsg() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      }else if (temp && location) {
        return <WeatherDetails temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/> {/* onSearch is a prop here passed from child compo */}
         {renderMsg()} {/*creating props to pass data to child */}
         {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
