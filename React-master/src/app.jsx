var React = require('react');
var TextArea = require('./textarea');
var UsersList = require('./userslist');
var Map = require('./map');
var options = require('./object.json');

var Hello = React.createClass({
  render: function() {
    return(
      <footer>
        <TextArea title={this.props.title}
        description={this.props.description}/>
        <UsersList {...options} />
        <Map />
      </footer>
    )
  }
});


var element = React.createElement(Hello, options);
React.render(element, document.querySelector('.root'));
