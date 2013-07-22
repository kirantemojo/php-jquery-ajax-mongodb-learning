Todosthree.READY = SC.State.design({
  enterState: function() {
    if (SC.instanceOf(Todosthree.store.dataSource, SC.FixturesDataSource)) {
      Todosthree.todosController.set('content',
        Todosthree.store.find(SC.Query.local(Todosthree.Todo, { orderBy: 'timestamp DESC' })));
      Todosthree.completedTodosController.set('content',
        Todosthree.store.find(SC.Query.local(Todosthree.Todo, 'isCompleted = true')));
    } else {
      this.gotoState('LOGGING_IN');
    }
  },
 
  didLoad: function () {
    if (Todosthree.todosController.get('status') === SC.Record.READY_CLEAN) {
      this.gotoState('SHOWING_APP');
    }
  }.stateObserves('Todosthree.todosController.status'),
 
  exitState: function() {
    // Nothing to worry about here.
  }
});

