var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');


var GroceryList = React.createClass({
	render: function() {
		var self = this;
		var createItem = function(itemObject, index) {
			return <li key={index + itemObject.text}>
						<span className={itemObject.striken ? 'striken' : ''}>{itemObject.text}</span>
						<div className="icon-cancel-circled" onClick={function() {self.props.deleteItem(index); }}></div>
						<div className="icon-ok-circled" onClick={function() {self.props.strikeItem(index); }}></div>
					</li>};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

var ListApp = React.createClass({
	getInitialState: function() {
		return {items: [], text: ''};
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([{
			text: this.state.text,

		}]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
	deleteItem: function(index) {
		var newItems = this.state.items;

		newItems.splice(index, 1);

		this.setState({items: newItems});
	},
	strikeItem: function(index) {
		var itemList = this.state.items;
		var thisItem = itemList[index];


		thisItem.striken = typeof(thisItem.striken) === 'undefined' ? true : !thisItem.striken ;
		this.setState({items: itemList});
	},
	render: function() {
		var self = this;
		return (
			<div>
				<h3>Smart Shop Grocery List</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button className='icon-plus'></button>
				</form>
				<div className='container'>
					<GroceryList items={this.state.items} deleteItem={self.deleteItem} strikeItem={self.strikeItem} />
				</div>
			</div>
		);
	}
});

ReactDOM.render(<ListApp />, document.getElementById('main'));
