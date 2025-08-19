fixture('This is my testcafe tests').page('https://www.google.com/');

test('This is my 1st test', async t => {
    await t.maximizeWindow()
    await t.typeText('.gLFyf','sabbir')
    await t.click('.gNO89b')
    await t.wait(2000);
});


test('This is my 2nd test', async t => {
    await t
        .maximizeWindow()
        .typeText('#APjFqb','Learning TestCafe test 2 nd test')
        .click('.gNO89b')
        .wait(2000);
});

test('This is my 3rd test', async t => {
    await t
        .maximizeWindow()
        .typeText('.gLFyf','sabbir')
        .click('.gNO89b')
        .wait(2000)
});

