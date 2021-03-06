var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (event) {
    event.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location); // call parent function
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Enter city name"/>
          <button className="hollow expanded button">Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
