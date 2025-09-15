import { Selector } from 'testcafe';

fixture`Demo Fixture`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Submit form with name', async t => {
    await t
        .typeText('#developer-name', 'Test User')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText)
        .eql('Thank you, Test User!');
});