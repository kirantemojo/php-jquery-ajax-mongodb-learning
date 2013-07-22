/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Showcase */


/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
Showcase = SC.Application.create(
  /** @scope Showcase.prototype */ {

  NAMESPACE: 'Showcase',

  VERSION: '0.1.0',

  // Used by the List and Grid view examples.
  collectionItems: function() {
    var collectionItems = [],
        icons = ['sc-icon-alert-24', 'sc-icon-bookmark-24', 'sc-icon-cancel-24', 'sc-icon-document-24', 'sc-icon-down-24', 'sc-icon-favorite-24', 'sc-icon-folder-24', 'sc-icon-group-24', 'sc-icon-help-24', 'sc-icon-info-24', 'sc-icon-left-24', 'sc-icon-options-24', 'sc-icon-redo-24', 'sc-icon-right-24', 'sc-icon-tools-24', 'sc-icon-trash-24', 'sc-icon-undo-24', 'sc-icon-up-24', 'sc-icon-user-24' ];

    for (var i = 0, len = icons.length; i < len; i++) {
      var icon = icons[i];
      collectionItems.push(SC.Object.create({
        icon: icon, title: icon, isSelected: false, rightIcon: 'sc-icon-help-16'
      }));
    }

    return collectionItems;
  }.property().cacheable(),

  collectionItemSelection: null,

  editableCollectionItems: function() {
    var collectionItems = this.get('collectionItems');

    return SC.copy(collectionItems, true);
  }.property().cacheable(),

  // Used by the SourceList view example.
  sourceListTree: function() {
    var sourceListTree;

    sourceListTree = SC.TreeItemObserver.create({
      delegate: this,
      item: SC.Object.create({
        treeItemIsExpanded: true,
        treeItemChildren: [
          SC.Object.create({
            treeItemIsExpanded: true,
            group: true,
            groupName: "Mission Control",
            treeItemChildren: [
              SC.Object.create({
                name: 'Warnings',
                icon: 'sc-icon-alert-16',
                count: 2
              }),
              SC.Object.create({
                name: 'Notices',
                icon: 'sc-icon-info-16',
                count: 15
              })
            ]
          }),
          SC.Object.create({
            treeItemIsExpanded: false,
            group: true,
            groupName: "Administration",
            treeItemChildren: [
              SC.Object.create({
                name: 'Tag Management',
                icon: 'sc-icon-bookmark-16'
              }),
              SC.Object.create({
                name: 'Users',
                icon: 'sc-icon-user-16'
              }),
              SC.Object.create({
                name: 'CRM Default Options'
              }),
              SC.Object.create({
                name: 'Document Settings',
                icon: 'sc-icon-document-16'
              }),
              SC.Object.create({
                name: 'Directory Structure',
                icon: 'sc-icon-folder-16'
              })
            ]
          }),
          SC.Object.create({
            treeItemIsExpanded: true,
            group: true,
            groupName: "Games",
            treeItemChildren: [
              SC.Object.create({
                name: 'Tunnel of Like',
                icon: 'sc-icon-favorite-16'
              }),
              SC.Object.create({
                name: 'Squirbo!',
                icon: 'sc-icon-group-16'
              }),
              SC.Object.create({
                treeItemIsExpanded: true,
                group: true,
                name: "Puzzles",
                treeItemChildren: [
                   SC.Object.create({
                    name: 'Flashpoint'
                  }),
                   SC.Object.create({
                    name: 'Weezaxo 3'
                  })
                ]
              }),
              SC.Object.create({
                name: 'Trasholis',
                icon: 'sc-icon-trash-16'
              })
            ]
          }),
          SC.Object.create({
            name: 'Help',
            icon: 'sc-icon-help-16'
          })
        ]
      })
    });

    return sourceListTree;
  }.property().cacheable(),

  treeItemIsExpandedKey: "treeItemIsExpanded",

  treeItemChildrenKey: "treeItemChildren",

  treeItemIsGrouped: true,

  // Used by the Tab views.
  blueTabView: SC.LabelView.extend({  classNames:['blue-tab-view', 'tab-view'],  value: 'Blue View'  }),
  greenTabView: SC.LabelView.extend({  classNames:['green-tab-view', 'tab-view'],  value: 'Green View'  }),
  pinkTabView: SC.LabelView.extend({  classNames:['pink-tab-view', 'tab-view'],  value: 'Pink View'  }),
  grayTabView: SC.LabelView.extend({  classNames:['gray-tab-view', 'tab-view'],  value: 'Gray View'  }),
  orangeTabView: SC.LabelView.extend({  classNames:['orange-tab-view', 'tab-view'],  value: 'Orange View'  }),
  purpleTabView: SC.LabelView.extend({  classNames:['purple-tab-view', 'tab-view'],  value: 'Purple View'  }),
  redTabView: SC.LabelView.extend({  classNames:['red-tab-view', 'tab-view'],  value: 'Red View'  }),

  store: SC.Store.create().from(SC.Record.fixtures),

  /**
    Our simple route handler.  This will be called whenever the URL changes
    directly or on reload.
   */
  route: function(route) {
    var object,
      section;

    section = Showcase.sources.get('treeItemChildren').findProperty('subpath', route.section);
    object = section.get('treeItemChildren').findProperty('name', route.key);

    Showcase.sourceTreeController.selectObject(object);
  }

});

/* >>>>>>>>>> BEGIN source/controllers/source_controller.js */
// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */

/**
  The mediating controller for the selected source object.
*/
Showcase.sourceController = SC.ObjectController.create({

  contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.selection')

});

/* >>>>>>>>>> BEGIN source/controllers/source_tree_controller.js */
// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */


