import { IAdapter } from "../usecases/adapter.interface";
import { CypressAdapter } from "../adapters/cypress.adapter";
import { PlaywrightAdapter } from "../adapters/playwright.adapter";

export class Automation implements IAdapter {

    constructor(private readonly adapter: IAdapter = new PlaywrightAdapter()){}

    doDescribe(title: string, callback: any): void {
        this.adapter.doDescribe(title, callback)
    }

    doScenario(title: string, callback: any): void {
        this.adapter.doScenario(title, callback)
    }

    doVisitPage(url: string): void {
        this.adapter.doVisitPage(url)
    }

    doFill(locator: string, text: string): void {
        this.adapter.doFill(locator, text)
    }

    doClick(locator: string): void {
        this.adapter.doClick(locator)
    }

    doExpectVisible(locator: string): void {
        this.adapter.doExpectVisible(locator)
    }
}