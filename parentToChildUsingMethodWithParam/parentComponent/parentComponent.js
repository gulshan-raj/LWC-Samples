import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleClick(event){
        this.template.querySelector('c-child-component').callMethod('working fine');
    }
}