export interface IAdapter {
    doDescribe(title: string, callback: any): void
    doScenario(title: string, callback: any): void
    doVisitPage(url: string): void
    doFill(locator: string, text: string): void
    doClick(locator: string): void
    doExpectVisible(locator: string): void
}