/**
  The source objects.
*/
Showcase.sources = SC.Object.create(SC.CollectionContent, SC.TreeItemContent, {

  treeItemIsExpanded: true,

  treeItemIsGrouped: true,

  treeItemChildren: [

    SC.Object.create(SC.TreeItemContent, {
      treeItemIsExpanded: true,
      group: true,
      name: "Demos",
      subpath: 'demos',
      treeItemChildren: [
        SC.Object.create({
          appPath: 'http://demos.sproutcore.com/color_demo',
          name: "Using SC.Color",
          view: 'Showcase.mainPage.demoView'
        })
      ]
    }),

    SC.Object.create(SC.TreeItemContent, {
      treeItemIsExpanded: true,
      group: true,
      name: "Views & Controls",
      subpath: 'ui',
      treeItemChildren: [
        SC.Object.create({
          name: "SC.ButtonView",
          view: 'Showcase.viewsPage.buttonViews'
        }),
        SC.Object.create({
          name: "SC.CheckboxView",
          view: 'Showcase.viewsPage.checkboxViews'
        }),
        SC.Object.create({
          name: "SC.ContainerView",
          view: 'Showcase.viewsPage.containerViews'
        }),
        SC.Object.create({
          name: "SC.DateFieldView",
          view: 'Showcase.viewsPage.dateFieldViews'
        }),
        SC.Object.create({
          name: "SC.DisclosureView",
          view: 'Showcase.viewsPage.disclosureViews'
        }),
        SC.Object.create({
          name: "SC.GridView",
          view: 'Showcase.viewsPage.gridViews'
        }),
        SC.Object.create({
          name: "SC.ImageButtonView",
          view: 'Showcase.viewsPage.imageButtonViews'
        }),
        SC.Object.create({
          name: "SC.ImageView",
          view: 'Showcase.viewsPage.imageViews'
        }),
        SC.Object.create({
          name: "SC.LabelView",
          view: 'Showcase.viewsPage.labelViews'
        }),
        SC.Object.create({
          name: "SC.ListView",
          view: 'Showcase.viewsPage.listViews'
        }),
        SC.Object.create({
          name: "SC.PopUpButtonView",
          view: 'Showcase.viewsPage.popupButtonViews'
        }),
        SC.Object.create({
          name: "SC.ProgressView",
          view: 'Showcase.viewsPage.progressViews'
        }),
        SC.Object.create({
          name: "SC.RadioView",
          view: 'Showcase.viewsPage.radioViews'
        }),
        SC.Object.create({
          name: "SC.ScrollView",
          view: 'Showcase.viewsPage.scrollViews'
        }),
        SC.Object.create({
          name: "SC.SegmentedView",
          view: 'Showcase.viewsPage.segmentedViews'
        }),
        SC.Object.create({
          name: "SC.SelectView",
          view: 'Showcase.viewsPage.selectViews'
        }),
        SC.Object.create({
          name: "SC.SliderView",
          view: 'Showcase.viewsPage.sliderViews'
        }),
        SC.Object.create({
          name: "SC.SourceListView",
          view: 'Showcase.viewsPage.sourceListViews'
        }),
        SC.Object.create({
          name: "SC.SplitView",
          view: 'Showcase.viewsPage.splitViews'
        }),
        SC.Object.create({
          name: "SC.StackedView",
          view: 'Showcase.viewsPage.stackedViews'
        }),
        SC.Object.create({
          name: "SC.StaticContentView",
          view: 'Showcase.viewsPage.staticContentViews'
        }),
        SC.Object.create({
          name: "SC.TabView",
          view: 'Showcase.viewsPage.tabViews'
        }),
        SC.Object.create({
          name: "SC.TextFieldView",
          view: 'Showcase.viewsPage.textFieldViews'
        }),
        SC.Object.create({
          name: "SC.ToolbarView",
          view: 'Showcase.viewsPage.toolbarViews'
        }),
        SC.Object.create({
          name: "SC.WebView",
          view: 'Showcase.viewsPage.webViews'
        }),
        SC.Object.create({
          name: "SC.WellView",
          view: 'Showcase.viewsPage.wellViews'
        }),
        SC.Object.create({
          name: "SC.WorkspaceView",
          view: 'Showcase.viewsPage.workspaceViews'
        })
      ]
    }),

    // SC.Object.create({
    //   treeItemIsExpanded: true,
    //   group: true,
    //   name: "Recipes",
    //   treeItemChildren: []
    // }),

    // SC.Object.create({
    //   treeItemIsExpanded: true,
    //   group: true,
    //   name: "Labs",
    //   treeItemChildren: []
    // })

  ]
});


/**
  The mediating controller for the source list object and the delegate for
  the source list.
*/
Showcase.sourceTreeController = SC.TreeController.create({

  /** Display top level items as groups. */
  treeItemIsGrouped: YES,

  /** Don't allow multiple selection. */
  allowsMultipleSelection: NO,

  /** Don't allow empty selection. */
  allowsEmptySelection: YES,

  /** Update the URL to match the selection. */
  selectionDidChange: function() {
    var content = this.get('content'),
      selection = this.get('selection');

    if (selection && selection.firstObject()) {
      var object = selection.firstObject(),
        section;

      // Determine which group the selection belongs to.
      content.get('treeItemChildren').forEach(function(group) {
        if (group.get('treeItemChildren').indexOf(object) >= 0) {
          section = group;
        }
      });

      // Set the location to be a combination of the section and the item.  We
      // use the name in the URL rather than having to add extra properties to
      // our source objects.
      // Use informLocation to avoid triggering a route call, since the
      // selection change already does what we want.
      SC.routes.informLocation('location', section.get('subpath') + '/' + object.get('name'));
    } else {
      // Clear the last location
      SC.routes.informLocation('location', null);
    }
  }.observes('selection')

});

/* >>>>>>>>>> BEGIN source/system/views_item_content.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


/**
  This class is used to provide content to the lists of Views & Controls.
*/
Showcase.ViewsItemContent = SC.Object.extend({

  example: null,

  /**
    Takes the example snippet and generates a multiline String.
  */
  exampleString: function() {
    var example = this.get('example'),
        padding = '  ',
        parts;

    parts = example.split('  ');
    parts.forEach(function(part, index) {
      if (part.indexOf('.extend(') >= 0 || part.indexOf('function(') >= 0 || part.indexOf('({') >= 0) {
        parts[index] = padding + part;
        padding += '  ';
      } else if (part.indexOf('}.property') >= 0 || part.indexOf('})') >= 0) {
        padding = padding.substr(2);
        parts[index] = padding + part;
      } else {
        parts[index] = padding + part;
      }
    });

    return '\n' + parts.join('\n') + '\n';
  }.property().cacheable(),

  /**
    Takes the example snippet and generates a JavaScript class.
  */
  exampleView: function() {
    var el,
        example = this.get('example');

    // Remove the HTML formatting from the snippet.
    // el = document.createElement("div");
    // el.innerHTML = example;
    // example = el.textContent || el.innerText;

    // Return the JavaScript interpretation.
    return eval(example);
  }.property().cacheable(),

  supportTitle: null,

  title: null

});

/* >>>>>>>>>> BEGIN source/theme.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Showcase */

