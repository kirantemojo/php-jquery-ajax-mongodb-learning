TodosTwo.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    TodosTwo.getPath('mainPage.mainPane').append(); 
  },

  exitState: function() { 
    TodosTwo.getPath('mainPage.mainPane').remove();
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_two');