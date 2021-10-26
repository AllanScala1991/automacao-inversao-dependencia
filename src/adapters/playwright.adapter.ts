import { IAdapter } from "../usecases/adapter.interface";

const { I } = inject()

export class PlaywrightAdapter implements IAdapter {


    async doDescribe(title: string, callback: any) {
        Feature(title)
    }

    async doScenario(title: string, callback: any) {
        Scenario(title, callback)
    }

    async doVisitPage(url: string) {
        I.amOnPage(url)
    }


    async doFill(locator: string, text: string) {
        I.fillField(locator, text)
    }

    async doClick(locator: string) {
        I.click(locator)
    }

    async doExpectVisible(locator: string) {
        I.seeElement(locator)
    }
}