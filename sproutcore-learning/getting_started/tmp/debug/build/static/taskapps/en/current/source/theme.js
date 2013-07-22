Taskapps.Theme = SC.AceTheme.create({
	name : 'taskapps'
});
SC.Theme.addTheme(Taskapps.Theme);
SC.defaultTheme = 'taskapps';; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('taskapps');