var React = require('react');
// var options = require('./object.json')

module.exports = React.createClass({
  render: function() {
    return(
      <div className="content">
        <h1 className="title">{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
});