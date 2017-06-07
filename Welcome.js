//Import the react liabrary
import React from 'react';

//Create Welcome class 
var Welcome = React.createClass({
  render: function () {
    if (this.props.name == 'abc') {
      return (
      	<h2>
		Hello {this.props.name}, Welcome to our site!! <br/>
		We have just pass props within components
      	</h2>
      );
    } else {
      return (
      	<h2>
Hello, Welcome to our site!!
      	</h2>
      );
    }
  }
});

// Import the component to use in another files
module.exports = Welcome;
