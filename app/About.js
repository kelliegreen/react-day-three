var React = require('react');
var About = React.createClass({
	render () {
		return (
			<div>About page: {this.props.params.name}</div>
		);
	}
});

module.exports = About;