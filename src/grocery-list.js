var React = require('react');


module.exports = React.createClass({
	render: function() {
		var self = this;
		var createItem = function(itemObject, index) {
			return <li  className={itemObject.isStriken ? 'striken' : ''} key={index + itemObject.text}>
						<span>{itemObject.text}</span>
						<div className="icon-cancel-circled" onClick={function() {self.props.deleteItem(index); }}></div>
						<div className="icon-ok-circled" onClick={function() {self.props.strikeItem(index); }}></div>
					</li>};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});
