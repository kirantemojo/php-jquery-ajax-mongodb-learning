Taskapps.main = function main(){
	//Taskapps.getPath('mainPage.mainPane').append();
	var statechart = Taskapps.statechart;
	SC.RootResponder.responder.set('defaultResponder',statechart);
	statechart.initStatechart();
};

function main(){ Taskapps.main(); }; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('taskapps');