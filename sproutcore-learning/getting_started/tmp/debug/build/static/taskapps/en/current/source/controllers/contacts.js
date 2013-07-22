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
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('taskapps');