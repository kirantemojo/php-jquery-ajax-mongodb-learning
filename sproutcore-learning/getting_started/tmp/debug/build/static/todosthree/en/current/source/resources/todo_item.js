Todosthree.TodoItemView = SC.CheckboxView.design({
  classNames: ['todo-item'],
  valueBinding: '.content.isCompleted',
  titleBinding: SC.Binding.oneWay('.content.title')
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todosthree');