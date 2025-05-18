fixture('Getting Started').page('https://www.google.com/');

test('1st test', async t => {
    await t.maximizeWindow();
    await t.typeText('#APjFqb','Learning TestCafe');
    await t.click('.gNO89b');
    await t.wait(2000);
});


test('2nd test', async t => {
    //test code goes here
});

