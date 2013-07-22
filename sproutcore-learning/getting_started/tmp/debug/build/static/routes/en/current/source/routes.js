Routes.routes = SC.Object.create({
	currentPagePane : null,

	gotoRoute : function(routeParams){
		var pageName = routeParams.pageName;
		if(pageName == undefined || pageName == ''){
			pageName = "onePage";
		}
		var paneName = routeParams.paneName;
		if(paneName == undefined || pageName == ''){
			paneName = "onePane";
		}
		if(this.currentPagePane != null)
		{
			this.currentPagePane.remove();
		}
		var pagePanePath = pageName +'.'+ paneName;
		var pagePane = Routes.getPath(pagePanePath);
		pagePane.append();
		this.currentPagePane = pagePane;
	}
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('routes');