// This is the theme that defines how your app renders.
//
// Your app is given its own theme so it is easier and less
// messy for you to override specific things just for your
// app.
//
// You don't have to create the whole theme on your own, though:
// your app's theme is based on SproutCore's Ace theme.
//
// NOTE: if you want to change the theme this one is based on, don't
// forget to change the :css_theme property in your buildfile.
Showcase.Theme = SC.AceTheme.create({
  name: 'showcase'
});

// SproutCore needs to know that your app's theme exists
SC.Theme.addTheme(Showcase.Theme);

// Setting it as the default theme makes every pane SproutCore
// creates default to this theme unless otherwise specified.
SC.defaultTheme = 'showcase';

/* >>>>>>>>>> BEGIN source/views/views_item_view.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


/**
  This class view is for use in the Views & Controls lists.
*/
Showcase.ViewsItemView = SC.View.extend({

  classNames: ['views-item-view'],

  content: null,

  isLastItem: false,

  /**
    Returns the layout for the example box.
  */
  exampleLayout: function () {
    var owner = this.get('owner'),
        exampleHeight = owner.get('exampleHeight');

    return { left: 60, top: 60, right: 60, height: exampleHeight }
  }.property().cacheable(),

  /** @private */
  render: function(context, firstTime) {
    var isLastItem = this.get('isLastItem');

    if (isLastItem) { context.addClass('last-item'); }
  },

  childViews: ['titleLabel', 'exampleBox', 'supportButton', 'disclosure', 'snippetField'],

  titleLabel: SC.LabelView.design({
    classNames: ['title-label'],
    layout: { left: 20, top: 15, right: 20, height: 30 },
    tagName: 'h2',
    valueBinding: SC.Binding.oneWay('.parentView.content.title')
  }),

  exampleBox: SC.ContainerView.design({
    classNames: ['example-box'],
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout'),
    nowShowingBinding: SC.Binding.oneWay('.parentView.content.exampleView'),
    replaceContent: function(newContent) {
      // SC.ContainerView needs its awake function to be called to be correctly initialized.
      newContent.awake();

      arguments.callee.base.apply(this,arguments);
    },
  }),

  supportButton: SC.ButtonView.design({
    actionBinding: SC.Binding.oneWay('.parentView.content.supportAction'),
    isVisibleBinding: SC.Binding.oneWay('.parentView.content.supportTitle').bool(),
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { height: 24, right: 60, top: layout.top + layout.height + 10, width: 140 };
      return ourLayout;
    }),
    titleBinding: SC.Binding.oneWay('.parentView.content.supportTitle')
  }),

  disclosure: SC.DisclosureView.design({
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { left: 10, height: 25, width: 150, top: layout.top + layout.height + 30 };
      return ourLayout;
    }),

    title: function() {
      return this.get('value') ? 'Hide' : 'Show Code';
    }.property('value').cacheable(),

    valueBinding: SC.Binding.from('.parentView.content.isShowingSnippet')
  }),

  snippetField: SC.TextFieldView.design({
    classNames: ['snippet-field'],
    isEditable: false,
    isTextArea: true,
    isVisibleBinding: SC.Binding.oneWay('.parentView.disclosure.value'),
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { left: 15, bottom: 15, right: 15, top: layout.top + layout.height + 60 };
      return ourLayout;
    }),
    valueBinding: SC.Binding.oneWay('.parentView.content.exampleString')
  })
});

/* >>>>>>>>>> BEGIN source/views/views_list_view.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('views/views_item_view.js');


/**
  This list view is for Views & Controls examples.
*/
Showcase.ViewsListView = SC.ListView.extend({

    classNames: ['views-list-view'],

    customRowHeightIndexes: function() {
      var content = this.get('content'),
          customRowHeightIndexes = SC.IndexSet.create();

      for (var i = content.get('length') - 1; i >= 0; i--) {
        if (content.objectAt(i).get('isShowingSnippet')) {
          customRowHeightIndexes.add(i, 1);
        }
      }

      return customRowHeightIndexes;
    }.property().idempotent(),

    exampleHeight: 110,

    exampleView: Showcase.ViewsItemView,

    itemHeight: function() {
      var exampleHeight = this.get('exampleHeight');

      return exampleHeight + 120;
    }.property('exampleHeight').cacheable(),

    rowSpacing: 2,

    snippetHeight: 170,

    contentIndexesInRect: function(rect) {
      return null; // select all
    },

    contentIndexRowHeight: function(view, content, contentIndex) {
      return this.get('rowHeight') + 170;
    },

    createItemView: function(exampleClass, idx, attrs) {
      var length = this.get('length');
      attrs.isLastItem = idx + 1 == length;

      return exampleClass.create(attrs);
    },

    init: function() {
      arguments.callee.base.apply(this,arguments);

      var content = this.content;
      for (var i = content.get('length') - 1; i >= 0; i--) {
        content.objectAt(i).addObserver('isShowingSnippet', this, this._sclv_customRowHeightIndexesDidChange);
      }
    }

});

