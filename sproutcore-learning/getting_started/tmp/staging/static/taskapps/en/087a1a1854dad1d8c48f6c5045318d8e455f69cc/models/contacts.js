sc_require('core');
Taskapps.contacts = SC.Record.extend({
	name : SC.Record.attr(String),
	desc : SC.Record.attr(String),
	pic	: SC.Record.attr(String)
});