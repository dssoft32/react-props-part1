//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';

//Declare variable storing string value
var theBestString = "Demo";

/* Nested elements :- more than one JSX elements, so need to wrap up in paranthesis.
First p tag giving example of attributes , as div with attribute named id.
Second p tag shows variable appends here.
Third p tag gives the example of expressions
 */
var paragraphs = (<div id="i-am-the-outermost-element">
					<p>Div with id attribute</p>
					<p>Appending JSX element stored in variable:- {theBestString}</p>
					<p>Expressions:- {2+3}</p>
				  </div>);

// Rendering paragraphs JSX syntax in html body
ReactDOM.render(paragraphs, document.getElementById('para'));

// Create simple function
function myFun(){
alert ("Welcome to react");
}

// Call function on button onclick and render the button on html body
ReactDOM.render(<button onClick= {myFun}>Welcome</button>,document.getElementById('welcome_button')); 


/* React.createClass is the way to make a new component class.
React.createClass job is to create a component class, which is like a factory for building React components. */
var MyComponentClass = React.createClass({
  render: function () {
    return <h2>First React component made by react class</h2>;
  }
});

// Component class is stored in variable named MyComponentClass and rendering on html body
ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('mycomponent_class')
);