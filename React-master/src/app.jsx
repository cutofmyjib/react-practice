var React = require('react');
var TextArea = require('./textarea');
var Users = require('./users');
var options = require('./object.json');

var Hello = React.createClass({
  render: function() {
    return(
      <footer>
        <TextArea title={this.props.title}
        description={this.props.description}/>
        <Users />
        <div className="map">
          <div className="map-memo">
            <p>Memo here</p>
          </div>
          <div className="map-img">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=South+Beach,San+Francisco,CA&zoom=13&size=240x240&maptype=roadmap
&markers=color:red%7Clabel:podcasthouse%7C37.786355,-122.391199
&key=AIzaSyAJzQKtYZxDKxdZ16O_jYJCznIvMiyx_1k" />
          </div>
          <div className="map-footer">
            <p>Address here</p>
          </div>
        </div>
      </footer>
    )
  }
});


var element = React.createElement(Hello, options);
React.render(element, document.querySelector('.root'));
