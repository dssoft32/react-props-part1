//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome.js';

// Create component class named Home and call the Welcome class and pass props in this
var Home = React.createClass({
  render: function () {
    return <Welcome name='abc' age='22' />;
  }
});

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);

// Rendering Home component instance in html body
ReactDOM.render(<Home />,document.getElementById('app'));
