var Day = React.createClass({
  propTypes: {
    date: React.PropTypes.string,
    things: React.PropTypes.array
  },

  translateDate: function(date_str) {
    var date = new Date(this.props.day.date);
    var options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  },

  render: function() {
    things = this.props.things
    var things = things.map(function(thing) {
      return (
        <Thing thing={thing} index={things.indexOf(thing) + 1} key={thing.id} />
      );
    });

    return (
      <div className='day'>
        <h1 className='date'>{this.translateDate(this.props.day.date)}</h1>
        <div>{things}</div>
      </div>
    );
  }
})
