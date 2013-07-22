sc_require('core');
 
Todosthree.Todo = SC.Record.extend({
  timestamp: SC.Record.attr(SC.DateTime),
  isCompleted: SC.Record.attr(Boolean),
  title: SC.Record.attr(String)
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todosthree');