({
    validateinput:function(component, event, helper){
        
        var validate = component.get('v.validationCheck');
        if(validate == true){
            var isTitleValid=false; //Check if title input is valid
            var title = component.get('v.title');
            if(title && title.length>0){
                isTitleValid = true;
            }
            
            var isDescriptionValid=false; //Check if description input is valid
            var description = component.get('v.email');
            if(description && description.length>0) 
                isDescriptionValid = true;
            
            
            if(isTitleValid !=true ){
                var inputelem = document.getElementsByClassName('name_title');
                
                console.log('classList textfield',inputelem);
                
            } else if(isDescriptionValid != true){
                console.log('inside');
                var inputelem = document.getElementsByTagName('email_title');
                
                console.log('classList ',inputelem);
                alert("Please enter some valid input");
                
            }
            
        }
        
    }
})