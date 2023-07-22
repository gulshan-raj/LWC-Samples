import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api callMethod(message){
        alert(message);
    }
}