var React = require('react');
var Users = require('./users');

module.exports = React.createClass({
  render: function() {
    var data = this.props.users;
    var list = data.map(function(userData){
      return <Users {...userData} />
    });
    return (
      <div className="users-container">
        <div className="users">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    )
  }
});