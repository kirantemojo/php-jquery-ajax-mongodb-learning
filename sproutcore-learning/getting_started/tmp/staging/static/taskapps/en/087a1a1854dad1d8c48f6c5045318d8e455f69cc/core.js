Taskapps = SC.Application.create({
	
	NAMESPACE: 'Taskapps',
	VERSION: '0.1.0',

	store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))
	
});