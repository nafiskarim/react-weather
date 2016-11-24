var React = require('react');
var {Link} = require('react-router')

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });
var Examples = (props) => {
  return (
    <div>
        <h3 className="text-center">Examples</h3>
        <p>Here are some few example locations</p>
        <ol>
          <li>
            <Link to='/?location=Dhaka'>Dhaka</Link>
          </li>
          <li>
            <Link to='/?location=Stockholm'>Stockholm</Link>
          </li>
        </ol>
    </div>

  );
};

module.exports = Examples;
