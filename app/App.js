var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Home = require('./Home');
var About = require('./About');
var Contact = require('./Contact');

var App = React.createClass({
	getInitialState () {
		return {
			route: window.location.hash
		};
	},
	
	componentDidMount () {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash
			})
		})
	},
	
	render () {
		var name = 'kellie';
		return (
			<div>
			<Link to='/'>Home</Link>
			<Link to={'/about' + name}>About</Link>
			<Link to='/contact'>Contact</Link>
			
			<div style={{ padding: 40 }}>
			{this.props.children}
			</div>
			</div>
		)
	}
})

ReactDOM.render(
	<Router>
		<Route component={App} path='/'>
  		  <IndexRoute component={Home} />
   		  <Route component={About} path='about/:name' />
	      <Route component={Contact} path='contact' />
		</Route>
	</Router>
	, document.getElementById('app'));
// create an App component for our application
// render it to the DOM
// add 3 links with the following hrefs: '#/', '#/about', '#/contact'

// add `route` to the state, use getInitialState to set the default value to the hash portion of the browser url
// in componentDidMount, create an event listener that will listen to any changes to the browser url
// whenever the url changes, update `route` on the state with the updated hash

// create 3 new components, each in it's own file: Home, About, and Contact
// have each of them return the following jsx, respectively: `<div>Home</div>`
// export them so they can be used in other files
// include each of the new components into this App.js file

// in render() check this.state.route (the browser's current url) to find a matching component
// `#/` = <Home />, `#/about` = <About />, `#/contact` = <Contact />
// assign the matching component to a variable called `Child`
// add <Child /> to the return statement so the matching route gets rendered to the DOM


////////////////////////////////////
// BREAK
////////////////////////////////////


// run `npm install history@1.13.1 react-router@latest --save` to bring in react-router to our project
// include Router, Route, and Link from the react-router module

// replace the <a> tags with <Link> tags
// remove any logic related to keeping track of the current route (componentDidMount, getInitialState, etc)
// replace <Child /> with {this.props.children}
// create react-router routes by replacing <App /> in ReactDOM.render with the following:
// <Router>
//   <Route component={App} path='/'>
//     <Route component={Home} path='home' />
//     <Route component={About} path='about' />
//     <Route component={Content} path='content' />
//   </Route>
// </Router>

// include IndexRoute from the react-router module
// replace the Home route with <IndexRoute />

// update our `About` route to accept a `name` parameter, which we'll display on the about page
// move to the `About` component file, and update the render method to display the route prop (this.props.params.name)


////////////////////////////////////
// BREAK
////////////////////////////////////


////////////////////////////////////
// QUESTIONS / REQUESTS / PROJECT
////////////////////////////////////

// https://github.com/ReactWeek/mini3-todofire