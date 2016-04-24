var List = React.createClass({
  propTypes: {
    days: React.PropTypes.array,
    things: React.PropTypes.array,
    key: React.PropTypes.number
  },

  findThings: function(day) {
    var things_arr = [];
    things = this.props.things;
    for (var i = 0; i < things.length; i++) {
      if (things[i].day_id == day.id) {
        things_arr.push(things[i]);
      }
    };
    return things_arr;
  },

  render: function() {
    days = this.props.days
    for (var i = 0; i < days.length; i++) {
      things = this.findThings(this.props.days[i])
      return (
        <Day day={days[i]} things={things} />
      );
    }
  }
})