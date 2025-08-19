import { Selector } from "testcafe";    


fixture ('Getting Started for test3.js file')
.page('https://trytestingthis.netlify.app/'); 

test('3rd test', async t => {
    await t
        .maximizeWindow()
        .typeText('#fname','Ehsanul Alam')
        .typeText('#lname', 'sabbir')
    

});

