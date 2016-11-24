var React = require('react');
var {Link, IndexLink} = require('react-router'); // for linking route element

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    // pull value from search box
    var location = this.refs.cityName.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.cityName.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather app</li>
            <li>
              <IndexLink activeClassName='active' to="/">Get Weather</IndexLink>
            </li>
            <li>
              <Link activeClassName='active' to="/about">About</Link>
            </li>
            <li>
              <Link activeClassName='active' to="/examples">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Enter city name" ref="cityName"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
