(
    {init: function(component, event, helper) {
        
        var articleLis=document.getElementsByClassName("slds-button_brand");
        console.log(articleLis);
    },
     
    getTitleFromLwc : function(component, event, helper) {
    var title_recieve = event.getParam('send_title');
    component.set("v.title",title_recieve);
    
    
    
},
    getEmailFromLwc:function(component, event, helper){
        var desc_recieve = event.getParam('send_email');
        component.set("v.email",desc_recieve);
        
    },
})