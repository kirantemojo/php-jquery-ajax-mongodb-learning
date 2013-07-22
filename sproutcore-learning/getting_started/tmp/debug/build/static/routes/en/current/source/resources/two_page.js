// ==========================================================================
// Project:   Routes - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Routes */

// This page describes the main user interface for your application.
Routes.twoPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  twoPane: SC.MainPane.design({
    childViews: 'labelView buttonView'.w(),

    labelView: SC.LabelView.design({
      layout: { top: 20, left: 27, width: 400, height: 20 },
      value: 'You are on page #2.',
      classNames: ['title2']
    }),
    buttonView : SC.ButtonView.design({
       layout: { top: 70, left: 27, width: 400 , height: 40 },
       title: 'Click to go to page #1.',
       action: 'go'
    }),
    go : function(){
       SC.routes.set('location','onePage/onePane');
    }
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('routes');