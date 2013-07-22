Todosthree.statechart = SC.Statechart.create({

  rootState: SC.State.design({
  initialSubstate: 'READY',

  READY: SC.State.plugin('Todosthree.READY'),
  
  LOGGING_IN: SC.State.plugin('Todosthree.LOGGING_IN'),

  SHOWING_APP: SC.State.plugin('Todosthree.SHOWING_APP'),

  SHOWING_DESTROY_CONFIRMATION: SC.State.plugin ('Todosthree.SHOWING_DESTROY_CONFIRMATION')
})

});