/* >>>>>>>>>> BEGIN source/views/button_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ButtonView.
*/
Showcase.buttonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  layout: { width: 120, height: 24, centerX: -70, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  icon: 'sc-icon-favorite-16',  layout: { width: 120, height: 24, centerX: 70, centerY: 0 },  title: 'Love Me'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 100, height: 18, centerX: -60, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  icon: '/static/sproutcore/showcase/en/current/source/resources/images/green-dot.png?1372933691',  layout: { width: 100, height: 18, centerX: 60, centerY: 0 },  title: 'Status OK'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Huge',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 120, height: 30, centerX: -70, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  icon: 'sc-icon-options-16',  layout: { width: 120, height: 30, centerX: 70, centerY: 0 },  title: 'Configure'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 150, height: 44, centerX: -85, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  icon: 'sc-icon-cancel-24',  layout: { width: 150, height: 44, centerX: 85, centerY: 0 },  title: 'Delete'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Toggles',
        example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  title: 'Toggle Off',  value: true  })  });",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.toggleOn.value', false);
          this.setPath('parentView.exampleBox.contentView.toggleOff.value', true);
        },
        supportTitle: 'Reset Values'
      }),
      Showcase.ViewsItemContent.create({
        title: 'States',
        example: "SC.View.extend({  childViews: ['disabledButton', 'defaultButton'],  disabledButton: SC.ButtonView.extend({  isEnabled: false,  layout: { width: 100, height: 24, centerX: 60, centerY: 0 },  title: 'Disabled'  }),  defaultButton: SC.ButtonView.extend({  isDefault: true,  layout: { width: 100, height: 24, centerX: -60, centerY: 0 },  title: 'Default'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Capsule',
        example: "SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: 0, centerY: 0 },  themeName: 'capsule',  title: 'Click Me'  });"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Pointers',
        example: "SC.View.extend({  childViews: ['pointLeftButton', 'pointRightButton'],  pointLeftButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: -50, centerY: 0 },  themeName: 'point-left',  title: 'Back'  }),  pointRightButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: 50, centerY: 0 },  themeName: 'point-right',  title: 'Forward'  })  });"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/checkbox_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.CheckboxView.
*/
Showcase.checkboxViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularCheckbox', 'iconCheckbox'],  regularCheckbox: SC.CheckboxView.extend({  layout: { width: 120, height: 16, centerX: -70, centerY: 0 },  title: 'Check Me'  }),  iconCheckbox: SC.CheckboxView.extend({  icon: 'sc-icon-bookmark-16',  layout: { width: 120, height: 16, centerX: 70, centerY: 0 },  title: 'Bookmark It'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularCheckbox', 'iconCheckbox'],  regularCheckbox: SC.CheckboxView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 120, height: 14, centerX: -70, centerY: 0 },  title: 'Check Me'  }),  iconCheckbox: SC.CheckboxView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  icon: '/static/sproutcore/showcase/en/current/source/resources/images/alarm-clock.png?1372933691',  layout: { width: 120, height: 14, centerX: 70, centerY: 0 },  title: 'Save Alarm'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'States',
        example: "SC.View.extend({  childViews: ['mixedCheckbox', 'disabledCheckbox'],  mixedCheckbox: SC.CheckboxView.extend({  layout: { width: 120, height: 16, centerX: -70, centerY: 0 },  title: 'Mixed State',  toggleOnValue: 'a',  value: ['a', 'b']  }),  disabledCheckbox: SC.CheckboxView.extend({  isEnabled: false,  layout: { width: 120, height: 16, centerX: 70, centerY: 0 },  title: 'Disabled'  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.mixedCheckbox.value', ['a', 'b']);
        },
        supportTitle: 'Reset Mixed Value'
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/container_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ContainerView.
*/
Showcase.containerViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  })  });",
        supportAction: function() {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      })
    ],
    exampleHeight: 300
  })
});

/* >>>>>>>>>> BEGIN source/views/date_field_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DateFieldView.
*/
Showcase.dateFieldViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatDate: '%b | %d | %Y',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  value: SC.DateTime.create()  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Date and Time',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  showTime: true,  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatDateTime: '%y-%m-%d @ %H:%M',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  showTime: true,  value: SC.DateTime.create()  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Time Only',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  showDate: false,  showTime: true,  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatTime: '%Hh%Mm%Ss',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  showDate: false,  showTime: true,  value: SC.DateTime.create()  })  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/disclosure_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DisclosureView.
*/
Showcase.disclosureViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.DisclosureView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  title: function() {  return this.get('value') ? 'Collapse something' : 'Expand something';  }.property('value').cacheable()  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/grid_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DisclosureView.
*/
Showcase.gridViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.GridView.extend({  columnWidth: 120,  rowHeight: 58,  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  layout: { left: 20, right: 20, top: 20, bottom: 20 },  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView.content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView.content.title')  })  })  })"
      }),

      Showcase.ViewsItemContent.create({
        title: 'Scrollable with Minimum Width',
        example: "SC.ScrollView.extend({ layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView: SC.GridView.extend({  columnWidth: 200,  rowHeight: 200,  layout: { minWidth: 600 },  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView.content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView.content.title')  })  })  })  })"
      })
    ],
    exampleHeight: 360
  })
});

/* >>>>>>>>>> BEGIN source/views/image_button_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ImageButtonView.
*/
Showcase.imageButtonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ImageButtonView.extend({  classNames: ['my-image-button'],  layout: { width: 56, height: 56, centerX: 0, centerY: 0 },  image: 'sc-icon-alert-48'  });"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/image_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ImageView.
*/
Showcase.imageViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular (Fill)',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'No Scaling',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Best Fit Scaling',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.BEST_FIT,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.BEST_FIT,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Best Fit Scaling Down Only',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Fill Proportionally',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.FILL_PROPORTIONALLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.FILL_PROPORTIONALLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Top Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_TOP_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_TOP,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_TOP_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Middle Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Bottom Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_BOTTOM_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_BOTTOM,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_BOTTOM_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      })
    ],
    exampleHeight: 256
  })
});

/* >>>>>>>>>> BEGIN source/views/label_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_item_view.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.LabelView.
*/
Showcase.labelViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    action: 'beginEditing',
    isSelectable: false,
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  layout: { width: 220, height: 16, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: 'sc-icon-document-16',  layout: { width: 220, height: 16, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Tiny',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 220, height: 11, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: '/static/sproutcore/showcase/en/current/source/resources/images/bullet.png?1372933691',  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 220, height: 11, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 220, height: 15, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: '/static/sproutcore/showcase/en/current/source/resources/images/grey-dot.png?1372933691',  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 220, height: 15, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: 'sc-icon-folder-24',  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Inline Editing',
        example: "SC.LabelView.extend({  classNames: ['my-label-view'],  isEditable: true,  layout: { width: 300, height: 16, centerX: 0, centerY: 0 },  value: 'Double-click this label to edit inline.'  })",
        supportAction: function() {
          var label = this.getPath('parentView.exampleBox.contentView');
          label.beginEditing();
        },
        supportTitle: 'Manually Start Editing'
      })
    ],

    exampleView: Showcase.ViewsItemView.extend({
      beginEditing: function() {
        var label = this.getPath('exampleBox.contentView.regularLabel');
        label.beginEditing();
      }
    })
  })
});

/* >>>>>>>>>> BEGIN source/views/list_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ListView.
*/
Showcase.listViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.ListView.extend({  classNames: ['my-list-view'],  rowHeight: 48,  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  hasContentRightIcon: true,  contentCheckboxKey: 'isSelected',  contentIconKey: 'icon',  contentRightIconKey: 'rightIcon',  contentValueKey: 'title'  })  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Editable',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.ListView.extend({  canDeleteContent: true,  canEditContent: true,  canReorderContent: true,  classNames: ['my-list-view'],  rowHeight: 48,  contentBinding: SC.Binding.oneWay('Showcase.editableCollectionItems'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  hasContentRightIcon: true,  contentCheckboxKey: 'isSelected',  contentIconKey: 'icon',  contentRightIconKey: 'rightIcon',  contentValueKey: 'title'  })  })  })",
        supportAction: function() {
          Showcase.propertyDidChange('editableCollectionItems');
        },
        supportTitle: 'Reset Content'
      })
    ],
    exampleHeight: 420
  })
});

