Taskapps.TaskappsView = SC.View.extend({
	contentDisplayProperties: 'name desc pic'.w(),

	render : function(context,firstTime)
	{
		var content = this.get('content');
		var name = content.get('name');
		var desc = content.get('desc');
		var pic = content.get('pic');

		context = context.begin('div').addClass('task-grid-view').push('');
			context = context.begin('div').addClass('face-name').push(name).end();
			context = context.begin('div').addClass('face-company').push(desc).end();
		context = context.end();

		if((pic != undefined) && (pic != ""))
		{
			context = context.begin('div').addClass('face-back').push("<img src='"+pic+"'/>").end();
		}
		sc_super();
	},
	mouseEntered : function(){
		var jq = this.$();
		jq.find('.task-grid-view').slideDown();
	},
	mouseExited : function(){
		var jq = this.$();
		jq.find('.task-grid-view').slideUp();
	}
});