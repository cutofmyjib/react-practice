var React = require('react');
var TextArea = require('./textarea');
var Users = require('./users');
var Map = require('./map');
var options = require('./object.json');

var Hello = React.createClass({
  render: function() {
    return(
      <footer>
        <TextArea title={this.props.title}
        description={this.props.description}/>
        <Users />
        <Map />
      </footer>
    )
  }
});


var element = React.createElement(Hello, options);
React.render(element, document.querySelector('.root'));
