Todosthree.LOGGING_IN = SC.State.design({
  initialSubstate: "SHOWING_LOGIN",
 
  SHOWING_LOGIN: SC.State.design({
 
    enterState: function() {
    },
 
    exitState: function() {
    },
 
    authenticate: function() {
    }
  })
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todosthree');