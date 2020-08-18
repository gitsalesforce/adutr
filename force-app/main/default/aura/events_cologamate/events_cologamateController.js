({
  doInit: function (component, event, helper) {
    var troubleshootvalue = component.get("v.troubleshootWithEngineer");
    var CaseUid = helper.createUid();
    component.set("v.CaseUid", CaseUid);
    const values = [
      { label: $A.get("$Label.c.yes"), value: "true" },
      { label: $A.get("$Label.c.no"), value: "false" }
    ];

    component.set("v.troubleshootWithEngineer11", values);
  },

  keyCheck: function (component, event, helper) {
    var querytitle = component.get("v.title");
    console.log(querytitle);
  },
  handlesuccessresult: function (component, event, helper) {
    console.log("Sending to analyticsCmp"); //Once the focuses out of title
    var searchString =
      component.get("v.title") + " " + component.get("v.softwareId"); //get title+softwareId;
  },
  generateRandomUidFunc: function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  handleChange: function (component, event, helper) {
    var radioGrpValue = component.get("v.troubleshootWithEngineer");
    // console.log('radioGrpValue',radioGrpValue);
  },
  
	getValueFromLwc : function(component, event, helper) {
		component.set("v.inputValue",event.getParam('value'));
	}
});