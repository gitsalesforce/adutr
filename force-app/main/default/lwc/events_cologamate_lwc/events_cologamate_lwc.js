import { LightningElement, api,track } from "lwc";

export default class Events_cologamate_lwc extends LightningElement {
  @api title='';
  @api sendinpout
  handleChange(event) {
    if(event.target.name=='mytitle'){
      this.title=event.target.value;
    }
    const tt = this.title;
    const valueChangeEvent = new CustomEvent("valuechange", {
      detail: { tt },
    });
    // Fire the custom event
    this.dispatchEvent(valueChangeEvent);
  }


  @track value = 'option1';

  get options() {
      return [
          { label: 'Option one', value: 'option1' },
          { label: 'Option two', value: 'option2' },
      ];
  }

  handleOnChange(evt) {
      this.value = 'option1';
      // how to make the UI select Option one?
  }
}