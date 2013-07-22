Taskapps.SHOWING_APP = SC.State.design({
	enterState : function(){
		Taskapps.mainPage.get('mainPane').append();
	},
	exitState: function(){

	}
});