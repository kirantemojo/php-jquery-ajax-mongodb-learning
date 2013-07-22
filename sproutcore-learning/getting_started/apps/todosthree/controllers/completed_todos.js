sc_require('controllers/todos');
 
Todosthree.completedTodosController = SC.ArrayController.create({
 
  totalTodosBinding: SC.Binding.oneWay('Todosthree.todosController.length'),
 
  areAllCompleted: function (k, v) {
    if (v !== undefined) {
      Todosthree.todosController.setEach('isCompleted', v);
    }
    return this.get('length') === this.get('totalTodos');
  }.property('length', 'totalTodos').cacheable()
});
