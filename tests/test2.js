fixture('Getting Started for test2.js')
    .page('https://trytestingthis.netlify.app/');

test('1st test', async t => {
    await t
    .maximizeWindow()
    .typeText('#fname','Ehsanul Alam')
    .typeText('#lname','Sabbirs')
    .click('#female')
    .click('#moption')
    .doubleClick('body > div.row > div.side.ex1 > button')
    .rightClick('body > div.row > div.side.ex1 > button')
    .hover('body > div.row > div.side.ex1 > button')
    //.drag('#fname', '#lname')
    .scrollIntoView('#fname')
    .wait(5000)
    
})

