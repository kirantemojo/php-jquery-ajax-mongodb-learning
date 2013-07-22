Todosthree.SHOWING_APP = SC.State.design({
  enterState: function() {
    Todosthree.mainPage.get('mainPane').append();
    Todosthree.mainPage.get('field').becomeFirstResponder();
  },
 
  exitState: function() {
  },
 
  addTodo: function (view) {
    var todo = (view.get('value') || '').trim();
    if (todo !== '') {
      Todosthree.store.createRecord(Todosthree.Todo, {
        title: todo,
        timestamp: SC.DateTime.create()
      });
      view.set('value', '');
    }
  },
 
  clearCompletedTodos: function() {
    this.gotoState('SHOWING_DESTROY_CONFIRMATION');
  }
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todosthree');