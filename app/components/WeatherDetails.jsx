var React = require('react');

// var WeatherDetails = React.createClass({
//   render: function() {
//     var {temp, location} = this.props; // getting state data through props
//     return (
//       <div>
//         <p>Location: {location} , Temp: {temp}</p>
//       </div>
//     );
//   }
// });

var WeatherDetails = (props) => {
  var {temp, location} = props; // getting state data through props
  return (
    <div>
      <p>Location: {location} , Temp: {temp}</p>
    </div>
  );
};

module.exports = WeatherDetails;
