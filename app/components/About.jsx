var React = require('react');

// var About = React.createClass({
//
//   render: function() {
//     return (
//       <h3>About</h3>
//     );
//   }
// });
// stateless functional component
var About = (props) => {
  return (
    <div className="text-center">
      <h1>About</h1>
      <p>some text about this weather app</p>
    </div>
  )
};

module.exports = About;
