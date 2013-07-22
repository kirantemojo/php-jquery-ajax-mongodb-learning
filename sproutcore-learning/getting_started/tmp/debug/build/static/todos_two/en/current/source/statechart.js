TodosTwo.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('TodosTwo.ReadyState')
  // someOtherState: SC.State.plugin('TodosTwo.SomeOtherState')

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_two');