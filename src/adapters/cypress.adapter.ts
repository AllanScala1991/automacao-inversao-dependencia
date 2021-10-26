import { IAdapter } from "../usecases/adapter.interface";

export class CypressAdapter implements IAdapter {
    doDescribe(title: string, callback: any): void {
        describe(title, callback)
    }

    doScenario(title: string, callback: any): void {
        it(title, callback)
    }

    doVisitPage(url: string): void {
        cy.visit(url)
    }

    doFill(locator: string, text: string): void {
        cy.get(locator).type(text)
    }

    doClick(locator: string): void {
        cy.get(locator).click()
    }

    doExpectVisible(locator: string): void {
        cy.get(locator)
        .should('be.visible')
    }
}