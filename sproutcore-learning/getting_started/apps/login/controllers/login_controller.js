// ==========================================================================
// Project:   Login.loginController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Login */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Login.loginController = SC.ObjectController.create(
/** @scope Login.loginController.prototype */ {

	username : '',
	password: '',
	errorMessage: '',
	isLoggingIn: NO,
	onLoginGoToPagePaneName: 'mainPage.mainPane',

	beginLogin:function(){
			try {
				var username = this.get('username');
				if(username == null || username == '')
				{
					throw SC.Error.desc('Username Required');
				}
				var password = this.get('password');
				if(password == null || password == '')
				{
					 throw SC.Error.desc('Pasword Required');
				}
				this.set('isLoggingIn',YES);

				var url  = '/login/index.html';
				if( username != 'admin' || password != 'admin')
				{
					url = '/login/bad_url.js';
				}

				SC.Request.getUrl(url).notify(this,'endLogin').send();
				return YES;
			}
			catch(err){

				this.set('errorMessage',err.message);
				this.set('isLoggingIn',No);
				return NO;
			}
		},
		endLogin : function(response){
			try
			{
				this.set('isLoggingIn',NO);
				SC.Logger.info('HTTP Status Code:'+ response.status);
				if(!SC.ok(response))
				{
					throw SC.Error.desc('Invalid username or password. Try admin/admin');
				}
				this.set('errorMessage','');

				var pagePaneName = Login.loginController.get('onLoginGoToPagePaneName');
				if(pagePaneName != null && pagePaneName != '')
				{
					var pane;
					pane =  Login.getPath('loginPage.loginPane');
					pane.remove();
					pane =  Login.getPath(pagePaneName);
					pane.append();
				}
			}
			catch(err)
			{
				this.set('errorMessage',err.message);
			}
		}

  // TODO: Add your own code here.

});
