// ==========================================================================
// Project:   Reorder - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Reorder */

// This page describes the main user interface for your application.
Reorder.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
     childViews: 'middleView topView bottomView'.w(),

    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'titleLabel'.w(),
      anchorLocation: SC.ANCHOR_TOP,

      titleLabel: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 300 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: 'Veeb\'s Power Rankings'
      })
    }),

    middleView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 36, bottom: 32, left: 0, right: 0 },
      backgroundColor: 'white',

      contentView: SC.ListView.design({
        layout: { left: 15, right: 15, top: 15, bottom: 15 },
        contentBinding:   'Reorder.teamArrayController.arrangedObjects',
        selectionBinding: 'Reorder.teamArrayController.selection',
        selectOnMouseDown: YES,
        canDeleteContent: YES,
        rowHeight: 91,
        exampleView: Reorder.TeamView,
        recordType: Reorder.TeamRecord,
        canReorderContent: YES,
        isEditable: YES
      })
    }),

    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      childViews: 'summaryLabel'.w(),
      anchorLocation: SC.ANCHOR_BOTTOM,

      summaryLabel: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20 },
        valueBinding: 'Reorder.teamArrayController.summary'
      })
    })
    
  })

});
