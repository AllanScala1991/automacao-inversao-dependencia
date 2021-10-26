import { Automation } from "../src/data/automation";

const test = new Automation()

test.doDescribe('Automated Tests',() => {})
test.doScenario('First Test', () => {
    test.doVisitPage('your url')
    test.doFill('locator', 'value')
    test.doFill('locator', 'value')
    test.doClick('locator')
    test.doExpectVisible('locator')
})