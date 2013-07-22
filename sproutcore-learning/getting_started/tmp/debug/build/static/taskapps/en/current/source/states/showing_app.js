Taskapps.SHOWING_APP = SC.State.design({
	enterState : function(){
		Taskapps.mainPage.get('mainPane').append();
	},
	exitState: function(){

	}
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('taskapps');