/* >>>>>>>>>> BEGIN source/core.js */
Taskapps = SC.Application.create({
	
	NAMESPACE: 'Taskapps',
	VERSION: '0.1.0',

	store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))
	
});
/* >>>>>>>>>> BEGIN source/controllers/contact.js */
sc_require('core');
Taskapps.contactController = SC.ObjectController.create({
	contentBinding : 'Taskapps.contactsController.selection'
});
/* >>>>>>>>>> BEGIN source/controllers/contacts.js */
sc_require('core');
Taskapps.contactsController = SC.ArrayController.create({

	//orderBy : "name",
	allowMultipleSelection : NO,
	searchTerm : null,
	editContact : function(){
		Taskapps.editPage.get('mainPane').append();
		Taskapps.editPage.mainPane.contentView.name.set('value','');
		Taskapps.editPage.mainPane.contentView.company.set('value','');
		Taskapps.editPage.mainPane.contentView.picture.set('value','');
		return YES;
	},
	updateContact : function(){
		if(Taskapps.contactController.get('name'))
		{
			Taskapps.editEachPage.get('mainPane').append();	
			return YES;
		}
		else
		{
			SC.AlertPane.warn({
			    message: "Edit Item Missing",
			    description: "Please Select an item for Editing",
			    caption: "Try again"
			  }).append();
		}
	},
	submitContact : function(){
		if((this.get('name') !== undefined) || (this.get('desc') !== undefined )||( this.get('pic') !== undefined ))
		{
			var person;
			person = Taskapps.store.createRecord(Taskapps.contacts,{
				"name":this.get('name'),
				"desc":this.get('desc'),
				"pic":this.get('pic')
			});
		}
		Taskapps.editPage.get('mainPane').remove();
		//Taskapps.contactController.get('content').commitRecord();
		return YES;
	},
	submitEditContact : function(){
		var name = Taskapps.editEachPage.mainPane.contentView.name.get('value');
		var desc = Taskapps.editEachPage.mainPane.contentView.company.get('value');
		var pic =  Taskapps.editEachPage.mainPane.contentView.picture.get('value');

		Taskapps.contactController.set({'name':name,'desc':desc,'pic':pic});

		Taskapps.editEachPage.get('mainPane').remove();
		return YES;
	},
	addContact : function()
	{
		this.invokeLater(function(){
			//Taskapps.contactsController.selectObject(person);
			this.editContact();
		});
		return YES;
	},
	performSearch : function(){
				var imageQuery = SC.Query.local(Taskapps.contacts, { conditions: 'name MATCHES {pattern}',
				parameters: { pattern: new RegExp(this.get('searchTerm'),"gi") }
				});
				var images = Taskapps.store.find(imageQuery);
			    Taskapps.contactsController.set('content', images);
	}
	/*
	content: [
		SC.Object.create({ 
			"name" : "Abdul Kalaam ",
			"desc" : "President & Scientist",
			"pic":"http://2.bp.blogspot.com/-5znDyS4wJWQ/UNx0rzTQFjI/AAAAAAAAVM8/ukSvDoeCzZ4/s320/Dr-A-P-J-abdul-Kalam.jpg"
		}),
		SC.Object.create({ 
			"name" : "Gandhiji",
			"desc" : "Mahatma - Father of Nation",
			"pic":"http://4.bp.blogspot.com/_ZUsQcwLWxW4/S7C4wqurBkI/AAAAAAAAAFg/UFrF97E6dJQ/s200/Gandhi.jpg"
		}),
		SC.Object.create({ 
			"name" : "Bhakt Singh",
			"desc" : "God Servant",
			"pic":"http://i1.ytimg.com/vi/5O3hDVW9dPs/hqdefault.jpg"
		})
	]
	*/
});
/* >>>>>>>>>> BEGIN source/models/contacts.js */
sc_require('core');
Taskapps.contacts = SC.Record.extend({
	name : SC.Record.attr(String),
	desc : SC.Record.attr(String),
	pic	: SC.Record.attr(String)
});
/* >>>>>>>>>> BEGIN source/statechart.js */
Taskapps.statechart = SC.Statechart.create({
	trace: YES,
	rootState : SC.State.design({
		initialSubstate : "READY_STATE",
		READY_STATE: SC.State.plugin('Taskapps.READY_STATE'),
		SHOWING_APP: SC.State.plugin('Taskapps.SHOWING_APP')
	})
});
/* >>>>>>>>>> BEGIN source/states/ready_state.js */
Taskapps.READY_STATE = SC.State.design({

	enterState : function(){
		if(SC.instanceOf(Taskapps.store.dataSource,SC.FixturesDataSource))
		{
			//Taskapps.contactsController.set('content',Taskapps.store.find(SC.Query.local(Taskapps.contacts, { orderBy : "name"})));
			Taskapps.contactsController.set('content',Taskapps.store.find(Taskapps.contacts));
		}
	},
	didLoad : function(){
		if(Taskapps.contactsController.get('status') === SC.Record.READY_CLEAN)
		{
			this.gotoState('SHOWING_APP');
		}
	}.stateObserves('Taskapps.contactsController.status'),
	
	exitState : function(){
		Taskapps.getPath('mainPage.mainPane').remove();
	}

});
/* >>>>>>>>>> BEGIN source/states/showing_app.js */
Taskapps.SHOWING_APP = SC.State.design({
	enterState : function(){
		Taskapps.mainPage.get('mainPane').append();
	},
	exitState: function(){

	}
});
/* >>>>>>>>>> BEGIN source/theme.js */
Taskapps.Theme = SC.AceTheme.create({
	name : 'taskapps'
});
SC.Theme.addTheme(Taskapps.Theme);
SC.defaultTheme = 'taskapps';
/* >>>>>>>>>> BEGIN source/views/taskapps.js */
Taskapps.TaskappsView = SC.View.extend({
	contentDisplayProperties: 'name desc pic'.w(),

	render : function(context,firstTime)
	{
		var content = this.get('content');
		var name = content.get('name');
		var desc = content.get('desc');
		var pic = content.get('pic');

		context = context.begin('div').addClass('task-grid-view').push('');
			context = context.begin('div').addClass('face-name').push(name).end();
			context = context.begin('div').addClass('face-company').push(desc).end();
		context = context.end();

		if((pic != undefined) && (pic != ""))
		{
			context = context.begin('div').addClass('face-back').push("<img src='"+pic+"'/>").end();
		}
		arguments.callee.base.apply(this,arguments);
	},
	mouseEntered : function(){
		var jq = this.$();
		jq.find('.task-grid-view').slideDown();
	},
	mouseExited : function(){
		var jq = this.$();
		jq.find('.task-grid-view').slideUp();
	}
});
/* >>>>>>>>>> BEGIN source/resources/edit_page.js */
Taskapps.editPage = SC.Page.design({

  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, centerY: 0, width: 520, height: 200},
    //contentBinding : 'Taskapps.contactsController.content',
    contentView: SC.View.design({
      childViews: 'prompt  nameLabel name companyLabel company pictureLabel picture submitButton'.w(),
      prompt: SC.LabelView.design({
        layout: { top: 12, left: 20, height: 18, right: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Add yourself below"
      }),
      nameLabel: SC.LabelView.design({
        layout: { top: 40, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Name"
      }),
      name: SC.TextFieldView.design({
        layout: { top: 40, left: 140, height: 20, width: 350 },
        hint: "your name goes here",
        //valueBinding: SC.Binding.oneWay("Taskapps.contactController.name")
        valueBinding: "Taskapps.contactsController.name"
      }),
      companyLabel: SC.LabelView.design({
        layout: { top: 70, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Company"
      }),
      company: SC.TextFieldView.design({
        layout: { top: 70, left: 140, height: 20, width: 350 },
        hint: "your company goes here",
        //valueBinding: SC.Binding.oneWay("Taskapps.contactController.desc")
        valueBinding: "Taskapps.contactsController.desc"
      }),
      pictureLabel: SC.LabelView.design({
        layout: { top: 100, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Picture"
      }),
      picture: SC.TextFieldView.design({
        layout: { top: 100, left: 140, height: 20, width: 350 },
        hint: "a url to your picture goes here",
        //valueBinding: SC.Binding.oneWay("Taskapps.contactController.pic")
        valueBinding: "Taskapps.contactsController.pic"
      }),                  
      submitButton: SC.ButtonView.design({
        layout: { bottom: 15, right: 50, width: 80, height: 24 },
        title: "Submit",
        target: 'Taskapps.contactsController',
        action: 'submitContact'
      })     
    })
  })

});

Taskapps.editEachPage = SC.Page.design({

  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, centerY: 0, width: 520, height: 200},
    contentView: SC.View.design({
      childViews: 'prompt  nameLabel name companyLabel company pictureLabel picture submitButton'.w(),
      prompt: SC.LabelView.design({
        layout: { top: 12, left: 20, height: 18, right: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Edit Yourself Below"
      }),
      nameLabel: SC.LabelView.design({
        layout: { top: 40, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Name"
      }),
      name: SC.TextFieldView.design({
        layout: { top: 40, left: 140, height: 20, width: 350 },
        valueBinding: SC.Binding.oneWay('Taskapps.contactController.name')
        //valueBinding: 'Taskapps.contactController.name'
      }),
      companyLabel: SC.LabelView.design({
        layout: { top: 70, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Company"
      }),
      company: SC.TextFieldView.design({
        layout: { top: 70, left: 140, height: 20, width: 350 },
        valueBinding: SC.Binding.oneWay('Taskapps.contactController.desc')
       // valueBinding: 'Taskapps.contactController.desc'
      }),
      pictureLabel: SC.LabelView.design({
        layout: { top: 100, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Picture"
      }),
      picture: SC.TextFieldView.design({
        layout: { top: 100, left: 140, height: 20, width: 350 },
        valueBinding: SC.Binding.oneWay('Taskapps.contactController.pic')
       // valueBinding: 'Taskapps.contactController.pic'
      }),                  
      submitButton: SC.ButtonView.design({
        layout: { bottom: 15, right: 50, width: 80, height: 24 },
        title: "Submit",
        target: 'Taskapps.contactsController',
        action: 'submitEditContact'
      })     
    })
  })

});


/* >>>>>>>>>> BEGIN source/resources/main_page.js */
Taskapps.mainPage = SC.Page.design({
	mainPane: SC.MainPane.design({
		layout : { minWidth:500, minHeight:500},
		childViews : ['header','tasklist','footer'],
		header : SC.ToolbarView.design({
			layout : { right:0,left:0,top:0,height:36},
			childViews : ['title','addbutton','editButton','search'],
			title : SC.LabelView.design({
				classNames : ['welcome-sprout'],
				layout : { left:10, centerY:0, height:24 },
				tagName : "h1",
				value : "Task-app Application"
			}),
			addbutton : SC.ButtonView.design({
				layout : { centerX: 0, centerY: 20, right:20, width:200, height: 24, top:6},
				autoResizePadding :10,
				classNames : ['addButton'],
				title : "Add New Contact",
				target : "Taskapps.contactsController",
				action :"addContact"
			}),
			editButton : SC.ButtonView.design({
				layout : { centerX: 0, centerY: 20, right:240, width:100,height:24,top:6},
				autoResizePadding :10,
				classNames : ['addButton'],
				title : "Edit",
				target : "Taskapps.contactsController",
				action :"updateContact"
			}),
			search : SC.TextFieldView.design({
		        layout : { centerX: 0, centerY: 20, right:360, width:300,height:24,top:6},
		        valueBinding : 'Taskapps.contactsController.searchTerm',
		        hint: "Filter the Text",
		        target : 'Taskapps.contactsController',
		        action : 'performSearch',
		        keyUp : function(e){
						if(e.keyCode)
						{
							Taskapps.contactsController.performSearch();
							return YES;
						}else{
							return NO;
						}
		        }
		      }),
		}),
		tasklist : SC.ScrollView.design({
			layout: { right:0,left:0,bottom:36,top:36},
			hasHorizontalScroller: NO,
			contentView : SC.ListView.design({
				layout : { left:10,right:10,top:10,bottom:10},
				rowHeight : 40,
				canEditContent: true,
				contentBinding : 'Taskapps.contactsController.arrangedObjects',
				exampleView : SC.ListItemView.design({
				  classNames : ['icon-view'],
				  hasContentIcon: true,
				  contentValueKey : 'name',
				  contentIconKey : 'pic'
				}),
				selectionBinding : 'Taskapps.contactsController.selection'
			})
		}),
		footer :  SC.ToolbarView.design({
			layout : { right:0,left:0,bottom:0,height:36},
			childViews : ['end'],
			end : SC.LabelView.design({
				classNames : ['welcome-sprout'],
				layout : { left:10, centerY:0, height:24 },
				tagName : "h1",
				value : "Copyrights - 2013"
			})
		}),
	})
});
/* >>>>>>>>>> BEGIN source/main.js */
Taskapps.main = function main(){
	//Taskapps.getPath('mainPage.mainPane').append();
	var statechart = Taskapps.statechart;
	SC.RootResponder.responder.set('defaultResponder',statechart);
	statechart.initStatechart();
};

function main(){ Taskapps.main(); }
