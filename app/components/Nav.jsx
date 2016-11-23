var React = require('react');
var {Link, IndexLink} = require('react-router'); // for linking route element

var Nav = () => {
  return (
    <div>
        <p>This is nav component</p>
        <IndexLink activeClassName='active' to="/">Get Weather</IndexLink>
        <Link activeClassName='active' to="/about">About</Link>
        <Link activeClassName='active' to="/examples">Examples</Link>
    </div>

  );
}

module.exports = Nav;
