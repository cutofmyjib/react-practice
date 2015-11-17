var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="map">
        <div className="map-memo">
          <p>{this.props.memo}</p>
        </div>
        <div className="map-img">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=South+Beach,San+Francisco,CA&zoom=13&size=240x240&maptype=roadmap
&markers=color:red%7Clabel:podcasthouse%7C37.786355,-122.391199
&key=AIzaSyAJzQKtYZxDKxdZ16O_jYJCznIvMiyx_1k" />
        </div>
        <div className="map-footer">
          <p>{this.props.location}</p>
        </div>
      </div>
    )
  }
});