/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Test */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Test = SC.Application.create(
  /** @scope Test.prototype */ {

  NAMESPACE: 'Test',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures),
  
  MODE_FOO: 0,
  
  MODE_BAR: 1
  
}) ;

/* >>>>>>>>>> BEGIN source/controllers/login_controller.js */
/*globals Test */

Test.loginController = SC.Object.create({
  
  username: null,
  
  password: null,
  
  loggedIn: NO
  
});
/* >>>>>>>>>> BEGIN source/controllers/main_controller.js */
/*globals Test */

Test.mainController = SC.Object.create({
  
  mode: null
  
});
/* >>>>>>>>>> BEGIN source/controllers/statechart_controller.js */
/*globals Test */

Test.statechartController = SC.Object.create(SC.StatechartDelegate, {
  
  lastRouteContext: null,
  
  statechartShouldStateHandleTriggeredRoute: function(statechart, state, context) {
    return Test.loginController.get('loggedIn');
  },
  
  statechartStateCancelledHandlingTriggeredRoute: function(statechart, state, context) {
    this.set('lastRouteContext', context);
    SC.routes.set('location', null);
    statechart.gotoState('loggedOutState');
  }
  
});
/* >>>>>>>>>> BEGIN source/statechart.js */
/*globals Test */

sc_require('controllers/statechart_controller');

Test.statechart = SC.Statechart.create({
  
  trace: YES,
  
  initialState: 'loggedOutState',
  
  delegate: Test.statechartController,
  
  loggedOutState: SC.State.design({
    
    enterState: function() {
      Test.loginPage.get('mainPane').append();
    },
    
    exitState: function() {
      Test.loginPage.get('mainPane').remove();
    },
    
    login: function() {
      Test.loginController.set('loggedIn', YES);
      var del = this.get('statechartDelegate');
      var ctx = del.get('lastRouteContext');
      if (ctx) {
        ctx.retry();
      } else {
        this.gotoState('loggedInState');
      }
    }
    
  }),
  
  loggedInState: SC.State.design({
    
    enterState: function() {
      Test.mainPage.get('mainPane').append();
    },
    
    switchToFooMode: function() {
      this.gotoState('fooState');
    },
    
    switchToBarMode: function() {
      this.gotoState('barState');
    },
    
    initialSubstate: 'fooState',
    
    fooState: SC.State.design({
      
      representRoute: 'foo',
      
      enterState: function() {
        this.set('location', 'foo');
        Test.mainController.set('mode', Test.MODE_FOO);
      }
      
    }),
    
    barState: SC.State.design({

      representRoute: 'bar/:id',
      
      enterState: function() {
        this.set('location', 'bar/4?blah=xml');
        Test.mainController.set('mode', Test.MODE_BAR);
      }
      
    })
    
  })
  
});
/* >>>>>>>>>> BEGIN source/theme.js */
// ==========================================================================
// Project:   Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Test */

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
Test.Theme = SC.AceTheme.create({
  name: 'test'
});

// SproutCore needs to know that your app's theme exists
SC.Theme.addTheme(Test.Theme);

// Setting it as the default theme makes every pane SproutCore
// creates default to this theme unless otherwise specified.
SC.defaultTheme = 'test';

/* >>>>>>>>>> BEGIN source/resources/bar_page.js */
/*globals Test */

Test.barPage = SC.Page.create({
  
  mainView: SC.View.design({
    layout: { top: 0, bottom: 0, left: 0, right: 0 },
    childViews: 'labelView'.w(),
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 24, width: 100 },
      value: 'In Bar Mode'
    })
  })
  
});
/* >>>>>>>>>> BEGIN source/resources/foo_page.js */
/*globals Test */

Test.fooPage = SC.Page.create({
  
  mainView: SC.View.design({
    layout: { top: 0, bottom: 0, left: 0, right: 0 },
    childViews: 'labelView'.w(),
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 24, width: 100 },
      value: 'In Foo Mode'
    })
  })
  
});
/* >>>>>>>>>> BEGIN source/resources/login_page.js */
/*globals Test */

Test.loginPage = SC.Page.create({
  
  mainPane: SC.MainPane.design({
    
    childViews: 'mainView'.w(),
    
    mainView: SC.View.design({
      
      childViews: 'headerView usernameView passwordView footerView'.w(),
      
      layout: { centerX: 0, centerY: 0, width: 300, height: 150 },
      
      headerView: SC.LabelView.design({
        layout: { top: 0, left: 0, right: 0, height: 30 },
        value: 'Login',
        textAlign: SC.ALIGN_CENTER
      }),
      
      usernameView: SC.View.design({
        childViews: 'labelView textfieldView'.w(),
        layout: { top: 30, left: 0, right: 0, height: 30 },
        labelView: SC.LabelView.design({
          layout: { centerX: 0, left: 0, height: 24, width: 80 },
          value: "Username:"
        }),
        textfieldView: SC.TextFieldView.design({
          layout: { centerX: 0, left: 90, right: 0, height: 24 },
          valueBinding: 'Test.loginController.username'
        })
      }),
      
      passwordView: SC.View.design({
        childViews: 'labelView textfieldView'.w(),
        layout: { top: 60, left: 0, right: 0, height: 30 },
        labelView: SC.LabelView.design({
          layout: { centerX: 0, left: 0, height: 24, width: 80 },
          value: "Password:"
        }),
        textfieldView: SC.TextFieldView.design({
          layout: { centerX: 0, left: 90, right: 0, height: 24 },
          valueBinding: 'Test.loginController.password'
        })
      }),
      
      footerView: SC.View.design({
        childViews: 'buttonView'.w(),
        layout: { top: 120, left: 0, right: 0, bottom: 0 },
        buttonView: SC.ButtonView.design({
          layout: { height: 24, width: 80, right: 0, bottom: 0 },
          title: 'Login',
          action: 'login'
        })
      })
      
    })
    
  })
  
});
/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Test - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Test */

Test.mainPage = SC.Page.create({

  fooView: SC.outlet('Test.fooPage.mainView'),
  
  barView: SC.outlet('Test.barPage.mainView'),
  
  emptyView: SC.View.design(),

  mainPane: SC.MainPane.design({
    
    childViews: 'headerView containerView'.w(),
    
    headerView: SC.View.design({
      layout: { top: 0, left: 0, right: 0, height: 50 },
      childViews: 'switchModeView'.w(),
      switchModeView: SC.SegmentedView.design({
        layout: { centerX: 0, centerY: 0, height: 24, width: 100 },
        items: [
          { title: 'Foo', value: Test.MODE_FOO, action: 'switchToFooMode' },
          { title: 'Bar', value: Test.MODE_BAR, action: 'switchToBarMode' }
        ],
        itemTitleKey: 'title',
        itemValueKey: 'value',
        itemActionKey: 'action',
        valueBinding: SC.Binding.oneWay('Test.mainController.mode')
      })
    }),
    
    containerView: SC.ContainerView.design({
      layout: { top: 50, left: 0, right: 0, bottom: 0 },
      contentViewBinding: SC.Binding.transform(function(mode) {
        if (mode === Test.MODE_FOO) return Test.fooPage.get('mainView');
        if (mode === Test.MODE_BAR) return Test.barPage.get('mainView');
        return Test.mainPage.get('emptyView');
      }).oneWay('Test.mainController.mode')
    })
    
  })

});

/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Test */

Test.main = function main() {

  var sc = Test.statechart;
  SC.RootResponder.responder.set('defaultResponder', sc);
  sc.initStatechart();

} ;

function main() { Test.main(); }

