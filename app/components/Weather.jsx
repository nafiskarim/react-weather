var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherDetails = require('WeatherDetails');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});

    });
  },

  render: function() {
    // pull state data
    var {isLoading, temp, location} = this.state; // es6 destructuring

    function renderMsg() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      }else if (temp && location) {
        return <WeatherDetails temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/> {/* onSearch is a prop here passed from child compo */}
         {renderMsg()} {/*creating props to pass data to child */}
      </div>
    );
  }

});

module.exports = Weather;