/* >>>>>>>>>> BEGIN source/views/popup_button_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.PopupButtonView.
*/
Showcase.popupButtonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.PopupButtonView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  menu: SC.MenuPane.extend({  layout: { width: 250 },  items: [  { title: 'Menu Item', keyEquivalent: 'ctrl_shift_n', shortcut: '⌃⇧N' },  { separator: true },  { title: 'Checked Menu Item', checkbox: true, keyEquivalent: 'ctrl_a', shortcut: '⌃A' },  { separator: true },  { title: 'Menu Item with Icon', icon: 'sc-icon-group-16' }  ]  }),  title: 'View Menu'  })"
      })
    ]
  })
});

//selectedItem: function(key, value) {  if (SC.none(value)) { value = this.get('items').objectAt(3); }  return value;  }.property().cacheable(0)

/* >>>>>>>>>> BEGIN source/views/progress_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ProgressView.
*/
Showcase.progressViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ProgressView.extend({  layout: { width: 150, height: 20, centerX: 0, centerY: 0 },  increment: function() {  this.incrementProperty('value', 0.01);  if (this.get('value') > 1.25) { this.set('value', 0); }  },  init: function() {  arguments.callee.base.apply(this,arguments);  SC.Timer.schedule({  action: 'increment', target: this, interval: 30, repeats: true  });  }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Indeterminate',
        example: "SC.ProgressView.extend({  layout: { width: 150, height: 20, centerX: 0, centerY: 0 },  isIndeterminate: YES,  isRunning: YES  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/radio_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.RadioView.
*/
Showcase.radioViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.RadioView.extend({  layout: { width: 100, height: 60, centerX: 0, centerY: 0 },  items: [{ title: 'Trash', value: 'trash', enabled: true, icon: 'sc-icon-trash-16' }, { title: 'Info', value: 'info', enabled: true, icon: 'sc-icon-info-16'}, { title: 'Disabled', value: 'disabled', enabled: false, icon: 'sc-icon-favorite-16'}],  value: 'trash',  itemTitleKey: 'title',  itemValueKey: 'value',  itemIconKey: 'icon',  itemIsEnabledKey: 'enabled'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Horizontal',
        example: "SC.RadioView.extend({  layout: { width: 300, height: 20, centerX: 0, centerY: 0 },  items: [{ title: 'Trash', value: 'trash', enabled: true, icon: 'sc-icon-trash-16' }, { title: 'Info', value: 'info', enabled: true, icon: 'sc-icon-info-16'}, { title: 'Disabled', value: 'disabled', enabled: false, icon: 'sc-icon-favorite-16'}],  value: ['info', 'disabled'],  itemTitleKey: 'title',  itemValueKey: 'value',  itemIconKey: 'icon',  itemIsEnabledKey: 'enabled',  layoutDirection: SC.LAYOUT_HORIZONTAL  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.value', ['info', 'disabled']);
        },
        supportTitle: 'Reset Value'
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/scroll_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ScrollView.
*/
Showcase.scrollViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { centerX: 0, centerY: 0, height: 220, width: 220 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabling Scrollers',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasHorizontalScroller: NO,  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasHorizontalScroller: NO,  hasVerticalScroller: NO,  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasVerticalScroller: NO,  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  })  })"
      })
      // Turn these on when alignment works.
      // Showcase.ViewsItemContent.create({
      //   title: 'Top Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Middle Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Bottom Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // })
    ],
    exampleHeight: 256
  })
});

/* >>>>>>>>>> BEGIN source/views/segmented_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SegmentedView.
*/
Showcase.segmentedViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['First', 'Second', 'Third'],  value: ['Third']  }),  objects: SC.SegmentedView.extend({  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Apple',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691'  }, {  title: 'Orange',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691'  }, {  title: 'Grape',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691'  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 300, height: 18, centerX: 0, centerY: -14 },  items: ['Itsy', 'Bitsy', 'Spider'],  value: ['Spider']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 18, centerX: 0, centerY: 14 },  items: [{  title: 'Exceeds',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/green-dot.png?1372933691'  }, {  title: 'Meets',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/grey-dot.png?1372933691'  }, {  title: 'Below',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/red-dot.png?1372933691'  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 300, height: 30, centerX: 0, centerY: -20 },  items: ['Français', 'Español', 'Deutsch'],  value: ['Deutsch']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 30, centerX: 0, centerY: 20 },  items: [{  title: 'Apple',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691'  }, {  title: 'Orange',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691'  }, {  title: 'Grape',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691'  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 300, height: 44, centerX: 0, centerY: -27 },  items: ['Strength', 'Agility', 'Healing'],  value: ['Healing']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 360, height: 44, centerX: 0, centerY: 27 },  items: [{  title: 'Chat',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/balloon.png?1372933691'  }, {  title: 'FaceBook',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/balloon-facebook.png?1372933691'  }, {  title: 'Twitter',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/balloon-twitter.png?1372933691'  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Vertical',
        example: "SC.View.extend({  childViews: ['regular', 'large'],  regular: SC.SegmentedView.extend({  layout: { width: 120, height: 72, centerX: -70, centerY: 0 },  layoutDirection: SC.LAYOUT_VERTICAL,  items: ['Top', 'Middle', 'Bottom'],  value: ['Top']  }),  large: SC.SegmentedView.extend({  layout: { width: 120, height: 60, centerX: 70, centerY: 0 },  controlSize: SC.LARGE_CONTROL_SIZE,  itemTitleKey: 'title',  itemValueKey: 'title',  itemActionKey: 'action',  layoutDirection: SC.LAYOUT_VERTICAL,  items: [{  title: 'Up', action: 'goUp'  }, {  title: 'Down', action: 'goDown'  }]  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  isEnabled: false,  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['Red', 'White', 'Black'],  value: ['Red']  }),  objects: SC.SegmentedView.extend({  itemIsEnabledKey: 'isEnabled',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Badger',  isEnabled: true }, {  title: 'Ferret',  isEnabled: false  }, {  title: 'Weasle'  }, {  title: 'Wolverine', isEnabled: false  }]  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Allows Empty Selection',
        example: "SC.SegmentedView.extend({  allowsEmptySelection: true,  layout: { width: 300, height: 24, centerX: 0, centerY: 0 },  items: ['Canada', 'United States', 'Mexico'],  value: ['Canada']  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Allows Multiple Selection',
        example: "SC.SegmentedView.extend({  allowsMultipleSelection: true,  layout: { width: 500, height: 24, centerX: 0, centerY: 0 },  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'title', items: [{  title: 'Celtics',  width: 100 }, {  title: 'Raptors',  width: 100  }, {  title: 'Knicks',  width: 100  }, {  title: 'Nets',  width: 100  }, {  title: '76ers',  width: 100  }],  value: ['76ers', 'Raptors']  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Automatic Overflow Menu',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  allowsEmptySelection: true,  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'],  value: ['Venus']  }),  objects: SC.SegmentedView.extend({  allowsMultipleSelection: true,  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 400, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Porifera',  width: 100 }, {  title: 'Radiata',  width: 100 }, {  title: 'Bilateria',  width: 100 }, {  title: 'Deuterostomes',  width: 100 }, {  title: 'Ecdysozoa',  width: 100  }, {  title: 'Platyzoa', width: 100  }, {  title: 'Lophotrochozoa', width: 100  }]  })  })",
        supportAction: function() {
          var view1, view2;

          view1 = this.getPath('parentView.exampleBox.contentView.regular');
          view2 = this.getPath('parentView.exampleBox.contentView.objects');
          if (view1.get('layout').width === 300) {
            view1.adjust({width: 150});
            view2.adjust({width: 200});
          } else {
            view1.adjust({width: 300});
            view2.adjust({width: 400});
          }

          SC.RunLoop.begin().end();

          view1.remeasure();
          view2.remeasure();
        },
        supportTitle: 'Toggle Width'
      })
    ],
    exampleHeight: 200
  })
});

