// ==========================================================================
// Project:   TodosOne - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/* globals TodosOne */

// This page describes the main user interface for your application.
TodosOne.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['labelView'],

    labelView: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: { centerX: 0, centerY: 0, width: 600, height: 30 },
      tagName: "h1",
      value: "Welcome to SproutCore in Innominds!"
    })
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_one');