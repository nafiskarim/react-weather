var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render(){
//     return(
//       <div>
//         <Nav />
//         <h2>main component</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// });

var Main = (props) => {
  return(
    <div>
      <Nav />
      <h2>main component</h2>
      {props.children}
    </div>
  )
};

module.exports = Main;