/* >>>>>>>>>> BEGIN source/views/select_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SelectView.
*/
Showcase.selectViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SelectView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Sausage' },  { title: 'Ham' },  { separator: true },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ]  })",
        supportAction: function() {
          var view = this.getPath('parentView.exampleBox.contentView'),
              items = view.get('items'),
              value = view.get('value');

          if (value === 'Bacon') view.set('value', 'Ham');
          else if (value === 'Ham') view.set('value', 'Sausage');
          else if (value === 'Sausage') view.set('value', 'Apple');
          else if (value === 'Apple') view.set('value', 'Orange');
          else if (value === 'Orange') view.set('value', 'Grape');
          else if (value === 'Grape') view.set('value', 'Lime');
          else view.set('value', 'Bacon');
        },
        supportTitle: 'Set Value to Next'
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Tiny',
      //   example: "SC.SelectView.extend({  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Small',
      //   example: "SC.SelectView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Large',
      //   example: "SC.SelectView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Huge',
      //   example: "SC.SelectView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Jumbo',
      //   example: "SC.SelectView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ],  value: 'Grape'  })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.SelectView.extend({  isEnabled: false,  layout: { width: 150, height: 24, centerX: -85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' }  ]  }),  view2:  SC.SelectView.extend({  layout: { width: 150, height: 24, centerX: 85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham', isEnabled: false },  { title: 'Sausage' },  { separator: true },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691', isEnabled: false },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691', isEnabled: false },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ], value: 'Lime'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Sorting',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.SelectView.extend({  disableSort: false,  layout: { width: 150, height: 24, centerX: -85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Sausage' },  { title: 'Ham' },  { title: 'Orange', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691' },  { title: 'Apple', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691' },  { title: 'Grape', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691' },  { title: 'Lime', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691' }  ]  }),  view2: SC.SelectView.extend({  disableSort: false,  layout: { width: 150, height: 24, centerX: 85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  itemSortKey: 'pos',  items: [  { title: 'Bacon - 7', pos: 7 },  { title: 'Ham - 6', pos: 6 },  { title: 'Sausage - 8', pos: 8 },  { separator: true,  pos: 5 },  { title: 'Apple - 2', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691', pos: 2 },  { title: 'Orange - 0', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691', pos: 0 },  { title: 'Grape - 1', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691', pos: 1 },  { title: 'Lime - 3', icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-lime.png?1372933691', pos: 3 }  ]  })  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/slider_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SliderView.
*/
Showcase.sliderViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SliderView.extend({  layout: { width: 250, height: 18, centerX: 0, centerY: 0 } })"
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Tiny',
      //   example: "SC.SliderView.extend({  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.SliderView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 250, height: 16, centerX: 0, centerY: 0 } })"
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Large',
      //   example: "SC.SliderView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Huge',
      //   example: "SC.SliderView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.SliderView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 250, height: 24, centerX: 0, centerY: 0 } })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Continuous',
        example: "SC.SliderView.extend({  layout: { width: 250, height: 18, centerX: 0, centerY: 0 },  step: 0 })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/source_list_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SourceListView.
*/
Showcase.sourceListViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SourceListView.extend({  classNames: ['my-source-list-view'],  layout: { bottom: 20, left: 20, right: 20, top: 20 },  contentBinding: SC.Binding.oneWay('Showcase.sourceListTree'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  contentIconKey: 'icon',  contentUnreadCountKey: 'count',  contentValueKey: 'name'  }),  groupExampleView: SC.ListItemView.extend({  contentValueKey: 'groupName'  })  })"
      })
    ],
    exampleHeight: 575
  })
});

/* >>>>>>>>>> BEGIN source/views/split_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SplitView.
*/
Showcase.splitViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SplitView.extend({  layout: { top: 20, bottom: 20, left: 20, right: 20 },  topLeftView: SC.LabelView.design({  value: 'Left View'  }),  bottomRightView: SC.LabelView.design({  value: 'Right View'  })  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/stacked_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.StackedView.
*/
Showcase.stackedViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.StackedView.extend({  classNames: ['my-stacked-view'],  content: ['These rows have statically laid out content with random heights.  Selecting a row causes the row to re-render and change its height.',1,2,3,4,5,6],  exampleView: SC.View.extend({  displayProperties: ['isSelected'],  useStaticLayout: true,  render: function(context) {  context.setClass('sel', this.get('isSelected'));  context.push('<div style=\"height: ' + (20 + Math.round((Math.random() * 100))) + 'px;\">' + this.get('content') + '</div>');  }  }),  selectionDidChange: function() {  this.updateHeight(false);  }.observes('selection')  })  })"
      })
    ],
    exampleHeight: 420
  })
});

