var React = require('react');
var options = require('./object.json');

module.exports = React.createClass({
  render: function() {
    return(
        <div className="text-area">
          <div className="text-header">
            <ul>
              <li><b>HOUR</b></li>
              <li>DATE</li>
            </ul>
          </div>
          <div className="text-body">
            <h1 className="title">{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
          <div className="text-footer">
            <ul>
              <li id="modify"><a href="#">MODIFY</a></li>
              <li><div className="bullet"></div>WORK CALENDAR</li>
              <li><div className="bullet"></div>REMINDER 12:00</li>
            </ul>
          </div>
        </div>
    )
  }
});