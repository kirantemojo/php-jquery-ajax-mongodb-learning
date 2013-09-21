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