/* >>>>>>>>>> BEGIN source/views/static_content_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.StaticContentView.
*/
Showcase.staticContentViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.StaticContentView.extend({  classNames: ['my-static-content-view'],  content: \"<header><div class=\'note\'>This is an example of static content.</div><h1><img src='/static/sproutcore/showcase/en/current/source/resources/images/logo.png?1372933691'></h1></header><section class='body'><p>SproutCore is the most complete JavaScript Application Development framework.  Some of the many features include:</p><ul><li>Key-Value Observing and Binding</li><li>MVC + Statecharts + Data Store</li><li>A large suite of pre-configured Views and Controls</li><li>Build tools for optimization and auto-spriting</li></ul></section>\",  tagName: 'section' })"
      })
    ],
    exampleHeight: 360
  })
});

/* >>>>>>>>>> BEGIN source/views/tab_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.TabView.
*/
Showcase.tabViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.TabView.extend({  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Apple',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691',  value: 'Showcase.blueTabView'  },  {  title: 'Orange',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691',  value: 'Showcase.greenTabView'  },  {  title: 'Grape',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691',  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.TabView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.blueTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 18,  items: [{  title: 'Exceeds',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/green-dot.png?1372933691',  value: 'Showcase.blueTabView'  },  {  title: 'Meets',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/grey-dot.png?1372933691',  value: 'Showcase.greenTabView'  },  {  title: 'Below',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/red-dot.png?1372933691',  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.TabView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.pinkTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 30,  items: [{  title: 'Apple',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit.png?1372933691',  value: 'Showcase.blueTabView'  },  {  title: 'Orange',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-orange.png?1372933691',  value: 'Showcase.greenTabView'  },  {  title: 'Grape',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/fruit-grape.png?1372933691',  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.TabView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 44,  items: [{  title: 'FaceBook',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/balloon-facebook.png?1372933691',  value: 'Showcase.blueTabView'  },  {  title: 'Twitter',  icon: '/static/sproutcore/showcase/en/current/source/resources/images/balloon-twitter.png?1372933691',  value: 'Showcase.greenTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Top Toolbar Location',
        example: "SC.TabView.extend({  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.orangeTabView',  tabLocation: SC.TOP_TOOLBAR_LOCATION,  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Infants',  value: 'Showcase.blueTabView'  },  {  title: 'Toddlers',  value: 'Showcase.greenTabView'  },  {  title: 'Tweens',  value: 'Showcase.pinkTabView'  },  {  title: 'Teens',  value: 'Showcase.grayTabView'  },  {  title: 'Adults',  value: 'Showcase.orangeTabView'  },  {  title: 'Seniors',  value: 'Showcase.purpleTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Bottom Location',
        example: "SC.TabView.extend({  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.grayTabView',  tabLocation: SC.BOTTOM_LOCATION,  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Elements',  value: 'Showcase.blueTabView'  },  {  title: 'Resources',  value: 'Showcase.greenTabView'  },  {  title: 'Network',  value: 'Showcase.pinkTabView'  },  {  title: 'Scripts',  value: 'Showcase.grayTabView'  },  {  title: 'Timeline',  value: 'Showcase.orangeTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.TabView.extend({  itemIsEnabledKey: 'isEnabled',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Badger',  isEnabled: true,  value: 'Showcase.blueTabView' },   {  title: 'Ferret',  isEnabled: false,  value: 'Showcase.greenTabView'  },  {  title: 'Weasle',  value: 'Showcase.pinkTabView'  },  {  title: 'Wolverine', isEnabled: false,  value: 'Showcase.grayTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Automatic Overflow Menu',
        example: "SC.TabView.extend({  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.redTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Porifera',  width: 100,  value: 'Showcase.blueTabView' },  {  title: 'Radiata',  width: 100,  value: 'Showcase.greenTabView' },  {  title: 'Bilateria',  width: 100,  value: 'Showcase.pinkTabView' },  {  title: 'Deuterostomes',  width: 100,  value: 'Showcase.grayTabView' },  {  title: 'Ecdysozoa',  width: 100,  value: 'Showcase.orangeTabView'  },  {  title: 'Platyzoa', width: 100,  value: 'Showcase.purpleTabView'  },  {  title: 'Lophotrochozoa', width: 100,  value: 'Showcase.redTabView'  }]  })"
      })
    ],
    exampleHeight: 360
  })
});

/* >>>>>>>>>> BEGIN source/views/text_field_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_item_view.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.TextFieldView.
*/
Showcase.textFieldViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.TextFieldView.extend({  layout: { width: 250, height: 32, centerX: 0, centerY: 0 },  value: 'Hector Montegno'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Password',
        example: "SC.TextFieldView.extend({  classNames: ['my-password-field'],  layout: { width: 250, height: 48, centerX: 0, centerY: 0 },  type: 'password',  value: 'er*3oI--%Vzdo2!W'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Multi-line',
        example: "SC.TextFieldView.extend({  isTextArea: true,  layout: { width: 250, height: 80, centerX: 0, centerY: 0 },  value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'With Hint',
        example: "SC.TextFieldView.extend({  hint: 'Your given name',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Accessory Views',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.TextFieldView.extend({  hint: 'What are you doing tonight?',  layout: { width: 250, height: 24, centerX: -135, centerY: 0 },  leftAccessoryView: SC.ImageView.extend({  value: '/static/sproutcore/showcase/en/current/source/resources/images/balloon.png?1372933691',  layout: { left: 4, top: 4, width: 16, height: 16 }  })  }),  view2: SC.TextFieldView.extend({  layout: { width: 250, height: 24, centerX: 135, centerY: 0 },  rightAccessoryView: SC.ImageView.extend({  value: '/static/sproutcore/showcase/en/current/source/resources/images/calendar-insert.png?1372933691',  layout: { right: 4, top: 4, width: 16, height: 16 }  }),  value: 'Meeting @ 7PM'  })  })"
      }),
      // This will be more useful with email validation
      // Showcase.ViewsItemContent.create({
      //   title: 'Email',
      //   example: "SC.TextFieldView.extend({  layout: { width: 250, height: 24, centerX: 0, centerY: 0 },  type: 'email',  value: 'admin@sproutcore.com'  })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'No Spellcheck',
        example: "SC.TextFieldView.extend({  autoCorrect: false,  hint: 'Many browsers support spellcheck',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'No Auto-capitalize (iOS)',
        example: "SC.TextFieldView.extend({  autoCapitalize: false,  hint: 'iOS supports autocapitalize',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      })
    ]
  })
});

