var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li><div className={"user-icon " + this.props.color}><div className="smile"></div></div>{this.props.name}</li>
    )
  }
})