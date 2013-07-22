Taskapps.READY_STATE = SC.State.design({

	enterState : function(){
		if(SC.instanceOf(Taskapps.store.dataSource,SC.FixturesDataSource))
		{
			//Taskapps.contactsController.set('content',Taskapps.store.find(SC.Query.local(Taskapps.contacts, { orderBy : "name"})));
			Taskapps.contactsController.set('content',Taskapps.store.find(Taskapps.contacts));
		}
	},
	didLoad : function(){
		if(Taskapps.contactsController.get('status') === SC.Record.READY_CLEAN)
		{
			this.gotoState('SHOWING_APP');
		}
	}.stateObserves('Taskapps.contactsController.status'),
	
	exitState : function(){
		Taskapps.getPath('mainPage.mainPane').remove();
	}

});