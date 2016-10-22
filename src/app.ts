import { autoinject, bindable } from 'aurelia-framework';
import { Prompt } from './resources/elements/prompt';
import { DialogService } from 'aurelia-dialog';

@autoinject
export class App {

  @bindable outer;
  constructor(private dialogService: DialogService) {
    this.dialogService = dialogService;

    this.outer = {
      inner: [{ name: 'first inner' }, { name: 'second inner' }]
    };
    
    setTimeout(() => {
      this.outer = JSON.parse('{ "inner":[{"name":"replaced 1"},{"name":"replaced 2"}]}');
  }, 10000)
  }

  openPrompt() {
    return this.dialogService.open({ viewModel: Prompt, model: this.outer });
  }
}
