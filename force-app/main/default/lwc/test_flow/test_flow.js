import { LightningElement, api, track } from 'lwc';
import {FlowAttributeChangeEvent, FlowNavigationNextEvent, FlowNavigationBackEvent } from 'lightning/flowSupport';

export default class Test_flow extends LightningElement {

@track name_val='';
@track email_val='';
@api checkvalid=false;
@api checkvalid2=false;
errorMessage = "";
isErrorMessage="";

handleTitleChange(event) {   
    this.name_val=event.target.value;
    var send_title = this.name_val;
    const handleTitleEvent = new CustomEvent('Titlechange', {
        detail: { send_title },
    });
    // Fire the custom event
    this.dispatchEvent(handleTitleEvent);
    if(this.name_val.length>0){
        this.checkvalid2=true;
    }



}
//handleEmailChange
handleEmailChange(event) {
    this.email_val=event.target.value;
    
    var send_email = this.email_val;
    const handleemailEvent = new CustomEvent('Emailchange', {
        detail: { send_email },
    });
    // Fire the custom event
    this.dispatchEvent(handleemailEvent);
    if(this.email_val.length>0){
        this.checkvalid=true;
    }

}
handleNext( event ) {
       if(this.checkvalid && this.checkvalid2 )
       {
        this.isErrorMessage=false;
        this.errorMessage = "";
    const nextNavigationEvent = new FlowNavigationNextEvent();       
    this.dispatchEvent(nextNavigationEvent);
       }
else{
    this.isErrorMessage=true;
    this.errorMessage = "please enter value";
}
}

handleBack( event ) {
   
    const nextNavigationEvent = new FlowNavigationBackEvent();       
    this.dispatchEvent(nextNavigationEvent);

}


            
}