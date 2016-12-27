var DayForm = React.createClass({
  handleThingSubmit: function(formData) {
    $.ajax({
      data: formData,
      url: '/things',
      type: "POST",
      dataType: "json",
      success: function (data) {
        console.log('success');
        this.setState({ step: this.state++ });
        console.log(this.state.step)
      }.bind(this)
    });
  },

  render: function() {
    var nums = [0, 1, 2];
    var forms = nums.map(function(num) {
      return (
        <ThingForm i={num} key={num} />
      );
    });

    return (
      <form>
        {forms}
      </form>
    );
  }
});
