import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ThisIsForGit1 extends LightningElement {

    handleClick() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Welcome to the new world',
            variant: 'success'
        });

        this.dispatchEvent(event);
    }

}