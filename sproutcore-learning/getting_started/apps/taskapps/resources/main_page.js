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