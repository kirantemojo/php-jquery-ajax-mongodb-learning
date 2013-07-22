Login.loginPage = SC.Page.design({
	loginPane: SC.MainPane.design({
		layout: { width: 360, height: 125, centerX: 0, centerY: 0 },
    	classNames: ['login-pane'],
    	childViews: 'boxView'.w(),

    	boxView:SC.View.design({
    		childViews: 'username password loginButton loadingImage errorMessage'.w(),

    		username: SC.View.design({
		        layout: { left: 17, right: 14, top: 17, height: 26 },
		        childViews: 'label field'.w(),

		        label: SC.LabelView.design({
		          layout: { left: 0, width: 77, height: 18, centerY: 0 },

		          value: '_Username',
		          localize: YES,
		          textAlign: SC.ALIGN_RIGHT
		        }),

			     field: SC.TextFieldView.design({
			     	layout: { width: 230, height: 22, right: 3, centerY: 0 },

			     	isEnabledBinding: SC.Binding.from("Login.loginController.isLoggingIn").bool().transform(function(val,isForward){
			     		return !val;
			     	}),
			     	valueBinding : "Login.loginController.username"
			     })

    		}),

    		password: SC.View.design({
		        layout: { left: 17, right: 14, top: 45, height: 26 },
		        childViews: 'label field'.w(),

		        label: SC.LabelView.design({
		          layout: { left: 0, width: 77, height: 18, centerY: 0 },

		          value: '_Password',
		          localize: YES,
		          textAlign: SC.ALIGN_RIGHT
		        }),

		        field: SC.TextFieldView.design({
		          layout: { width: 230, height: 22, right: 3, centerY: 0 },

		          isPassword: YES,
		          isEnabledBinding: SC.Binding.from("Login.loginController.isLoggingIn")
		            .bool()
		            .transform(function(value, isForward) {
		            return !value;
		          }),
		          valueBinding: 'Login.loginController.password'
		        })
		      }),

    		loginButton: SC.ButtonView.design({
		        layout: { height: 24, width: 80, bottom: 17, right: 17 },
		        title: '_Login',
		        localize: YES,
		        isDefault: YES,
		        isEnabledBinding: SC.Binding.from("Login.loginController.isLoggingIn")
		          .bool()
		          .transform(function(value, isForward) {
		          return !value;
		        }),

		        target: 'Login.loginController',
		        action: 'beginLogin'
		      }),

		      loadingImage: SC.ImageView.design({
		        layout: { width: 16, height: 16, bottom: 20, right: 110 },
		        value: '',
		        useImageCache: NO,
		        isVisibleBinding: 'Login.loginController.isLoggingIn'
		      }),

		      errorMessage: SC.LabelView.design({
		        layout: { height: 40, width: 230, right: 120, bottom: 7 },
		        classNames: ['error-message'],

		        valueBinding: 'Login.loginController.errorMessage'
		      })
		})
	})
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('login');