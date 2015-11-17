var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
        <div className="text-area">
          <div className="text-header">
            <ul>
              <li><b>{this.props.date}</b></li>
              <li>{this.props.time}</li>
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
              <li><div className="bullet"></div>REMINDER {this.props.time}</li>
            </ul>
          </div>
        </div>
    )
  }
});