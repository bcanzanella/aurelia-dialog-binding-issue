import { autoinject, bindable, BindingEngine } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';

@autoinject
export class Prompt {

    @bindable outer;
    constructor(private controller: DialogController) {}

    activate(outer) {
        this.outer = outer;
    }
}