/* >>>>>>>>>> BEGIN source/views/toolbar_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ToolbarView.
*/
Showcase.toolbarViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['toolbar1', 'toolbar2'],  classNames: ['my-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  toolbar1: SC.ToolbarView.extend({  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Heading'  })  }),  toolbar2: SC.ToolbarView.extend({  anchorLocation:  SC.ANCHOR_BOTTOM,  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Footing'  })  })  })"
      })
    ],
    exampleHeight: 500
  })
});

/* >>>>>>>>>> BEGIN source/views/web_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WebView.
*/
Showcase.webViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.WebView.extend({  classNames: ['my-web-view'],  layout: { left: 20, top: 20, right: 20, bottom: 20 },  value: 'http://sproutcore.com' })",
        supportAction: function() {
          var view = this.getPath('parentView.exampleBox.contentView')
              value = view.get('value');

          if (value === 'http://sproutcore.com') view.set('value', 'http://docs.sproutcore.com');
          else view.set('value', 'http://sproutcore.com');
        },
        supportTitle: 'Toggle Value'

      })
    ],
    exampleHeight: 500
  })
});

/* >>>>>>>>>> BEGIN source/views/well_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WellView.
*/
Showcase.wellViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.WellView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  })  });",
        supportAction: function() {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      })
    ],
    exampleHeight: 315
  })
});

/* >>>>>>>>>> BEGIN source/views/workspace_views.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WorkspaceView.
*/
Showcase.workspaceViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular (Resize to change toolbar size)',
        example: "SC.WorkspaceView.extend({  autoResizeToolbars: true,  classNames: ['my-workspace-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  topToolbar: SC.ToolbarView.extend({  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Heading'  })  }),  bottomToolbar: SC.ToolbarView.extend({  anchorLocation:  SC.ANCHOR_BOTTOM,  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Footing'  })  }),  contentView: SC.LabelView.extend({  classNames: ['my-content-label'],  value: 'Content'  })  })"
      })
    ],
    exampleHeight: 500
  })
});

/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


// This page describes the main user interface for your application.
Showcase.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['header', 'masterDetail'],

    header: SC.View.design({
      layout: { borderBottom: 1, height: 50, zIndex: 999 },
      tagName: 'header',
      render: function(context, firstTime) {
        context.attr('role', 'banner');
        context.push('<div class="container"><h1 id="logo"><a href="http://www.sproutcore.com"><img src="' + '/static/sproutcore/showcase/en/current/source/resources/images/logo.png?1372933691' + '" alt="SproutCore"></a></h1><nav role="navigation"><ul><li><a href="http://www.sproutcore.com/about/">About</a></li><li class="active"><a href="/">Showcase</a></li><li><a href="http://guides.sproutcore.com">Guides</a></li><li><a href="http://docs.sproutcore.com">Docs</a></li><li><a href="http://www.sproutcore.com/community/">Community</a></li><li><a href="http://blog.sproutcore.com">Blog</a></li></ul></nav></div>');
      }
    }),

    masterDetail: SC.MasterDetailView.design({
      layout: { top: 51 },

      masterView: SC.ScrollView.design({

        contentView: SC.SourceListView.design({
          classNames: ['main-source-list'],
          contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.arrangedObjects'),
          contentValueKey: 'name',
          selectionBinding: SC.Binding.from('Showcase.sourceTreeController.selection')
        })
      }),

      detailView: SC.ContainerView.design({
        nowShowing: 'Showcase.mainPage.welcomeView',
        nowShowingBinding: SC.Binding.notEmpty('Showcase.sourceController.view', 'Showcase.mainPage.welcomeView')
      })
    })
  }),

  welcomeView: SC.StaticContentView.design({
    classNames: ['welcome-view'],
    content: "<h1>SproutCore Showcase</h1>" +
          "<h2>Demos</h2>" +
          "<p>The showcase demos were built to illustrate some of the powerful concepts within SproutCore.  Each demo is a SproutCore app and you can find the source for each demo on <a href=\"https://github.com/sproutcore/demos\" target=\"_blank\" title=\"Demos Source on Github\">Github</a>.</p>" +
          "<h2>Views &amp; Controls</h2>" +
          "<p>SproutCore is bundled with a wide array of controls for you to use within your own applications.  This allows you to build a fully functioning professional looking application very quickly and to iteratively apply a unique theme as you go.</p>" +
          "<p>Select a class name on the left to view examples of each view, including the code used.</p>" +
          "<footer>Some icons by <a href=\"http://p.yusukekamiyamane.com/\">Yusuke Kamiyamane</a>. All rights reserved.</footer>"
  }),

  demoView: SC.WebView.design({
    valueBinding: SC.Binding.oneWay('Showcase.sourceController.appPath')
  })

});

/* >>>>>>>>>> BEGIN source/resources/views_page.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


Showcase.viewsPage = SC.Page.create({

  buttonViews: Showcase.buttonViews,

  checkboxViews: Showcase.checkboxViews,

  containerViews: Showcase.containerViews,

  dateFieldViews: Showcase.dateFieldViews,

  disclosureViews: Showcase.disclosureViews,

  gridViews: Showcase.gridViews,

  imageButtonViews: Showcase.imageButtonViews,

  imageViews: Showcase.imageViews,

  labelViews: Showcase.labelViews,

  listViews: Showcase.listViews,

  popupButtonViews: Showcase.popupButtonViews,

  progressViews: Showcase.progressViews,

  radioViews: Showcase.radioViews,

  scrollViews: Showcase.scrollViews,

  segmentedViews: Showcase.segmentedViews,

  selectViews: Showcase.selectViews,

  sliderViews: Showcase.sliderViews,

  sourceListViews: Showcase.sourceListViews,

  splitViews: Showcase.splitViews,

  stackedViews: Showcase.stackedViews,

  staticContentViews: Showcase.staticContentViews,

  tabViews: Showcase.tabViews,

  textFieldViews: Showcase.textFieldViews,

  toolbarViews: Showcase.toolbarViews,

  webViews: Showcase.webViews,

  wellViews: Showcase.wellViews,

  workspaceViews: Showcase.workspaceViews

});

/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Showcase
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Showcase */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Showcase.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably
  // create multiple pages and panes.
  Showcase.getPath('mainPage.mainPane').append();

  Showcase.sourceTreeController.set('content', Showcase.sources);

  SC.routes.add(':section/:key', Showcase, Showcase.route);
};

function main() { Showcase.main(); }

