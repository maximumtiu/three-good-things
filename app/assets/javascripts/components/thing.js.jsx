var Thing = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    why: React.PropTypes.string,
    details: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='thing'>
        <h3>{this.props.thing.title}</h3>
        <p>{this.props.thing.why}</p>
        <p>{this.props.thing.details}</p>
      </div>
    );
  }
})