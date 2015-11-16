var React = require('react');
var Content = require('./content');
var options = require('./object.json');
var Map = require('./map');
var Badge = require('./badge');

var Hello = React.createClass({
  render: function() {
    return(
      <footer>
        <Content title={this.props.title}
        description={this.props.description} />
        <ul>
          <li><Badge /></li>
          <li className="options">WORK CALENDAR</li>
          <li className="options">REMINDER:</li>
        </ul>
        <Map />
      </footer>
    )
  }
});


var element = React.createElement(Hello, options);
React.render(element, document.querySelector('.container'));
