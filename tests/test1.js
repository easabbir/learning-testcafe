fixture('This is my testcafe tests')
    .page('https://www.google.com/');

// test('This is my 1st test', async t => {
//     await t.maximizeWindow()
//     await t.typeText('.gLFyf','sabbir')
//     await t.click('.gNO89b')
//     await t.wait(2000);
// });


// test('This is my 2nd test', async t => {
//     await t
//         .maximizeWindow()
//         .typeText('#APjFqb','Learning TestCafe')
//         .click('.gNO89b')
//         .wait(2000);
// });

//fixture: is a keyword.
//page: is a method to set the page URL where the test will run.
// TestCafe tests folder consists of fixtures and tests.
// A fixture is groups of tests that share the same starting URL.
