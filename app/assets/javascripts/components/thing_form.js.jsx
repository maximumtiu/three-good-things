var ThingForm = React.createClass({
  getInitialState: function() {
    return {
      step: 1
    }
  },

  // componentDidMount: function(){
  //   ReactDOM.findDOMNode(this.refs.title).focus();
  // },

  propTypes: {
    title: React.PropTypes.string,
    why: React.PropTypes.string,
    details: React.PropTypes.string,
    i: React.PropTypes.number
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var title = this.refs.title.getDOMNode().value.trim();
    var why = this.refs.why.getDOMNode().value.trim();

    // validate
    if (!why || !title) {
      return false;
    }

    // submit
    var formData = $(this.refs.form.getDOMNode()).serialize();
    console.log(formData);
    this.props.onSubmit(formData);

    // reset form
    this.refs.title.getDOMNode().value = "";
    this.refs.why.getDOMNode().value = "";
  },

  render: function() {
    var stuff = [
      { h1: 'One', btn: 'Next' },
      { h1: 'Two', btn: 'Next' },
      { h1: 'Three', btn: 'Submit' }
    ];

    return (
      <div ref='form'>
        <div className='thing'>
          <h1 className='thing-label'>{stuff[this.props.i].h1}</h1>
          <label>What happened?</label>
          <input className='form-control input-lg form' ref='title' />

          <label>Why/how did it happen?</label>
          <textarea className='form-control form' ref='why' />
        </div>
        <button className='btn btn-primary submit' onSubmit={self.handleSubmit}>
          {stuff[this.props.i].btn}
        </button>
      </div>
    );
  }
});
