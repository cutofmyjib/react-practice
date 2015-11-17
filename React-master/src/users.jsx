var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="users-container">
        <div className="users">
          <ul>
            <li><div className="user-icon purple"><div className="smile"></div></div>{this.props.users}</li>
            <li><div className="user-icon red"><div className="smile"></div></div>{this.props.users}</li>
          </ul>
        </div>
      </div>
    )
  }
})