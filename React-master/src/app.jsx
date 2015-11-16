var React = require('react');
var options = require('./object.json');

var Hello = React.createClass({
  render: function() {
    return(
      <footer>
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
              <li id="modify">MODIFY</li>
              <li><div className="bullet"></div>WORK CALENDAR</li>
              <li><div className="bullet"></div>REMINDER 12:00</li>
            </ul>
          </div>
        </div>
        <div className="users">
        </div>
        <div className="map">
        </div>
      </footer>
    )
  }
});


var element = React.createElement(Hello, options);
React.render(element, document.querySelector('.root'));
