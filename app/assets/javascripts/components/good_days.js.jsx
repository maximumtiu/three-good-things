// Single-page app for it all

var GoodDays = React.createClass({
  propTypes: {
    days: React.PropTypes.array,
    things: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <div>Days: {this.props.days}</div>
        <div>Things: {this.props.things}</div>
      </div>
    );
  }
});
