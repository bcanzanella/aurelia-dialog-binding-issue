// Type definitions for Aurelia Protractor extensions
// Project: https://github.com/aurelia/skeleton-navigation
// Definitions by: Enrapt <https://github.com/Enrapt>, Kirill Grishin <https://github.com/KirillGrishin>

// Extend existing interfaces with additional functionality from Aurelia Protractor Extender (aurelia.protractor.js)

declare module protractor {
  interface IBrowser extends protractor.Protractor {
    loadAndWaitForAureliaPage(url: string): protractor.Protractor;
    waitForRouterComplete();
  }

  interface IProtractorLocatorStrategy {
    valueBind(bindTarget: string): webdriver.Locator;
  }
}

declare module 'aurelia-dialog' {
  export class DialogService {
    open(settings: any);
  }
  export class DialogController {
    constructor(renderer, settings, resolve, reject);
    ok(result: any): Promise<DialogResult>;
    cancel(result: any): Promise<DialogResult>;
    error(message): Promise<DialogResult>;
    close(ok: boolean, result: any): Promise<DialogResult>;
    settings: {lock: boolean, centerHorizontalOnly: boolean };
  }

  export class DialogResult {
    wasCancelled: boolean;
    output: any;
    constructor(cancelled: boolean, result: any);
  }
}